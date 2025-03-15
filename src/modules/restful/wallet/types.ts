import { DustAccountType, UnivTransferType, NeedBtcValuation, UnivStatus } from '../../enum';

export interface systemStatusResponse {
    status: number;
    msg: string;
}

export interface getSymbolsDelistScheduleOptions {
    recvWindow?: number;
}

export interface getSymbolsDelistScheduleResponse {
    delistTime: number;
    symbols: string[];
}

export interface allCoinsInformationOptions {
    recvWindow?: number;
}

export interface allCoinsInformationResponse {
    coin: string;
    depositAllEnable: boolean;
    free: string;
    freeze: string;
    ipoable: string;
    ipoing: string;
    isLegalMoney: boolean;
    locked: string;
    name: string;
    networkList: allCoinsInformationNetworklist[];
    storage: string;
    trading: boolean;
    withdrawAllEnable: boolean;
    withdrawing: string;
}

export interface allCoinsInformationNetworklist {
    addressRegex: string;
    coin: string;
    depositDesc?: string;
    depositEnable: boolean;
    isDefault: boolean;
    memoRegex: string;
    minConfirm: number;
    name: string;
    network: string;
    resetAddressStatus: boolean;
    specialTips: string;
    unLockConfirm: number;
    withdrawDesc?: string;
    withdrawEnable: boolean;
    withdrawFee: string;
    withdrawIntegerMultiple: string;
    withdrawMax: string;
    withdrawMin: string;
    sameAddress: boolean;
    estimatedArrivalTime: number;
    busy: boolean;
}

export interface dailyAccountSnapshotOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface dailyAccountSnapshotResponse {
    code: number;
    msg: string;
    snapshotVos: dailyAccountSnapshotSnapshotvos[];
}

export interface dailyAccountSnapshotSnapshotvos {
    data: dailyAccountSnapshotData;
    type: string;
    updateTime: number;
}

export interface dailyAccountSnapshotData {
    balances: dailyAccountSnapshotBalances[];
    totalAssetOfBtc: string;
}

export interface dailyAccountSnapshotBalances {
    asset: string;
    free: string;
    locked: string;
}

export interface disableFastWithdrawSwitchOptions {
    recvWindow?: number;
}

export interface disableFastWithdrawSwitchResponse { }


export interface enableFastWithdrawSwitchOptions {
    recvWindow?: number;
}

export interface enableFastWithdrawSwitchResponse { }

export interface withdrawOptions {
    withdrawOrderId?: string;
    network?: string;
    addressTag?: string;
    transactionFeeFlag?: boolean;
    name?: string;
    walletType?: number;
    recvWindow?: number;
}

export interface withdrawResponse {
    id: string;
}

export interface depositHistoryOptions {
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    offset?: number;
    limit?: number;
    recvWindow?: number;
    txId?: string;
}

export interface depositHistoryResponse {
    id: string;
    amount: string;
    coin: string;
    network: string;
    status: number;
    address: string;
    addressTag: string;
    txId: string;
    insertTime: number;
    transferType: number;
    unlockConfirm: number;
    confirmTimes: string;
    walletType: number;
}

export interface withdrawHistoryOptions {
    coin?: string;
    withdrawOrderId?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    offset?: number;
    limit?: number;
    recvWindow?: number;
}

export interface withdrawHistoryResponse {
    id: string;
    address: string;
    amount: string;
    applyTime: string;
    coin: string;
    withdrawOrderId?: string;
    network: string;
    transferType: number;
    status: number;
    transactionFee: string;
    confirmNo: number;
    info: string;
    txId: string;
    walletType: number;
    txKey: string;
    completeTime: string;
}

export interface depositAddressOptions {
    network?: string;
    amount?: number;
    recvWindow?: number;
}

export interface depositAddressResponse {
    address: string;
    coin: string;
    tag: string;
    url: string;
}

export interface depositAddressListOptions {
    network?: string;
}

export interface depositAddressListResponse {
    coin: string;
    address: string;
    tag: string;
    isDefault: number;
}

export interface accountStatusOptions {
    recvWindow?: number;
}

export interface accountStatusResponse {
    data: string;
}

export interface accountApiTradingStatusOptions {
    recvWindow?: number;
}

export interface accountApiTradingStatusResponse {
    data: accountApiTradingStatusData;
}

export interface accountApiTradingStatusData {
    isLocked: boolean;
    plannedRecoverTime: number;
    triggerCondition: accountApiTradingStatusTriggercondition;
    updateTime: number;
}

export interface accountApiTradingStatusTriggercondition {
    GCR: number;
    IFER: number;
    UFR: number;
}

export interface dustlogOptions {
    accountType?: DustAccountType;
    startTime?: number;
    endTime?: number;
    recvWindow?: number;
}

export interface dustlogResponse {
    total: number;
    userAssetDribblets: dustlogUserassetdribblets[];
}

export interface dustlogUserassetdribblets {
    operateTime: number;
    totalTransferedAmount: string;
    totalServiceChargeAmount: string;
    transId: number;
    userAssetDribbletDetails: dustlogUserassetdribbletdetails[];
}

export interface dustlogUserassetdribbletdetails {
    transId: number;
    serviceChargeAmount: string;
    amount: string;
    operateTime: number;
    transferedAmount: string;
    fromAsset: string;
}

export interface getAssetsThatCanBeConvertedIntoBnbOptions {
    accountType?: DustAccountType;
    recvWindow?: number;
}

export interface getAssetsThatCanBeConvertedIntoBnbResponse {
    details: getAssetsThatCanBeConvertedIntoBnbDetails[];
    totalTransferBtc: string;
    totalTransferBNB: string;
    dribbletPercentage: string;
}

export interface getAssetsThatCanBeConvertedIntoBnbDetails {
    asset: string;
    assetFullName: string;
    amountFree: string;
    toBTC: string;
    toBNB: string;
    toBNBOffExchange: string;
    exchange: string;
}


export interface dustTransferOptions {
    accountType?: DustAccountType;
    recvWindow?: number;
}

export interface dustTransferResponse {
    totalServiceCharge: string;
    totalTransfered: string;
    transferResult: dustTransferTransferResult[];
}

export interface dustTransferTransferResult {
    amount: string;
    fromAsset: string;
    operateTime: number;
    serviceChargeAmount: string;
    tranId: number;
    transferedAmount: string;
}

export interface assetDividendRecordOptions {
    asset?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface assetDividendRecordResponse {
    rows: assetDividendRecordRows[];
    total: number;
}

export interface assetDividendRecordRows {
    id: number;
    amount: string;
    asset: string;
    divTime: number;
    enInfo: string;
    tranId: number;
}

export interface assetDetailOptions {
    asset?: string;
    recvWindow?: number;
}

export interface assetDetailResponse {
    CTR?: assetDetail;
    SKY?: assetDetail;
}

export interface queryUserWalletBalanceOptions {
    recvWindow?: number;
    quoteAsset?: string;
}

export interface queryUserWalletBalanceResponse {
    activate: boolean;
    balance: string;
    walletName: string;
}

export interface assetDetail {
    minWithdrawAmount: string
    depositStatus: boolean
    withdrawFee: number
    withdrawStatus: boolean
    depositTip?: string
}

export interface tradeFeeOptions {
    symbol?: string;
    recvWindow?: number;
}

export interface tradeFeeResponse {
    symbol: string;
    makerCommission: string;
    takerCommission: string;
}

export interface getUserUniversalTransferHistoryOptions {
    startTime?: number;
    endTime?: number;
    current?: number;
    size?: number;
    fromSymbol?: string;
    toSymbol?: string;
    recvWindow?: number;
}

export interface getUserUniversalTransferHistoryResponse {
    total: number;
    rows: getUserUniversalTransferHistoryRows[];
}

export interface getUserUniversalTransferHistoryRows {
    asset: string;
    amount: string;
    type: UnivTransferType;
    status: UnivStatus;
    tranId: number;
    timestamp: number;
}

export interface userUniversalTransferOptions {
    fromSymbol?: string;
    toSymbol?: string;
    recvWindow?: number;
}

export interface userUniversalTransferResponse {
    tranId: number;
}

export interface fundingWalletOptions {
    asset?: string;
    needBtcValuation?: NeedBtcValuation;
    recvWindow?: number;
}

export interface fundingWalletResponse {
    asset: string;
    free: string;
    locked: string;
    freeze: string;
    withdrawing: string;
    btcValuation: string;
}

export interface userAssetOptions {
    asset?: string;
    needBtcValuation?: boolean;
    recvWindow?: number;
}

export interface userAssetResponse {
    asset: string;
    free: string;
    locked: string;
    freeze: string;
    withdrawing: string;
    ipoable: string;
    btcValuation: string;
}

export interface getCloudminingPaymentAndRefundHistoryOptions {
    tranId?: number;
    clientTranId?: string;
    asset?: string;
    current?: number;
    size?: number;
}

export interface getCloudminingPaymentAndRefundHistoryResponse {
    total: number;
    rows: getCloudminingPaymentAndRefundHistoryRows[];
}

export interface queryUserDelegationHistoryOptions {
    type?: string;
    asset?: string;
    current?: number;
    size?: number;
    recvWindow?: number;
}

export interface queryUserDelegationHistoryResponse {
    total: number;
    rows: queryUserDelegationHistoryRows[];
}

export interface queryUserDelegationHistoryRows {
    clientTranId: string;
    transferType: string;
    asset: string;
    amount: string;
    time: number;
}

export interface accountInfoOptions {
    recvWindow?: number;
}

export interface accountInfoResponse {
    vipLevel: number;
    isMarginEnabled: boolean;
    isFutureEnabled: boolean;
    isOptionsEnabled: boolean;
    isPortfolioMarginRetailEnabled: boolean;
}

export interface getCloudminingPaymentAndRefundHistoryRows {
    createTime: number;
    tranId: number;
    type: number;
    asset: string;
    amount: string;
    status: string;
}

export interface getApiKeyPermissionOptions {
    recvWindow?: number;
}

export interface getApiKeyPermissionResponse {
    ipRestrict: boolean;
    createTime: number;
    enableWithdrawals: boolean;
    enableInternalTransfer: boolean;
    permitsUniversalTransfer: boolean;
    enableVanillaOptions: boolean;
    enableReading: boolean;
    enableFutures: boolean;
    enableMargin: boolean;
    enableSpotAndMarginTrading: boolean;
    enablePortfolioMarginTrading: boolean;
}

export interface oneClickArrivalDepositApplyOptions {
    depositId: string;
    txId: string;
    subAccountId?: number;
    subUserId?: number;
}

export interface oneClickArrivalDepositApplyResponse {
    code: string;
    message: string;
    data: boolean;
    success: boolean;
}