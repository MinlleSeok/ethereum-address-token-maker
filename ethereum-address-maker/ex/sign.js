const Web3 = require("web3");

const PROVIDER = `https://mainnet.infura.io/`;
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER));

const PRIVATE_KEY = "";
const MESSAGE = "";

const signPlease = () => {
  const messagetoSign = web3.utils.sha3(MESSAGE);
  const signatureData = web3.eth.accounts.sign(MESSAGE, PRIVATE_KEY);

  let signature = signatureData.signature;
  let v = signatureData.v;
  let r = signatureData.r;
  let s = signatureData.s;
  console.log("messagetoSign: " + messagetoSign);
  console.log("signature: " + signature);
  console.log("v: " + v);
  console.log("r: " + r);
  console.log("s: " + s);
};

signPlease();