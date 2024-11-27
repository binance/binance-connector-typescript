import { AccountSnapshotType, UnivTransferType } from '../../enum';
import {
    accountApiTradingStatusOptions,
    accountApiTradingStatusResponse,
    accountInfoOptions,
    accountInfoResponse,
    accountStatusOptions,
    accountStatusResponse,
    allCoinsInformationOptions,
    allCoinsInformationResponse,
    assetDetailOptions,
    assetDetailResponse,
    assetDividendRecordOptions,
    assetDividendRecordResponse,
    dailyAccountSnapshotOptions,
    dailyAccountSnapshotResponse,
    depositAddressOptions,
    depositAddressResponse,
    depositAddressListOptions,
    depositAddressListResponse,
    depositHistoryOptions,
    depositHistoryResponse,
    disableFastWithdrawSwitchOptions,
    dustlogOptions,
    dustlogResponse,
    dustTransferOptions,
    dustTransferResponse,
    enableFastWithdrawSwitchOptions,
    fundingWalletOptions,
    fundingWalletResponse,
    getApiKeyPermissionOptions,
    getApiKeyPermissionResponse,
    getAssetsThatCanBeConvertedIntoBnbOptions,
    getAssetsThatCanBeConvertedIntoBnbResponse,
    getCloudminingPaymentAndRefundHistoryOptions,
    getCloudminingPaymentAndRefundHistoryResponse,
    getSymbolsDelistScheduleOptions,
    getSymbolsDelistScheduleResponse,
    getUserUniversalTransferHistoryOptions,
    getUserUniversalTransferHistoryResponse,
    oneClickArrivalDepositApplyOptions,
    oneClickArrivalDepositApplyResponse,
    queryUserWalletBalanceOptions,
    queryUserWalletBalanceResponse,
    queryUserDelegationHistoryOptions,
    queryUserDelegationHistoryResponse,
    systemStatusResponse,
    tradeFeeOptions,
    tradeFeeResponse,
    userAssetOptions,
    userAssetResponse,
    userUniversalTransferOptions,
    userUniversalTransferResponse,
    withdrawHistoryOptions,
    withdrawHistoryResponse,
    withdrawOptions,
    withdrawResponse,
} from './types';

export interface WalletMethods {
    systemStatus(): Promise<systemStatusResponse>;
    getSymbolsDelistSchedule(options?: getSymbolsDelistScheduleOptions): Promise<getSymbolsDelistScheduleResponse[]>;
    allCoinsInformation(options?: allCoinsInformationOptions): Promise<allCoinsInformationResponse[]>;
    dailyAccountSnapshot(type: AccountSnapshotType, options?: dailyAccountSnapshotOptions): Promise<dailyAccountSnapshotResponse>;
    disableFastWithdrawSwitch(options?: disableFastWithdrawSwitchOptions): Promise<Record<string, never>>;
    enableFastWithdrawSwitch(options?: enableFastWithdrawSwitchOptions): Promise<Record<string, never>>;
    withdraw(coin: string, address: string, amount: number, options?: withdrawOptions): Promise<withdrawResponse>;
    depositHistory(options?: depositHistoryOptions): Promise<depositHistoryResponse[]>;
    withdrawHistory(options?: withdrawHistoryOptions): Promise<withdrawHistoryResponse[]>;
    depositAddress(coin: string, options?: depositAddressOptions): Promise<depositAddressResponse>;
    depositAddressList(coin: string, options?: depositAddressListOptions): Promise<depositAddressListResponse[]>;
    accountStatus(options?: accountStatusOptions): Promise<accountStatusResponse>;
    accountApiTradingStatus(options?: accountApiTradingStatusOptions): Promise<accountApiTradingStatusResponse>;
    dustlog(options?: dustlogOptions): Promise<dustlogResponse>;
    getAssetsThatCanBeConvertedIntoBnb(options?: getAssetsThatCanBeConvertedIntoBnbOptions): Promise<getAssetsThatCanBeConvertedIntoBnbResponse>;
    dustTransfer(asset: string[], options?: dustTransferOptions): Promise<dustTransferResponse>;
    assetDividendRecord(options?: assetDividendRecordOptions): Promise<assetDividendRecordResponse>;
    assetDetail(options?: assetDetailOptions): Promise<assetDetailResponse>;
    queryUserWalletBalance(options?: queryUserWalletBalanceOptions): Promise<queryUserWalletBalanceResponse[]>;
    tradeFee(options?: tradeFeeOptions): Promise<tradeFeeResponse[]>;
    userUniversalTransfer(type: UnivTransferType, asset: string, amount: number, options?: userUniversalTransferOptions): Promise<userUniversalTransferResponse>;
    getUserUniversalTransferHistory(type: UnivTransferType, options?: getUserUniversalTransferHistoryOptions): Promise<getUserUniversalTransferHistoryResponse>;
    fundingWallet(options?: fundingWalletOptions): Promise<fundingWalletResponse[]>;
    userAsset(options?: userAssetOptions): Promise<userAssetResponse[]>;
    getCloudminingPaymentAndRefundHistory(startTime: number, endTime: number, options?: getCloudminingPaymentAndRefundHistoryOptions): Promise<getCloudminingPaymentAndRefundHistoryResponse>;
    queryUserDelegationHistory(email: string, startTime: number, endTime: number, options?: queryUserDelegationHistoryOptions): Promise<queryUserDelegationHistoryResponse>;
    accountInfo(options?: accountInfoOptions): Promise<accountInfoResponse>;
    getApiKeyPermission(options?: getApiKeyPermissionOptions): Promise<getApiKeyPermissionResponse>;
    oneClickArrivalDepositApply(options?: oneClickArrivalDepositApplyOptions): Promise<oneClickArrivalDepositApplyResponse>;
}