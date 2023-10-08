import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9bf9d87DfCBc605254F2025455C1CfB43a825481";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/_2oSiKjvT6azVUsGH09dVDODwy_zEpSP",
  },
};
