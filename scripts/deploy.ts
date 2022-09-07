import { ethers } from "hardhat";

async function main() {
  
  if(!process.env.PAIR) throw new Error("PAIR address is required")

  const PAIR: string = String(process.env.PAIR);

  const UniswapV2Twap = await ethers.getContractFactory("UniswapV2Twap");
  const uniswapV2Twap = await UniswapV2Twap.deploy(PAIR);

  await uniswapV2Twap.deployed();

  console.log(`UniswapV2Twap deployed to ${uniswapV2Twap.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
