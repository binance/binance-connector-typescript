import {
    FromAccountType,
    ToAccountType,
    AccountSnapshotType
} from '../../enum';

import {
    createAVirtualSubAccountOptions,
    createAVirtualSubAccountResponse,
    getSubAccountListOptions,
    getSubAccountListResponse,
    getSubAccountSpotAssetTransferHistoryOptions,
    getSubAccountSpotAssetTransferHistoryResponse,
    getSubAccountFuturesAssetTransferHistoryOptions,
    getSubAccountFuturesAssetTransferHistoryResponse,
    subAccountFuturesAssetTransferOptions,
    subAccountFuturesAssetTransferResponse,
    getSubAccountAssetsOptions,
    getSubAccountAssetsResponse,
    getSubAccountSpotAssetsSummaryOptions,
    getSubAccountSpotAssetsSummaryResponse,
    getSubAccountDepositAddressOptions,
    getSubAccountDepositAddressResponse,
    subAccountDepositHistoryOptions,
    subAccountDepositHistoryResponse,
    subAccountStatusOnMarginFuturesOptions,
    subAccountStatusOnMarginFuturesResponse,
    enableMarginForSubAccountOptions,
    enableMarginForSubAccountResponse,
    detailOnSubAccountMarginAccountOptions,
    detailOnSubAccountMarginAccountResponse,
    summaryOfSubAccountMarginAccountOptions,
    summaryOfSubAccountMarginAccountResponse,
    enableFuturesForSubAccountOptions,
    enableFuturesForSubAccountResponse,
    detailOnSubAccountFuturesAccountOptions,
    detailOnSubAccountFuturesAccountResponse,
    summaryOfSubAccountFuturesAccountOptions,
    summaryOfSubAccountFuturesAccountResponse,
    futuresPositionriskOfSubAccountOptions,
    futuresPositionriskOfSubAccountResponse,
    transferForSubAccountOptions,
    transferForSubAccountResponse,
    marginTransferForSubAccountOptions,
    marginTransferForSubAccountResponse,
    transferToSubAccountOfSameMasterOptions,
    transferToSubAccountOfSameMasterResponse,
    transferToMasterOptions,
    transferToMasterResponse,
    subAccountTransferHistoryOptions,
    subAccountTransferHistoryResponse,
    getUniversalTransferHistoryOptions,
    getUniversalTransferHistoryResponse,
    universalTransferOptions,
    universalTransferResponse,
    getDetailOnSubAccountFuturesAccountV2Options,
    getDetailOnSubAccountFuturesAccountV2Response,
    summaryOfSubAccountFuturesAccountV2Options,
    summaryOfSubAccountFuturesAccountV2Response,
    futuresPositionriskOfSubAccountV2Options,
    futuresPositionriskOfSubAccountV2Response,
    enableLeverageTokenForSubAccountOptions,
    enableLeverageTokenForSubAccountResponse,
    depositAssetsIntoTheManagedSubAccountOptions,
    depositAssetsIntoTheManagedSubAccountResponse,
    getManagedSubAccountAssetDetailsOptions,
    getManagedSubAccountAssetDetailsResponse,
    withdrawlAssetsFromTheManagedSubAccountOptions,
    withdrawlAssetsFromTheManagedSubAccountResponse,
    getManagedSubAccountSnapshotOptions,
    getManagedSubAccountSnapshotResponse,
    getIpRestrictionForASubAccountApiKeyOptions,
    getIpRestrictionForASubAccountApiKeyResponse,
    deleteIpListForASubAccountApiKeyOptions,
    deleteIpListForASubAccountApiKeyResponse,
    updateIpRestrictionForSubAccountApiKeyOptions,
    updateIpRestrictionForSubAccountApiKeyResponse,
    getManagedSubAccountTransferLogOptions,
    getManagedSubAccountTransferLogResponse,
    getManagedSubAccountTransferLogForTradeParentOptions,
    getManagedSubAccountTransferLogForTradeParentResponse,
    getManagedSubAccountFuturesAssetDetailsResponse,
    getManagedSubAccountMarginAssetDetailsResponse,
    getSubAccountAssetsForMasterAccountOptions,
    getSubAccountAssetsForMasterAccountResponse,
    getManagedSubAccountListOptions,
    getManagedSubAccountListResponse,
    getSubAccountTransactionStatisticsForMasterAccountOptions,
    getSubAccountTransactionStatisticsForMasterAccountResponse,
    getManagedSubAccountDepositAddressOptions,
    getManagedSubAccountDepositAddressResponse,
    enableOptionsForSubAccountOptions,
    enableOptionsForSubAccountResponse,
    getManagedSubAccountTransferLogForTradeSubOptions,
    getManagedSubAccountTransferLogForTradeSubResponse,
} from './types';

export interface SubAccountMethods {
    createAVirtualSubAccount(subAccountString: string, options?: createAVirtualSubAccountOptions): Promise<createAVirtualSubAccountResponse>;
    getSubAccountList(options?: getSubAccountListOptions): Promise<getSubAccountListResponse>;
    getSubAccountSpotAssetTransferHistory(options?: getSubAccountSpotAssetTransferHistoryOptions): Promise<getSubAccountSpotAssetTransferHistoryResponse[]>;
    getSubAccountFuturesAssetTransferHistory(email: string, futuresType: number, options?: getSubAccountFuturesAssetTransferHistoryOptions): Promise<getSubAccountFuturesAssetTransferHistoryResponse>;
    subAccountFuturesAssetTransfer(fromEmail: string, toEmail: string, futuresType: number, asset: string, amount: number, options?: subAccountFuturesAssetTransferOptions): Promise<subAccountFuturesAssetTransferResponse>;
    getSubAccountAssets(email: string, options?: getSubAccountAssetsOptions): Promise<getSubAccountAssetsResponse>;
    getSubAccountSpotAssetsSummary(options?: getSubAccountSpotAssetsSummaryOptions): Promise<getSubAccountSpotAssetsSummaryResponse>;
    getSubAccountDepositAddress(email: string, coin: string, options?: getSubAccountDepositAddressOptions): Promise<getSubAccountDepositAddressResponse>;
    subAccountDepositHistory(email: string, options?: subAccountDepositHistoryOptions): Promise<subAccountDepositHistoryResponse[]>;
    subAccountStatusOnMarginFutures(options?: subAccountStatusOnMarginFuturesOptions): Promise<subAccountStatusOnMarginFuturesResponse[]>;
    enableMarginForSubAccount(email: string, options?: enableMarginForSubAccountOptions): Promise<enableMarginForSubAccountResponse>;
    detailOnSubAccountMarginAccount(email: string, options?: detailOnSubAccountMarginAccountOptions): Promise<detailOnSubAccountMarginAccountResponse>;
    summaryOfSubAccountMarginAccount(options?: summaryOfSubAccountMarginAccountOptions): Promise<summaryOfSubAccountMarginAccountResponse>;
    enableFuturesForSubAccount(email: string, options?: enableFuturesForSubAccountOptions): Promise<enableFuturesForSubAccountResponse>;
    detailOnSubAccountFuturesAccount(email: string, options?: detailOnSubAccountFuturesAccountOptions): Promise<detailOnSubAccountFuturesAccountResponse>;
    summaryOfSubAccountFuturesAccount(options?: summaryOfSubAccountFuturesAccountOptions): Promise<summaryOfSubAccountFuturesAccountResponse>;
    futuresPositionriskOfSubAccount(email: string, options?: futuresPositionriskOfSubAccountOptions): Promise<futuresPositionriskOfSubAccountResponse[]>;
    transferForSubAccount(email: string, asset: string, amount: number, type: number, options?: transferForSubAccountOptions): Promise<transferForSubAccountResponse>;
    marginTransferForSubAccount(email: string, asset: string, amount: number, type: number, options?: marginTransferForSubAccountOptions): Promise<marginTransferForSubAccountResponse>;
    transferToSubAccountOfSameMaster(toEmail: string, asset: string, amount: number, options?: transferToSubAccountOfSameMasterOptions): Promise<transferToSubAccountOfSameMasterResponse>;
    transferToMaster(asset: string, amount: number, options?: transferToMasterOptions): Promise<transferToMasterResponse>;
    subAccountTransferHistory(options?: subAccountTransferHistoryOptions): Promise<subAccountTransferHistoryResponse[]>;
    universalTransfer(fromAccountType: FromAccountType, toAccountType: ToAccountType, asset: string, amount: number, options?: universalTransferOptions): Promise<universalTransferResponse>;
    getUniversalTransferHistory(options?: getUniversalTransferHistoryOptions): Promise<getUniversalTransferHistoryResponse>;
    getDetailOnSubAccountFuturesAccountV2(email: string, futuresType: number, options?: getDetailOnSubAccountFuturesAccountV2Options): Promise<getDetailOnSubAccountFuturesAccountV2Response>;
    summaryOfSubAccountFuturesAccountV2(futuresType: number, options?: summaryOfSubAccountFuturesAccountV2Options): Promise<summaryOfSubAccountFuturesAccountV2Response>;
    futuresPositionriskOfSubAccountV2(email: string, futuresType: number, options?: futuresPositionriskOfSubAccountV2Options): Promise<futuresPositionriskOfSubAccountV2Response>;
    enableLeverageTokenForSubAccount(email: string, enableBlvt: boolean, options?: enableLeverageTokenForSubAccountOptions): Promise<enableLeverageTokenForSubAccountResponse>;
    getIpRestrictionForASubAccountApiKey(email: string, subAccountApiKey: string, options?: getIpRestrictionForASubAccountApiKeyOptions): Promise<getIpRestrictionForASubAccountApiKeyResponse>;
    deleteIpListForASubAccountApiKey(email: string, subAccountApiKey: string, options?: deleteIpListForASubAccountApiKeyOptions): Promise<deleteIpListForASubAccountApiKeyResponse>;
    updateIpRestrictionForSubAccountApiKey(email: string, subAccountApiKey: string, status: string, options?: updateIpRestrictionForSubAccountApiKeyOptions): Promise<updateIpRestrictionForSubAccountApiKeyResponse>;
    depositAssetsIntoTheManagedSubAccount(toEmail: string, asset: string, amount: number, options?: depositAssetsIntoTheManagedSubAccountOptions): Promise<depositAssetsIntoTheManagedSubAccountResponse>;
    getManagedSubAccountAssetDetails(email: string, options?: getManagedSubAccountAssetDetailsOptions): Promise<getManagedSubAccountAssetDetailsResponse[]>;
    withdrawlAssetsFromTheManagedSubAccount(fromEmail: string, asset: string, amount: number, options?: withdrawlAssetsFromTheManagedSubAccountOptions): Promise<withdrawlAssetsFromTheManagedSubAccountResponse>;
    getManagedSubAccountSnapshot(email: string, type: AccountSnapshotType, options?: getManagedSubAccountSnapshotOptions): Promise<getManagedSubAccountSnapshotResponse>;
    getManagedSubAccountTransferLog(email: string, startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogOptions): Promise<getManagedSubAccountTransferLogResponse>;
    getManagedSubAccountTransferLogForTradeParent(email: string, startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogForTradeParentOptions): Promise<getManagedSubAccountTransferLogForTradeParentResponse>;
    getManagedSubAccountFuturesAssetDetails(email: string): Promise<getManagedSubAccountFuturesAssetDetailsResponse>;
    getManagedSubAccountMarginAssetDetails(email: string): Promise<getManagedSubAccountMarginAssetDetailsResponse>;
    getSubAccountAssetsForMasterAccount(email: string, options?: getSubAccountAssetsForMasterAccountOptions): Promise<getSubAccountAssetsForMasterAccountResponse>;
    getManagedSubAccountList(email: string, options?: getManagedSubAccountListOptions): Promise<getManagedSubAccountListResponse>;
    getSubAccountTransactionStatisticsForMasterAccount(email: string, options?: getSubAccountTransactionStatisticsForMasterAccountOptions): Promise<getSubAccountTransactionStatisticsForMasterAccountResponse>;
    getManagedSubAccountDepositAddress(email: string, coin: string, options?: getManagedSubAccountDepositAddressOptions): Promise<getManagedSubAccountDepositAddressResponse>;
    enableOptionsForSubAccount(email: string, options?: enableOptionsForSubAccountOptions): Promise<enableOptionsForSubAccountResponse>;
    getManagedSubAccountTransferLogForTradeSub(startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogForTradeSubOptions): Promise<getManagedSubAccountTransferLogForTradeSubResponse>;
}