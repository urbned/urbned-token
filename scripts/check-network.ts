import { ethers } from "hardhat";

async function main() {
  const provider = ethers.provider;
  const network = await provider.getNetwork();
  console.log(`Connected to network: ${network.name}, Chain ID: ${network.chainId}`);
  const blockNumber = await provider.getBlockNumber();
  console.log(`Current block number: ${blockNumber}`);
  const balance = await provider.getBalance("0xff2259e040d05CF6250f1684b25B89CE193f3019"); // Replace with MetaMask address
  console.log(`Deployer balance: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});