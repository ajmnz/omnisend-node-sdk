/* eslint-disable wrap-regex */
const fs = require("fs");
const path = require("path");

const { ESLint } = require("eslint");
const prettier = require("prettier");
const { generateApi } = require("swagger-typescript-api");

const prettierConfig = require("../.prettierrc.js");

async function prettierFormat(content) {
  return await prettier.format(content, {
    ...prettierConfig,
    parser: "typescript",
  });
}

const eslint = new ESLint({ useEslintrc: true, fix: true });

(async () => {
  const srcPath = path.join(__dirname, "../src");

  const toDelete = fs
    .readdirSync(srcPath)
    .filter(
      (p) =>
        ![
          "http-client.ts",
          "data-contracts.ts",
          "index.ts",
          "Omnisend.ts",
          "OmnisendCore.ts",
          "types.ts",
        ].includes(p)
    );

  for (const p of toDelete) {
    fs.rmSync(path.join(srcPath, p), { force: true, recursive: true });
  }

  const modelsPath = path.join(__dirname, "../spec");
  const modelFilenames = fs.readdirSync(modelsPath);

  const models = {};

  for (const modelFilename of modelFilenames) {
    if (!modelFilename.includes(".json")) {
      continue;
    }

    let cleanFilename = modelFilename.replace(".json", "");
    let version = null;

    if (modelFilename.includes("_")) {
      [cleanFilename, version] = modelFilename.replace(".json", "").split("_");
      version = `v${version.replace(/-/g, "")}`;
    } else if (/(V\d)$/.test(modelFilename.replace(".json", ""))) {
      version = modelFilename.replace(".json", "").match(/(V\d)$/)[0];
      cleanFilename = modelFilename.replace(".json", "").replace(version, "");
      version = version.toLowerCase();
    }

    models[cleanFilename] = path.join(modelsPath, modelFilename);
  }

  const imports = [];
  const declarations = [];
  const instances = [];

  for (const modelName of Object.keys(models)) {
    const modelPath = models[modelName];
    const declaration = [];
    const instance = [];

    fs.renameSync(
      path.join(srcPath, "http-client.ts"),
      path.join(srcPath, "_http-client.ts")
    );
    fs.renameSync(
      path.join(srcPath, "data-contracts.ts"),
      path.join(srcPath, "_data-contracts.ts")
    );

    const model = JSON.parse(fs.readFileSync(modelPath, "utf-8"));
    const result = await generateApi({
      output: srcPath,
      spec: model,
      httpClientType: "axios",
      templates: path.join(srcPath, "templates", "modular"),
      modular: true,
      singleHttpClient: true,
      unwrapResponseData: true,
      silent: true,
    });

    fs.rmSync(path.join(srcPath, "http-client.ts"), {
      recursive: true,
      force: true,
    });
    fs.rmSync(path.join(srcPath, "data-contracts.ts"), {
      recursive: true,
      force: true,
    });

    fs.renameSync(
      path.join(srcPath, "_http-client.ts"),
      path.join(srcPath, "http-client.ts")
    );
    fs.renameSync(
      path.join(srcPath, "_data-contracts.ts"),
      path.join(srcPath, "data-contracts.ts")
    );

    const typesFiles = result.files.filter(
      ({ fileName }) => !["data-contracts", "http-client"].includes(fileName)
    );

    if (!typesFiles.length) {
      throw new Error("Missing types file");
    }

    for (const typesFile of typesFiles) {
      const content = typesFile.fileContent
        .replace(
          "SecurityDataType = unknown",
          "SecurityDataType = unknown, SafeMode extends true | false = false"
        )
        .replace(
          /HttpClient<SecurityDataType>/g,
          "HttpClient<SecurityDataType, SafeMode>"
        );

      typesFile.fileName += typesFile.fileExtension;
      fs.writeFileSync(
        path.join(srcPath, typesFile.fileName),
        await prettierFormat(content)
      );

      const lintResult = await eslint.lintFiles(path.join(srcPath, typesFile.fileName));
      await ESLint.outputFixes(lintResult);

      const objectName = typesFile.fileName.replace(".ts", "");
      const importedClass = `${objectName}`.replace(/-/g, "");

      imports.push(`import { ${objectName} } from "./${objectName}";`);

      declaration.push(`${importedClass}`);
      instance.push(`new ${importedClass}(this.httpClient)`);
    }

    if (declaration.length === 1) {
      let classDeclaration = declaration[0];
      let classInstance = instance[0];

      if (declaration[0].includes(":")) {
        classDeclaration = classDeclaration.split(": ")[1];
        classInstance = classInstance.split(": ")[1];
      }

      declarations.push(
        `public ${modelName.replace(/-/g, "")}: ${classDeclaration}<unknown, S>;`
      );
      instances.push(`this.${modelName.replace(/-/g, "")} = ${classInstance};`);
    } else {
      let declarationObj = `public ${modelName}: { `;
      declarationObj += declaration.join(", ");
      declarationObj += ` };`;
      declarations.push(declarationObj);

      let instanceObj = `this.${modelName} = {`;
      instanceObj += instance.join(", ");
      instanceObj += ` };`;
      instances.push(instanceObj);
    }
  }

  const clientPath = path.join(srcPath, "Omnisend.ts");
  const clientContent = fs.readFileSync(clientPath, "utf-8");
  let newContent = clientContent.replace(
    / {2}\/\/ Model declarations(.*?) {2}\/\/ End model declarations/s,
    ["// Model declarations", ...declarations, "// End model declarations"]
      .map((i) => `  ${i}`)
      .join("\n")
  );

  newContent = newContent.replace(
    /\/\/ Model imports(.*?)\/\/ End model imports/s,
    ["// Model imports", ...imports, "// End model imports"].join("\n")
  );

  newContent = newContent.replace(
    /\/\/ Model instances(.*?)\/\/ End model instances/s,
    [
      "// Model instances",
      ...instances.map((i) => `    ${i}`),
      "    // End model instances",
    ].join("\n")
  );

  newContent = await prettierFormat(newContent);

  fs.writeFileSync(clientPath, newContent);
})();
