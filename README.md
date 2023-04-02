# AI Outfitters


### Requirements
* Node.js v16 or v18
* NPM 
* Owl Protocol CLI

### Install
* Install the CLI if you haven't already:
```bash
npm install -g @owlprotocol/nft-sdk-cli
```

* Install node modules:
```bash
npm install
```

### Environment variables
* `NETWORK`: the network settings to use in the `networks.json` file.
    * Note: you can add more network settings in that file.
* `HD_WALLET_MNEMONIC`: the mnemonic to use for blockchain interactions with the CLI.
* `PRIVATE_KEY_0`: instead of `HD_WALLET_MNEMONIC`, you can directly specify a private key.

Note: by default, the `owl-cli` looks at `.env.development` for environment variables if it exists.

### Project setup

## Compiling project
Run the `build` script to compile TypeScript files in the `projects` foldfer into JavaScript files.

```bash
npm run build
```

## Run Ganache or configure the network you want to use

Running Ganache locally is easy:
```bash
npm i -g ganache
ganache --wallet.mnemonic '<MY MNEMONIC>'
```

This must match the `HD_WALLET_MNEMONIC` in the `.env.development` file.

## Generating a collection JSON Schema
```bash
owl-cli generateJsonSchema collections.js --projectFolder=projects/example-omo
owl-cli generateRandomNFT projects/example-omo/collections.js 5 --project= projects/example-omo 
owl-cli deployTopDown --projectFolder=projects/example-omo  --deployCommon=true --debug=true
owl-cli viewTopDown --root={root_contract_addr_from_console_here} --tokenId=3 --debug
```
## To view the NFT Image
curl -s tokenURI 
open imageURL

# AI-Outfitters
