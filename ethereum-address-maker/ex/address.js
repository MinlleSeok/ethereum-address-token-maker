const Web3 = require("web3");

const PROVIDER = `https://mainnet.infura.io/`;
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER));

const ADDRESS = "";

console.log(`address verify : ${web3.utils.isAddress(ADDRESS)}`);
console.log(
  `address balance : ${web3.eth.getBalance(ADDRESS).then(val => {
    console.log(`address balance : ${val}`);
  })}`
);

