import { JsonRpcRequest } from "@walletconnect/jsonrpc-utils";
import { ChainsMap } from "caip-api";

import {
  NamespaceMetadata,
  ChainMetadata,
  ChainRequestRender,
} from "../helpers";

export const CactusMetadata: NamespaceMetadata = {
  testnet: {
    logo: "https://www.cactus-network.net/wp-content/uploads/cactus_logo.svg",
    rgb: "92, 170, 98",
  },
  mainnet: {
    logo: "https://www.cactus-network.net/wp-content/uploads/cactus_logo.svg",
    rgb: "92, 170, 98",
  },
};

// TODO: add `cactus` namespace to `caip-api` package to avoid manual specification here.
export const CactusChainData: ChainsMap = {
  testnet: {
    name: "Cactus Testnet",
    id: "cactus:testnet",
    rpc: ["https://cactus-network.net"],
    slip44: 11444,
    testnet: false,
  },
  mainnet: {
    name: "Cactus Mainnet",
    id: "cactus:mainnet",
    rpc: ["https://cactus-network.net"],
    slip44: 11444,
    testnet: true,
  }
};

export function getChainMetadata(chainId: string): ChainMetadata {
  const reference = chainId.split(":")[1];
  const metadata = CactusMetadata[reference];
  if (typeof metadata === "undefined") {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}

export function getChainRequestRender(
  request: JsonRpcRequest
): ChainRequestRender[] {
  let params = [{ label: "Method", value: request.method }];

  switch (request.method) {
    default:
      params = [
        ...params,
        {
          label: "params",
          value: JSON.stringify(request.params, null, "\t"),
        },
      ];
      break;
  }
  return params;
}
