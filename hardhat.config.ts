import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";
 
tenderly.setup({ automaticVerifications: true });
 
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    virtualMainnet: {
      url: process.env.TENDERLY_VIRTUAL_MAINNET_RPC!,
    },
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: "CoffheeSwap",
    username: "islandersfan2025",
  },
};
 
export default config;