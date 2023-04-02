# Owl Protocol Starter CLI
A starter repository to deploy NFT collection using Owl Protocol's [CLI](https://github.com/owlprotocol/owlprotocol/tree/main/packages/cli)

See our [docs](http://localhost:3000/contracts/getting-started/cli) on how to get started with our CLI

## Getting started

### Requirements
* Node.js v16 or v18
* PNPM (NPM is fine too)
* Owl Protocol CLI

### Install
* Install the CLI if you haven't already:
```bash
pnpm install -g @owlprotocol/nft-sdk-cli
```

* Install node modules:
```bash
pnpm install
```

### Environment variables
* `NETWORK`: the network settings to use in the `networks.json` file.
    * Note: you can add more network settings in that file.
* `HD_WALLET_MNEMONIC`: the mnemonic to use for blockchain interactions with the CLI.
* `PRIVATE_KEY_0`: instead of `HD_WALLET_MNEMONIC`, you can directly specify a private key.

Note: by default, the `owl-cli` looks at `.env.development` for environment variables if it exists.

### Project setup
Create a folder under `projects`, say `my-project`:

```bash
mkdir projects/my-project
```

Create your `traits.ts` and `collections.ts` files in that folder.

## Compiling projects
Run the `build` script to compile TypeScript files in the `projects` foldfer into JavaScript files.

```bash
pnpm run build
```

### Run Ganache or configure the network you want to use

Running Ganache locally is easy:
```bash
pnpm i -g ganache
ganache --wallet.mnemonic '<MY MNEMONIC>'
```

This must match the `HD_WALLET_MNEMONIC` in the `.env.development` file.

## Generating a collection JSON Schema
```bash
owl-cli generateJsonSchema collections.js --projectFolder=projects/<my-project>
```

## Continue with our docs at: 

[https://docs.owlprotocol.xyz/contracts](https://docs.owlprotocol.xyz/contracts)


# AI-Outfitters
