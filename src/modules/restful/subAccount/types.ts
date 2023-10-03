import { IsFreeze, FromAccountType, ToAccountType, SubAccountStatus, SubAccountTransferLog } from '../../enum';

export interface createAVirtualSubAccountOptions {
    recvWindow?: number;
}

export interface createAVirtualSubAccountResponse {
    email: string;
}

export interface getSubAccountListOptions {
    email?: string;
    isFreeze?: IsFreeze;
    page?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getSubAccountListResponse {
    subAccounts: getSubAccountListSubAccounts[];
}

interface getSubAccountListSubAccounts {
    email: string;
    isFreeze: boolean;
    createTime: number;
    isManagedSubAccount: boolean;
    isAssetManagementSubAccount: boolean;
}

export interface getSubAccountSpotAssetTransferHistoryOptions {
    fromEmail?: string;
    toEmail?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getSubAccountSpotAssetTransferHistoryResponse {
    from: string;
    to: string;
    asset: string;
    qty: number;
    status: SubAccountStatus;
    tranId: number;
    time: number;
}

export interface getSubAccountFuturesAssetTransferHistoryOptions {
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getSubAccountFuturesAssetTransferHistoryResponse {
    success: boolean;
    futuresType: number;
    transfers: getSubAccountFuturesAssetTransferHistoryTransfers[];
}

interface getSubAccountFuturesAssetTransferHistoryTransfers {
    from: string;
    to: string;
    asset: string;
    qty: string;
    tranId: number;
    time: number;
}


export interface subAccountFuturesAssetTransferOptions {
    recvWindow?: number;
}

export interface subAccountFuturesAssetTransferResponse {
    success: boolean;
    txnId: string;
}

export interface getSubAccountAssetsOptions {
    recvWindow?: number;
}

export interface getSubAccountAssetsResponse {
    balances: getSubAccountAssetsBalances[];
}

interface getSubAccountAssetsBalances {
    asset: string;
    free: number;
    locked: number;
}

export interface getSubAccountSpotAssetsSummaryOptions {
    email?: string;
    page?: number;
    size?: number;
    recvWindow?: number;
}

export interface getSubAccountSpotAssetsSummaryResponse {
    totalCount: number;
    masterAccountTotalAsset: string;
    spotSubUserAssetBtcVoList: getSubAccountSpotAssetsSummarySpotSubUserAssetBtcVoList[];
}

interface getSubAccountSpotAssetsSummarySpotSubUserAssetBtcVoList {
    email: string;
    totalAsset: string;
}

export interface getSubAccountDepositAddressOptions {
    network?: string;
    amount?: number;
    recvWindow?: number;
}

export interface getSubAccountDepositAddressResponse {
    address: string;
    coin: string;
    tag: string;
    url: string;
}

export interface subAccountDepositHistoryOptions {
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    offset?: number;
    recvWindow?: number;
    txId?: string;
}

export interface subAccountDepositHistoryResponse {
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
    confirmTimes: string;
    unlockConfirm: number;
    walletType: number;
}

export interface subAccountStatusOnMarginFuturesOptions {
    email?: string;
    recvWindow?: number;
}

export interface subAccountStatusOnMarginFuturesResponse {
    email: string;
    isSubUserEnabled: boolean;
    isUserActive: boolean;
    insertTime: number;
    isMarginEnabled: boolean;
    isFutureEnabled: boolean;
    mobile: number;
}

export interface enableMarginForSubAccountOptions {
    recvWindow?: number;
}

export interface enableMarginForSubAccountResponse {
    email: string;
    isMarginEnabled: boolean;
}

export interface detailOnSubAccountMarginAccountOptions {
    recvWindow?: number;
}

export interface detailOnSubAccountMarginAccountResponse {
    email: string;
    marginLevel: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    marginTradeCoeffVo: marginTradeCoeffVo;
    marginUserAssetVoList: marginUserAssetVoList[];
}

interface marginTradeCoeffVo {
    forceLiquidationBar: string
    marginCallBar: string
    normalBar: string
}

interface marginUserAssetVoList {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}

export interface summaryOfSubAccountMarginAccountOptions {
    recvWindow?: number;
}

export interface summaryOfSubAccountMarginAccountResponse {
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    subAccountList: summaryOfSubAccountMarginAccountSubAccountlist[];
}

interface summaryOfSubAccountMarginAccountSubAccountlist {
    email: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
}

export interface enableFuturesForSubAccountOptions {
    recvWindow?: number;
}

export interface enableFuturesForSubAccountResponse {
    email: string;
    isFuturesEnabled: boolean;
}

export interface detailOnSubAccountFuturesAccountOptions {
    recvWindow?: number;
}

export interface detailOnSubAccountFuturesAccountResponse {
    email: string;
    asset: string;
    assets: detailOnSubAccountFuturesAccountAssets[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    updateTime: number;
}

interface detailOnSubAccountFuturesAccountAssets {
    asset: string;
    initialMargin: string;
    maintenanceMargin: string;
    marginBalance: string;
    maxWithdrawAmount: string;
    openOrderInitialMargin: string;
    positionInitialMargin: string;
    unrealizedProfit: string;
    walletBalance: string;
}

export interface summaryOfSubAccountFuturesAccountOptions {
    recvWindow?: number;
}

export interface summaryOfSubAccountFuturesAccountResponse {
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
    subAccountList: summaryOfSubAccountFuturesAccountSubAccountlist[];
}

interface summaryOfSubAccountFuturesAccountSubAccountlist {
    email: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
}

export interface futuresPositionriskOfSubAccountOptions {
    recvWindow?: number;
}

export interface futuresPositionriskOfSubAccountResponse {
    entryPrice: string;
    leverage: string;
    maxNotional: string;
    liquidationPrice: string;
    markPrice: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}

export interface transferForSubAccountOptions {
    recvWindow?: number;
}

export interface transferForSubAccountResponse {
    txnId: string;
}

export interface marginTransferForSubAccountOptions {
    recvWindow?: number;
}

export interface marginTransferForSubAccountResponse {
    txnId: string;
}

export interface transferToSubAccountOfSameMasterOptions {
    recvWindow?: number;
}

export interface transferToSubAccountOfSameMasterResponse {
    txnId: string;
}

export interface transferToMasterOptions {
    recvWindow?: number;
}

export interface transferToMasterResponse {
    txnId: string;
}

export interface subAccountTransferHistoryOptions {
    asset?: string;
    type?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface subAccountTransferHistoryResponse {
    counterParty: string;
    email: string;
    type: number;
    asset: string;
    qty: string;
    fromAccountType: FromAccountType;
    toAccountType: ToAccountType;
    status: SubAccountStatus;
    tranId: number;
    time: number;
}

export interface universalTransferOptions {
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    symbol?: string;
    recvWindow?: number;
}

export interface universalTransferResponse {
    tranId: number;
    clientTranId: string;
}

export interface getUniversalTransferHistoryOptions {
    fromEmail?: string;
    toEmail?: string;
    clientTranId?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getUniversalTransferHistoryResponse {
    result: resultUniversalTransferHistoryResult[];
    totalCount: number;
}

interface resultUniversalTransferHistoryResult {
    tranId: number;
    fromEmail: string;
    toEmail: string;
    asset: string;
    amount: string;
    createTimeStamp: number;
    fromAccountType: FromAccountType;
    toAccountType: ToAccountType;
    status: SubAccountStatus;
    clientTranId: string;
}

export interface getDetailOnSubAccountFuturesAccountV2Options {
    recvWindow?: number;
}

export interface getDetailOnSubAccountFuturesAccountV2Response {
    futureAccountResp: detailOnSubAccountFuturesAccountV2Futureaccountresp;
}

interface detailOnSubAccountFuturesAccountV2Futureaccountresp {
    email: string;
    assets: detailOnSubAccountFuturesAccountV2Assets[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount?: string;
    totalInitialMargin?: string;
    totalMaintenanceMargin?: string;
    totalMarginBalance?: string;
    totalOpenOrderInitialMargin?: string;
    totalPositionInitialMargin?: string;
    totalUnrealizedProfit?: string;
    totalWalletBalance?: string;
    updateTime: number;
}

interface detailOnSubAccountFuturesAccountV2Assets {
    asset: string;
    initialMargin: string;
    maintenanceMargin: string;
    marginBalance: string;
    maxWithdrawAmount: string;
    openOrderInitialMargin: string;
    positionInitialMargin: string;
    unrealizedProfit: string;
    walletBalance: string;
}

export interface summaryOfSubAccountFuturesAccountV2Options {
    page?: number;
    limit?: number;
    recvWindow?: number;
}

export interface summaryOfSubAccountFuturesAccountV2Response {
    futureAccountSummaryResp: summaryOfSubAccountFuturesAccountV2Futureaccountsummaryresp;
}

interface summaryOfSubAccountFuturesAccountV2Futureaccountsummaryresp {
    totalInitialMargin: string
    totalMaintenanceMargin: string
    totalMarginBalance: string
    totalOpenOrderInitialMargin: string
    totalPositionInitialMargin: string
    totalUnrealizedProfit: string
    totalWalletBalance: string
    asset: string
    subAccountList: summaryOfSubAccountFuturesAccountV2Subaccountlist[]
}

interface summaryOfSubAccountFuturesAccountV2Subaccountlist {
    email: string
    totalInitialMargin: string
    totalMaintenanceMargin: string
    totalMarginBalance: string
    totalOpenOrderInitialMargin: string
    totalPositionInitialMargin: string
    totalUnrealizedProfit: string
    totalWalletBalance: string
    asset: string
}

export interface futuresPositionriskOfSubAccountV2Options {
    recvWindow?: number;
}

export interface futuresPositionriskOfSubAccountV2Response {
    futurePositionRiskVos: futurePositionRiskVos[];
}

interface futurePositionRiskVos {
    entryPrice: string;
    leverage: string;
    maxNotional: string;
    liquidationPrice: string;
    markPrice: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}

export interface enableLeverageTokenForSubAccountOptions {
    recvWindow?: number;
}

export interface enableLeverageTokenForSubAccountResponse {
    email: string;
    enableBlvt: boolean;
}

export interface getIpRestrictionForASubAccountApiKeyOptions {
    recvWindow?: number;
}

export interface getIpRestrictionForASubAccountApiKeyResponse {
    ipRestrict: string;
    ipList: string[];
    updateTime: number;
    apiKey: string;
}

export interface deleteIpListForASubAccountApiKeyOptions {
    ipAddress?: string;
    thirdPartyName?: string;
    recvWindow?: number;
}

export interface deleteIpListForASubAccountApiKeyResponse {
    ipRestrict: string;
    ipList: string[];
    updateTime: number;
    apiKey: string;
}

export interface updateIpRestrictionForSubAccountApiKeyOptions {
    ipAddress?: string;
    recvWindow?: number;
}

export interface updateIpRestrictionForSubAccountApiKeyResponse {
    status: string;
    ipList: string[];
    updateTime: number;
    apiKey: string;
}

export interface depositAssetsIntoTheManagedSubAccountOptions {
    recvWindow?: number;
}

export interface depositAssetsIntoTheManagedSubAccountResponse {
    tranId: number;
}

export interface getManagedSubAccountAssetDetailsOptions {
    recvWindow?: number;
}

export interface getManagedSubAccountAssetDetailsResponse {
    coin: string;
    name: string;
    totalBalance: string;
    availableBalance: string;
    inOrder: string;
    btcValue: string;
}

export interface withdrawlAssetsFromTheManagedSubAccountOptions {
    transferDate?: number;
    recvWindow?: number;
}

export interface withdrawlAssetsFromTheManagedSubAccountResponse {
    tranId: number;
}

export interface getManagedSubAccountSnapshotOptions {
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getManagedSubAccountSnapshotResponse {
    code: number;
    msg: string;
    snapshotVos: snapshotVos[];
}

interface snapshotVos {
    data: managedSubAccountSnapshotData;
    type: string;
    updateTime: number;
}

interface managedSubAccountSnapshotData {
    balances: object
    totalAssetOfBtc: string
}

export interface getManagedSubAccountTransferLogOptions {
    transfers?: string;
    transferFunctionAccountType?: SubAccountTransferLog;
}

export interface getManagedSubAccountTransferLogResponse {
    managerSubTransferHistoryVos: managerSubTransferHistoryVos[];
    count: number;
}

interface managerSubTransferHistoryVos {
    fromEmail: string;
    fromAccountType: FromAccountType;
    toEmail: string;
    toAccountType: ToAccountType;
    asset: string;
    amount: string;
    scheduledData: number;
    createTime: number;
    status: SubAccountStatus;
    tranId: number;
}

export interface getManagedSubAccountTransferLogForTradeParentOptions {
    transfers?: string;
    transferFunctionAccountType?: SubAccountTransferLog;
}

export interface getManagedSubAccountTransferLogForTradeParentResponse {
    managerSubTransferHistoryVos: managerSubTransferHistoryVos[];
    count: number;
}

export interface getManagedSubAccountFuturesAssetDetailsResponse {
    code: string;
    message: string;
    snapshotVos: futuresAssetDetailsSnapshotVos[];
}

interface futuresAssetDetailsSnapshotVos {
    data: futuresAssetDetailsSnapshotData;
    type: string;
    updateTime: number;
}

interface futuresAssetDetailsSnapshotData {
    assets: futuresAssetDetailsSnapshotDataAssets[];
    position: futuresAssetDetailsSnapshotDataPosition[];
}

interface futuresAssetDetailsSnapshotDataAssets {
    asset: string;
    marginBalance: number;
    walletBalance: number;
}

interface futuresAssetDetailsSnapshotDataPosition {
    symbol: string;
    entryPrice: number;
    markPrice: number;
    positionAmt: number;
}

export interface getManagedSubAccountMarginAssetDetailsResponse {
    margin: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    userAssets: userAssets[];
}

interface userAssets {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}

export interface getSubAccountAssetsForMasterAccountOptions {
    recvWindow?: number;
}

export interface getSubAccountAssetsForMasterAccountResponse {
    balances: getSubAccountAssetsForMasterAccountBalances[];
}

interface getSubAccountAssetsForMasterAccountBalances {
    asset: string;
    free: number;
    locked: number;
}

export interface getManagedSubAccountListOptions {
    email?: string;
    page?: number;
    limit?: number;
    recvWindow?: number;
}

export interface getManagedSubAccountListResponse {
    total: number;
    managerSubUserInfoVoList: managerSubUserInfoVoList[];
}

interface managerSubUserInfoVoList {
    rootUserId: number;
    managersubUserId: number;
    bindParentUserId: number;
    email: string;
    insertTimeStamp: number;
    bindParentEmail: string;
    isSubUserEnabled: boolean;
    isUserActive: boolean;
    isMarginEnabled: boolean;
    isFutureEnabled: boolean;
    isSignedLVTRiskAgreement: boolean;
}

export interface getSubAccountTransactionStatisticsForMasterAccountOptions {
    recvWindow?: number;
}

export interface getSubAccountTransactionStatisticsForMasterAccountResponse {
    recent30BtcTotal: string;
    recent30BtcFuturesTotal: string;
    recent30BtcMarginTotal: string;
    recent30BusdTotal: string;
    recent30BusdFuturesTotal: string;
    recent30BusdMarginTotal: string;
    tradeInfoVos: tradeInfoVos[];
}

interface tradeInfoVos {
    userId: number;
    btc: number;
    btcFutures: number;
    btcMargin: number;
    busd: number;
    busdFutures: number;
    busdMargin: number;
    date: number;
}

export interface getManagedSubAccountDepositAddressOptions {
    network?: number;
    recvWindow?: number;
}

export interface getManagedSubAccountDepositAddressResponse {
    coin: string;
    address: string;
    tag: string;
    url: string;
}

export interface enableOptionsForSubAccountOptions {
    recvWindow?: number;
}

export interface enableOptionsForSubAccountResponse {
    email: string;
    isEOptionsEnabled: boolean;
}

export interface getManagedSubAccountTransferLogForTradeSubOptions {
    transfers?: string;
    transferFunctionAccountType?: SubAccountTransferLog;
    recvWindow?: number;
}

export interface getManagedSubAccountTransferLogForTradeSubResponse {
    managerSubTransferHistoryVos: managerSubTransferHistoryVos[];
    count: number;
}