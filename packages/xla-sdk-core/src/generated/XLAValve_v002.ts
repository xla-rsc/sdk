/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface XLAValve_v002Interface extends utils.Interface {
  functions: {
    "autoNativeTokenDistribution()": FunctionFragment;
    "controller()": FunctionFragment;
    "distributors(address)": FunctionFragment;
    "factory()": FunctionFragment;
    "immutableController()": FunctionFragment;
    "initialize(address,address,address[],bool,bool,uint256,uint256,address,address[],uint256[])": FunctionFragment;
    "minAutoDistributionAmount()": FunctionFragment;
    "numberOfRecipients()": FunctionFragment;
    "owner()": FunctionFragment;
    "platformFee()": FunctionFragment;
    "recipients(uint256)": FunctionFragment;
    "recipientsPercentage(address)": FunctionFragment;
    "redistributeNativeToken()": FunctionFragment;
    "redistributeToken(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "setDistributor(address,bool)": FunctionFragment;
    "setRecipients(address[],uint256[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "autoNativeTokenDistribution"
      | "controller"
      | "distributors"
      | "factory"
      | "immutableController"
      | "initialize"
      | "minAutoDistributionAmount"
      | "numberOfRecipients"
      | "owner"
      | "platformFee"
      | "recipients"
      | "recipientsPercentage"
      | "redistributeNativeToken"
      | "redistributeToken"
      | "renounceOwnership"
      | "setController"
      | "setDistributor"
      | "setRecipients"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "autoNativeTokenDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "immutableController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "minAutoDistributionAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "platformFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recipients",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "recipientsPercentage",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "redistributeNativeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redistributeToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistributor",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipients",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "autoNativeTokenDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "immutableController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minAutoDistributionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recipients", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recipientsPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redistributeNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redistributeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ControllerChanged(address,address)": EventFragment;
    "DistributeToken(address,uint256)": EventFragment;
    "DistributorChanged(address,bool)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetRecipients(address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributeToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRecipients"): EventFragment;
}

export interface ControllerChangedEventObject {
  oldController: string;
  newController: string;
}
export type ControllerChangedEvent = TypedEvent<
  [string, string],
  ControllerChangedEventObject
>;

export type ControllerChangedEventFilter =
  TypedEventFilter<ControllerChangedEvent>;

export interface DistributeTokenEventObject {
  token: string;
  amount: BigNumber;
}
export type DistributeTokenEvent = TypedEvent<
  [string, BigNumber],
  DistributeTokenEventObject
>;

export type DistributeTokenEventFilter = TypedEventFilter<DistributeTokenEvent>;

export interface DistributorChangedEventObject {
  distributor: string;
  isDistributor: boolean;
}
export type DistributorChangedEvent = TypedEvent<
  [string, boolean],
  DistributorChangedEventObject
>;

export type DistributorChangedEventFilter =
  TypedEventFilter<DistributorChangedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetRecipientsEventObject {
  recipients: string[];
  percentages: BigNumber[];
}
export type SetRecipientsEvent = TypedEvent<
  [string[], BigNumber[]],
  SetRecipientsEventObject
>;

export type SetRecipientsEventFilter = TypedEventFilter<SetRecipientsEvent>;

export interface XLAValve_v002 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: XLAValve_v002Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    autoNativeTokenDistribution(overrides?: CallOverrides): Promise<[boolean]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    distributors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    immutableController(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _owner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _distributors: PromiseOrValue<string>[],
      _immutableController: PromiseOrValue<boolean>,
      _autoNativeTokenDistribution: PromiseOrValue<boolean>,
      _minAutoDistributionAmount: PromiseOrValue<BigNumberish>,
      _platformFee: PromiseOrValue<BigNumberish>,
      _factoryAddress: PromiseOrValue<string>,
      _initialRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    minAutoDistributionAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    numberOfRecipients(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    platformFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    recipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recipientsPercentage(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    redistributeNativeToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redistributeToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      _isDistributor: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRecipients(
      _newRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  autoNativeTokenDistribution(overrides?: CallOverrides): Promise<boolean>;

  controller(overrides?: CallOverrides): Promise<string>;

  distributors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  factory(overrides?: CallOverrides): Promise<string>;

  immutableController(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _owner: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    _distributors: PromiseOrValue<string>[],
    _immutableController: PromiseOrValue<boolean>,
    _autoNativeTokenDistribution: PromiseOrValue<boolean>,
    _minAutoDistributionAmount: PromiseOrValue<BigNumberish>,
    _platformFee: PromiseOrValue<BigNumberish>,
    _factoryAddress: PromiseOrValue<string>,
    _initialRecipients: PromiseOrValue<string>[],
    _percentages: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  minAutoDistributionAmount(overrides?: CallOverrides): Promise<BigNumber>;

  numberOfRecipients(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  platformFee(overrides?: CallOverrides): Promise<BigNumber>;

  recipients(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  recipientsPercentage(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  redistributeNativeToken(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redistributeToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setController(
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDistributor(
    _distributor: PromiseOrValue<string>,
    _isDistributor: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRecipients(
    _newRecipients: PromiseOrValue<string>[],
    _percentages: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    autoNativeTokenDistribution(overrides?: CallOverrides): Promise<boolean>;

    controller(overrides?: CallOverrides): Promise<string>;

    distributors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    factory(overrides?: CallOverrides): Promise<string>;

    immutableController(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _owner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _distributors: PromiseOrValue<string>[],
      _immutableController: PromiseOrValue<boolean>,
      _autoNativeTokenDistribution: PromiseOrValue<boolean>,
      _minAutoDistributionAmount: PromiseOrValue<BigNumberish>,
      _platformFee: PromiseOrValue<BigNumberish>,
      _factoryAddress: PromiseOrValue<string>,
      _initialRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    minAutoDistributionAmount(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    platformFee(overrides?: CallOverrides): Promise<BigNumber>;

    recipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    recipientsPercentage(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redistributeNativeToken(overrides?: CallOverrides): Promise<void>;

    redistributeToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      _isDistributor: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecipients(
      _newRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ControllerChanged(address,address)"(
      oldController?: null,
      newController?: null
    ): ControllerChangedEventFilter;
    ControllerChanged(
      oldController?: null,
      newController?: null
    ): ControllerChangedEventFilter;

    "DistributeToken(address,uint256)"(
      token?: null,
      amount?: null
    ): DistributeTokenEventFilter;
    DistributeToken(token?: null, amount?: null): DistributeTokenEventFilter;

    "DistributorChanged(address,bool)"(
      distributor?: null,
      isDistributor?: null
    ): DistributorChangedEventFilter;
    DistributorChanged(
      distributor?: null,
      isDistributor?: null
    ): DistributorChangedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetRecipients(address[],uint256[])"(
      recipients?: null,
      percentages?: null
    ): SetRecipientsEventFilter;
    SetRecipients(
      recipients?: null,
      percentages?: null
    ): SetRecipientsEventFilter;
  };

  estimateGas: {
    autoNativeTokenDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    distributors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    immutableController(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _distributors: PromiseOrValue<string>[],
      _immutableController: PromiseOrValue<boolean>,
      _autoNativeTokenDistribution: PromiseOrValue<boolean>,
      _minAutoDistributionAmount: PromiseOrValue<BigNumberish>,
      _platformFee: PromiseOrValue<BigNumberish>,
      _factoryAddress: PromiseOrValue<string>,
      _initialRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    minAutoDistributionAmount(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    platformFee(overrides?: CallOverrides): Promise<BigNumber>;

    recipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recipientsPercentage(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redistributeNativeToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redistributeToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      _isDistributor: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRecipients(
      _newRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    autoNativeTokenDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    immutableController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: PromiseOrValue<string>,
      _controller: PromiseOrValue<string>,
      _distributors: PromiseOrValue<string>[],
      _immutableController: PromiseOrValue<boolean>,
      _autoNativeTokenDistribution: PromiseOrValue<boolean>,
      _minAutoDistributionAmount: PromiseOrValue<BigNumberish>,
      _platformFee: PromiseOrValue<BigNumberish>,
      _factoryAddress: PromiseOrValue<string>,
      _initialRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    minAutoDistributionAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfRecipients(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platformFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recipientsPercentage(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redistributeNativeToken(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redistributeToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      _isDistributor: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRecipients(
      _newRecipients: PromiseOrValue<string>[],
      _percentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
