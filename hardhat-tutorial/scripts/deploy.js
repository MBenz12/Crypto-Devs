const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants');

// async function main() {
//   const whitelistContract = await ethers.getContractFactory("Whitelist");
//   const deployedWhitelistContract = await whitelistContract.deploy(10);
//   await deployedWhitelistContract.deployed();

//   console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
// }
async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  const cryptoDevsContract = await ethers.getContractFactory('CryptoDevs');
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);

  console.log("CryptoDevs Contract Address:", deployedCryptoDevsContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });