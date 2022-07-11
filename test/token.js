const { expect } = require("chai"); // chai is javascript library for assertions like expect().to.equal

describe("Token Contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners(); // Get Ethereum Network nodes - accounts which can send transactions to others

    const Token = await ethers.getContractFactory("Token"); // Token is factory for deploying smart contract - token contract

    const hardhatToken = await Token.deploy(); // token.deploy() will return *promise* - contract.

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
