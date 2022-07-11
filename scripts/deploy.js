async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Accounter owner's address is ", deployer.address);

  console.log("Account balance: ", (await deployer.getBalance()).toString());

  // Factory
  const Token = await ethers.getContractFactory("Token");
  // token deploy
  const token = await Token.deploy();

  console.log("Token Address: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
