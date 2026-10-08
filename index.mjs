import { createRequire } from "node:module";

const { default: Omnisend } = createRequire(import.meta.url)("./index");

export default Omnisend;
