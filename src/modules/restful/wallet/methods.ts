import { AccountSnapshotType, UnivTransferType } from '../../enum';
import {
    systemStatusResponse,
    allCoinsInformationOptions,
    allCoinsInformationResponse,
    dailyAccountSnapshotOptions,
    dailyAccountSnapshotResponse,
    disableFastWithdrawSwitchOptions,
    enableFastWithdrawSwitchOptions,
    withdrawOptions,
    withdrawResponse,
    depositHistoryOptions,
    depositHistoryResponse,
    withdrawHistoryOptions,
    withdrawHistoryResponse,
    depositAddressOptions,
    depositAddressResponse,
    accountStatusOptions,
    accountStatusResponse,
    accountApiTradingStatusOptions,
    accountApiTradingStatusResponse,
    dustlogOptions,
    dustlogResponse,
    getAssetsThatCanBeConvertedIntoBnbOptions,
    getAssetsThatCanBeConvertedIntoBnbResponse,
    dustTransferOptions,
    dustTransferResponse,
    assetDividendRecordOptions,
    assetDividendRecordResponse,
    assetDetailOptions,
    assetDetailResponse,
    tradeFeeOptions,
    tradeFeeResponse,
    getUserUniversalTransferHistoryOptions,
    getUserUniversalTransferHistoryResponse,
    userUniversalTransferOptions,
    userUniversalTransferResponse,
    fundingWalletOptions,
    fundingWalletResponse,
    userAssetOptions,
    userAssetResponse,
    convertTransferOptions,
    convertTransferResponse,
    getConvertTransferOptions,
    getConvertTransferResponse,
    getCloudminingPaymentAndRefundHistoryOptions,
    getCloudminingPaymentAndRefundHistoryResponse,
    getApiKeyPermissionOptions,
    getApiKeyPermissionResponse,
    getAutoconvertingStableCoinsResponse,
    oneClickArrivalDepositApplyOptions,
    oneClickArrivalDepositApplyResponse
} from './types';

export interface WalletMethods {
    systemStatus(): Promise<systemStatusResponse>;
    allCoinsInformation(options?: allCoinsInformationOptions): Promise<allCoinsInformationResponse[]>;
    dailyAccountSnapshot(type: AccountSnapshotType, options?: dailyAccountSnapshotOptions): Promise<dailyAccountSnapshotResponse>;
    disableFastWithdrawSwitch(options?: disableFastWithdrawSwitchOptions): Promise<Record<string, never>>;
    enableFastWithdrawSwitch(options?: enableFastWithdrawSwitchOptions): Promise<Record<string, never>>;
    withdraw(coin: string, address: string, amount: number, options?: withdrawOptions): Promise<withdrawResponse>;
    depositHistory(options?: depositHistoryOptions): Promise<depositHistoryResponse[]>;
    withdrawHistory(options?: withdrawHistoryOptions): Promise<withdrawHistoryResponse[]>;
    depositAddress(coin: string, options?: depositAddressOptions): Promise<depositAddressResponse>;
    accountStatus(options?: accountStatusOptions): Promise<accountStatusResponse>;
    accountApiTradingStatus(options?: accountApiTradingStatusOptions): Promise<accountApiTradingStatusResponse>;
    dustlog(options?: dustlogOptions): Promise<dustlogResponse>;
    getAssetsThatCanBeConvertedIntoBnb(options?: getAssetsThatCanBeConvertedIntoBnbOptions): Promise<getAssetsThatCanBeConvertedIntoBnbResponse>;
    dustTransfer(asset: string[], options?: dustTransferOptions): Promise<dustTransferResponse>;
    assetDividendRecord(options?: assetDividendRecordOptions): Promise<assetDividendRecordResponse>;
    assetDetail(options?: assetDetailOptions): Promise<assetDetailResponse>;
    tradeFee(options?: tradeFeeOptions): Promise<tradeFeeResponse[]>;
    userUniversalTransfer(type: UnivTransferType, asset: string, amount: number, options?: userUniversalTransferOptions): Promise<userUniversalTransferResponse>;
    getUserUniversalTransferHistory(type: UnivTransferType, options?: getUserUniversalTransferHistoryOptions): Promise<getUserUniversalTransferHistoryResponse>;
    fundingWallet(options?: fundingWalletOptions): Promise<fundingWalletResponse[]>;
    userAsset(options?: userAssetOptions): Promise<userAssetResponse[]>;
    convertTransfer(clientTranId: string, asset: string, amount: number, targetAsset: string, options?: convertTransferOptions): Promise<convertTransferResponse>;
    getConvertTransfer(startTime: number, endTime: number, options?: getConvertTransferOptions): Promise<getConvertTransferResponse>;
    getCloudminingPaymentAndRefundHistory(startTime: number, endTime: number, options?: getCloudminingPaymentAndRefundHistoryOptions): Promise<getCloudminingPaymentAndRefundHistoryResponse>;
    getApiKeyPermission(options?: getApiKeyPermissionOptions): Promise<getApiKeyPermissionResponse>;
    getAutoconvertingStableCoins(): Promise<getAutoconvertingStableCoinsResponse>;
    switchOnOffBusdAndStableCoinsConversion(coin: string, enable: boolean): Promise<void>;
    oneClickArrivalDepositApply(options?: oneClickArrivalDepositApplyOptions): Promise<oneClickArrivalDepositApplyResponse>;
}