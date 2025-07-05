const { expect } = require("chai");

describe("URBNED Token", function () {
  let URBNED, urbned, owner, addr1;

  beforeEach(async function () {
    URBNED = await ethers.getContractFactory("URBNED");
    [owner, addr1] = await ethers.getSigners();
    urbned = await URBNED.deploy();
    await urbned.waitForDeployment();
  });

  it("Should have correct name, symbol, and decimals", async function () {
    expect(await urbned.name()).to.equal("Urbned");
    expect(await urbned.symbol()).to.equal("URBN");
    expect(await urbned.decimals()).to.equal(6);
  });

  it("Should mint 80M tokens to deployer", async function () {
    expect(await urbned.balanceOf(owner.address)).to.equal(80_000_000n * 10n**6n);
  });

  it("Should allow burning", async function () {
    const burnAmount = 1_000_000n; // 1 URBN
    await urbned.burn(burnAmount);
    const expectedBalance = 80_000_000n * 10n**6n - burnAmount;
    expect(await urbned.balanceOf(owner.address)).to.equal(expectedBalance);
  });
});