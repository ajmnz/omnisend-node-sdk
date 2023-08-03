<h1 align="center">Omnisend API SDK</h1>
<p align="center">Typesafe Omnisend API SDK for Node.js</p>
<div align="center">
  <a href="https://www.npmjs.com/package/omnisend-node-sk">NPM</a>
</div>

<hr>

- 🛡 Fully typesafe with Omnisend official definitions
- ⚔️ Authentication out of the box

## Installation

```sh
yarn add omnisend-node-sdk
# or with npm
npm install omnisend-node-sdk
```

## Before starting

Make sure to familiarize yourself with the [Omnisend API Docs](https://api-docs.omnisend.com/reference/getting-started) before using this client. You will need an Omnisend API Key that you can get from [your account](https://app.omnisend.com/#/my-account/integrations/api-keys).

## Usage

#### Client options

| option   | description                                                                                                     | required | default |
| -------- | --------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `apiKey` | Your Omnisend API Key. Get it from [your account](https://app.omnisend.com/#/my-account/integrations/api-keys). | Yes      |         |
| `debug`  | Enable debug logging. Useful to troubleshoot errors.                                                            | No       | `false` |

#### Calling the API

Import the client

```ts
import Omnisend from "omnisend-node-sdk";
```

Create a new instance

```ts
const omnisend = new Omnisend({
  apiKey: "your-api-key",
});
```

Now all APIs/endpoints are available as properties from the instance you just created.

```ts
const contacts = await omnisend.contacts.listContacts();
```

#### Accessing types for each endpoint

If you any of the types of a specific endpoint, you can import them from `omnisend-node-sdk/data-contracts`.

```ts
import type { ContactsOutput } from "omnisend-node-sdk/data-contracts";
```
