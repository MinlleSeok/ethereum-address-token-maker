
module.exports = function hex(name, password, second_password) {
    const Web3 = require("web3");
    const CryptoJS = require("crypto-js");
    const fs = require('fs');

    const PASSWORD = password;
    const SECOND_PASSWORD = second_password;
    const PROVIDER = `https://mainnet.infura.io/`;
    // const PROVIDER = `https://ropsten.infura.io/`;
    
    const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER));

    const NEW_PRIVATE_ACCOUNT = web3.eth.accounts.create();
    const ADDRESS = NEW_PRIVATE_ACCOUNT.address;
    const PRIVATE_KEY = NEW_PRIVATE_ACCOUNT.privateKey;

    console.log(`=======================================`);
    console.log(`JSON : ${JSON.stringify(NEW_PRIVATE_ACCOUNT)}`);
    console.log(`Account : ${ADDRESS}`);
    console.log(`private key : ${PRIVATE_KEY}`);
    console.log(`=======================================`);

    const ENCRYPTED_WALLET = web3.eth.accounts.encrypt(PRIVATE_KEY, PASSWORD);
    console.log(`=======================================`);
    console.log(ENCRYPTED_WALLET);
    console.log(`=======================================`);

    // Encrypt
    const HASHED_PASSWORD = CryptoJS.SHA256(SECOND_PASSWORD).toString();
    const CIPHER_TEXT = CryptoJS.AES.encrypt(JSON.stringify(ENCRYPTED_WALLET), HASHED_PASSWORD).toString();
    console.log(`=======================================`);
    console.log(CIPHER_TEXT);
    console.log(`=======================================`);

    fs.writeFileSync(`${process.cwd()}/json/${name}.json`, CIPHER_TEXT);
    console.log(`=======================================`);
    console.log(`made ${name}.json`);
    console.log(`=======================================`);
}