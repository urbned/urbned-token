import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  const URBNED = await ethers.getContractFactory("URBNED");
  const urbned = await URBNED.deploy();
  await urbned.waitForDeployment();
  const address = urbned.target;
  console.log(`URBNED deployed to: ${address}`);
  fs.appendFileSync("deployed_addresses.txt", `URBNED (Sepolia): ${address}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});