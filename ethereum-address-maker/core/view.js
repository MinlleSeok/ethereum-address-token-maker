module.exports = function view(name, password, second_password) {
    const Web3 = require("web3");
    const CryptoJS = require("crypto-js");
    const fs = require('fs');

    const PASSWORD = password;
    const SECOND_PASSWORD = second_password;
    const PROVIDER = `https://mainnet.infura.io/`;
    // const PROVIDER = `https://ropsten.infura.io/`;
    
    const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER));

    const ADDRESS_JSON = fs.readFileSync(`${process.cwd()}/json/${name}.json`, 'utf8');
    console.log(`=======================================`);
    console.log(ADDRESS_JSON);
    console.log(`=======================================`);

    // Decrypt
    const HASHED_PASSWORD = CryptoJS.SHA256(SECOND_PASSWORD).toString();
    const bytes = CryptoJS.AES.decrypt(ADDRESS_JSON, HASHED_PASSWORD);
    const DECRYPTED_DATA = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    console.log(`=======================================`);
    console.log(DECRYPTED_DATA);
    console.log(`=======================================`);

    const DECRYPTED_WALLET = web3.eth.accounts.decrypt(DECRYPTED_DATA, PASSWORD);

    console.log(`=======================================`);
    console.log(DECRYPTED_WALLET);
    console.log(`=======================================`);
}