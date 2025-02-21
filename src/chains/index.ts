import { JsonRpcRequest } from "@walletconnect/jsonrpc-utils";

import * as eip155 from "./eip155";
import * as cosmos from "./cosmos";
import * as polkadot from "./polkadot";
import * as solana from "./solana";
import * as near from "./near";
import * as cactus from "./cactus";
import * as elrond from "./elrond";

import { ChainMetadata, ChainRequestRender } from "../helpers";

export function getChainMetadata(chainId: string): ChainMetadata {
  const namespace = chainId.split(":")[0];
  switch (namespace) {
    case "eip155":
      return eip155.getChainMetadata(chainId);
    case "cosmos":
      return cosmos.getChainMetadata(chainId);
    case "polkadot":
      return polkadot.getChainMetadata(chainId);
    case "solana":
      return solana.getChainMetadata(chainId);
    case "near":
      return near.getChainMetadata(chainId);
    case "cactus":
      return cactus.getChainMetadata(chainId);
    case "elrond":
      return elrond.getChainMetadata(chainId);
    default:
      throw new Error(`No metadata handler for namespace ${namespace}`);
  }
}

export function getChainRequestRender(
  request: JsonRpcRequest,
  chainId: string
): ChainRequestRender[] {
  const namespace = chainId.split(":")[0];
  switch (namespace) {
    case "eip155":
      return eip155.getChainRequestRender(request);
    case "cosmos":
      return cosmos.getChainRequestRender(request);
    case "polkadot":
      return polkadot.getChainRequestRender(request);
    case "cactus":
      return cactus.getChainRequestRender(request);
    case "near":
      return near.getChainRequestRender(request);
    default:
      throw new Error(`No render handler for namespace ${namespace}`);
  }
}
