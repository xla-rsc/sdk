/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  XLAValveFactory_v002,
  XLAValveFactory_v002Interface,
} from "../XLAValveFactory_v002";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CreationIdAlreadyProcessed",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidFeePercentage",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "PlatformFeeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "oldPlatformWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "newPlatformWallet",
        type: "address",
      },
    ],
    name: "PlatformWalletChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "distributor",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "immutableController",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "autoNativeTokenDistribution",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minAutoDistributeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "creationId",
        type: "bytes32",
      },
    ],
    name: "RSCValveCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "contractImplementation",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "controller",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "distributors",
            type: "address[]",
          },
          {
            internalType: "bool",
            name: "immutableController",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "autoNativeTokenDistribution",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "minAutoDistributeAmount",
            type: "uint256",
          },
          {
            internalType: "address payable[]",
            name: "initialRecipients",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "percentages",
            type: "uint256[]",
          },
          {
            internalType: "bytes32",
            name: "creationId",
            type: "bytes32",
          },
        ],
        internalType: "struct XLARSCValveFactory.RSCCreateData",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "createRSCValve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformWallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedCreationIds",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setPlatformFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_platformWallet",
        type: "address",
      },
    ],
    name: "setPlatformWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class XLAValveFactory_v002__factory {
  static readonly abi = _abi;
  static createInterface(): XLAValveFactory_v002Interface {
    return new utils.Interface(_abi) as XLAValveFactory_v002Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XLAValveFactory_v002 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as XLAValveFactory_v002;
  }
}
