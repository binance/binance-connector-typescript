import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
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
    addIpRestrictionForSubAccountApiKeyOptions,
    addIpRestrictionForSubAccountApiKeyResponse,
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
import { SubAccountMethods } from './methods';
import { FromAccountType, ToAccountType, AccountSnapshotType } from '../../enum';

export function mixinSubAccount<T extends Constructor>(base: T): Constructor<SubAccountMethods> & T {
    return class extends base {
        /**
        * Create a Virtual Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Create-a-Virtual-Sub-account}
        *
        * @param {string} subAccountString - Please input a string. We will create a virtual email using that string for you to register
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async createAVirtualSubAccount(subAccountString: string, options?: createAVirtualSubAccountOptions): Promise<createAVirtualSubAccountResponse> {
            validateRequiredParameters({ subAccountString });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/virtualSubAccount',
                Object.assign(
                    options ? options : {},
                    {
                        subAccountString: subAccountString
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Sub-account List (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Query-Sub-account-List}
        *
        * @param {object} [options]
        * @param {string} [options.email] - Sub-account email
        * @param {IsFreeze} [options.isFreeze]
        * @param {number} [options.page] - Default 1
        * @param {number} [options.limit] - Default 1; max 200
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSubAccountList(options?: getSubAccountListOptions): Promise<getSubAccountListResponse> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/list',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Sub-account Spot Asset Transfer History (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Query-Sub-account-Spot-Asset-Transfer-History}
        *
        * @param {object} [options]
        * @param {string} [options.fromEmail] - Sub-account email
        * @param {string} [options.toEmail] - Sub-account email
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.page] - Default 1
        * @param {number} [options.limit] - Default 1
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSubAccountSpotAssetTransferHistory(options?: getSubAccountSpotAssetTransferHistoryOptions): Promise<getSubAccountSpotAssetTransferHistoryResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/sub/transfer/history',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Sub-account Futures Asset Transfer History (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Query-Sub-account-Futures-Asset-Transfer-History}
        *
        * @param {string} email - Sub-account email
        * @param {number} futuresType - 1:USDT-margined Futures, 2: Coin-margined Futures
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.page] - Default 1
        * @param {number} [options.limit] - Default value: 50, Max value: 500
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSubAccountFuturesAssetTransferHistory(email: string, futuresType: number, options?: getSubAccountFuturesAssetTransferHistoryOptions): Promise<getSubAccountFuturesAssetTransferHistoryResponse> {
            validateRequiredParameters({ email, futuresType });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/internalTransfer',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        futuresType: futuresType
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Sub-account Futures Asset Transfer (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Sub-account-Futures-Asset-Transfer}
        *
        * @param {string} fromEmail - Sender email
        * @param {string} toEmail - Recipient email
        * @param {number} futuresType - 1:USDT-margined Futures,2: Coin-margined Futures
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async subAccountFuturesAssetTransfer(fromEmail: string, toEmail: string, futuresType: number, asset: string, amount: number, options?: subAccountFuturesAssetTransferOptions): Promise<subAccountFuturesAssetTransferResponse> {
            validateRequiredParameters({ fromEmail, toEmail, futuresType, asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/internalTransfer',
                Object.assign(
                    options ? options : {},
                    {
                        fromEmail: fromEmail,
                        toEmail: toEmail,
                        futuresType: futuresType,
                        asset: asset.toUpperCase(),
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Sub-account Assets (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Query-Sub-account-Assets-V3}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSubAccountAssets(email: string, options?: getSubAccountAssetsOptions): Promise<getSubAccountAssetsResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v3/sub-account/assets',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Sub-account Spot Assets Summary (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Query-Sub-account-Spot-Assets-Summary}
        *
        * @param {object} [options]
        * @param {string} [options.email] - Sub-account email
        * @param {number} [options.page] - Default 1
        * @param {number} [options.size] - Default:10 Max:20
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSubAccountSpotAssetsSummary(options?: getSubAccountSpotAssetsSummaryOptions): Promise<getSubAccountSpotAssetsSummaryResponse> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/spotSummary',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Sub-account Deposit Address (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Sub-account-Deposit-Address}
        *
        * @param {string} email - Sub-account email
        * @param {string} coin - Coin name
        * @param {object} [options]
        * @param {string} [options.network]
        * @param {number} [options.amount]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSubAccountDepositAddress(email: string, coin: string, options?: getSubAccountDepositAddressOptions): Promise<getSubAccountDepositAddressResponse> {
            validateRequiredParameters({ email, coin });
            const url = this.prepareSignedPath('/sapi/v1/capital/deposit/subAddress',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        coin: coin
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Sub-account Deposit History (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Sub-account-Deposit-History}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {string} [options.coin] - Coin name
        * @param {number} [options.status] - 0(0:pending,6: credited but cannot withdraw, 1:success)
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit]
        * @param {number} [options.offset]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        * @param {string} [options.txId]
        */
        async subAccountDepositHistory(email: string, options?: subAccountDepositHistoryOptions): Promise<subAccountDepositHistoryResponse[]> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/capital/deposit/subHisrec',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Sub-account's Status on Margin/Futures (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Get-Sub-accounts-Status-on-Margin-Or-Futures}
        *
        * @param {object} [options]
        * @param {string} [options.email] - Sub-account email
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async subAccountStatusOnMarginFutures(options?: subAccountStatusOnMarginFuturesOptions): Promise<subAccountStatusOnMarginFuturesResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/status',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Enable Margin for Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Enable-Margin-for-Sub-account}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async enableMarginForSubAccount(email: string, options?: enableMarginForSubAccountOptions): Promise<enableMarginForSubAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/margin/enable',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Detail on Sub-account's Margin Account (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Detail-on-Sub-accounts-Margin-Account}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async detailOnSubAccountMarginAccount(email: string, options?: detailOnSubAccountMarginAccountOptions): Promise<detailOnSubAccountMarginAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/margin/account',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Summary of Sub-account's Margin Account (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Summary-of-Sub-accounts-Margin-Account}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async summaryOfSubAccountMarginAccount(options?: summaryOfSubAccountMarginAccountOptions): Promise<summaryOfSubAccountMarginAccountResponse> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/margin/accountSummary',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Enable Futures for Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Enable-Futures-for-Sub-account}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async enableFuturesForSubAccount(email: string, options?: enableFuturesForSubAccountOptions): Promise<enableFuturesForSubAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/enable',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Detail on Sub-account's Futures Account (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Detail-on-Sub-accounts-Futures-Account}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async detailOnSubAccountFuturesAccount(email: string, options?: detailOnSubAccountFuturesAccountOptions): Promise<detailOnSubAccountFuturesAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/account',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Summary of Sub-account's Futures Account (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Summary-of-Sub-accounts-Futures-Account}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async summaryOfSubAccountFuturesAccount(options?: summaryOfSubAccountFuturesAccountOptions): Promise<summaryOfSubAccountFuturesAccountResponse> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/accountSummary',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Futures Position-Risk of Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Get-Futures-Position-Risk-of-Sub-account}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async futuresPositionriskOfSubAccount(email: string, options?: futuresPositionriskOfSubAccountOptions): Promise<futuresPositionriskOfSubAccountResponse[]> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/positionRisk',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Futures Transfer for Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Futures-Transfer-for-Sub-account}
        *
        * @param {string} email - Sub-account email
        * @param {string} asset
        * @param {number} amount
        * @param {number} type - * `1` - transfer from subAccount spot account to its USDT-margined futures account, * `2` - transfer from subAccount USDT-margined futures account to its spot account, * `3` - transfer from subAccount spot account to its COIN-margined futures account, * `4` - transfer from subAccount COIN-margined futures account to its spot account
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async transferForSubAccount(email: string, asset: string, amount: number, type: number, options?: transferForSubAccountOptions): Promise<transferForSubAccountResponse> {
            validateRequiredParameters({ email, asset, amount, type });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/futures/transfer',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        asset: asset.toUpperCase(),
                        amount: amount,
                        type: type
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Margin Transfer for Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Margin-Transfer-for-Sub-account}
        *
        * @param {string} email - Sub-account email
        * @param {string} asset
        * @param {number} amount
        * @param {number} type - * `1` - transfer from subAccount spot account to margin account, * `2` - transfer from subAccount margin account to its spot account
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginTransferForSubAccount(email: string, asset: string, amount: number, type: number, options?: marginTransferForSubAccountOptions): Promise<marginTransferForSubAccountResponse> {
            validateRequiredParameters({ email, asset, amount, type });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/margin/transfer',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        asset: asset.toUpperCase(),
                        amount: amount,
                        type: type
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Transfer to Sub-account of Same Master (For Sub-account) {@link https://developers.binance.com/docs/sub_account/asset-management/Transfer-to-Sub-account-of-Same-Master}
        *
        * @param {string} toEmail - Recipient email
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async transferToSubAccountOfSameMaster(toEmail: string, asset: string, amount: number, options?: transferToSubAccountOfSameMasterOptions): Promise<transferToSubAccountOfSameMasterResponse> {
            validateRequiredParameters({ toEmail, asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/transfer/subToSub',
                Object.assign(
                    options ? options : {},
                    {
                        toEmail: toEmail,
                        asset: asset.toUpperCase(),
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Transfer to Master (For Sub-account) {@link https://developers.binance.com/docs/sub_account/asset-management/Transfer-to-Master}
        *
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async transferToMaster(asset: string, amount: number, options?: transferToMasterOptions): Promise<transferToMasterResponse> {
            validateRequiredParameters({ asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/transfer/subToMaster',
                Object.assign(
                    options ? options : {},
                    {
                        asset: asset.toUpperCase(),
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Sub-account Transfer History (For Sub-account) {@link https://developers.binance.com/docs/sub_account/asset-management/Sub-account-Transfer-History}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {number} [options.type] - * `1` - transfer in, * `2` - transfer out
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit] - Default 500; max 1000.
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async subAccountTransferHistory(options?: subAccountTransferHistoryOptions): Promise<subAccountTransferHistoryResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/transfer/subUserHistory',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Universal Transfer (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Universal-Transfer}
        *
        * @param {FromAccountType} fromAccountType
        * @param {ToAccountType} toAccountType
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {string} [options.fromEmail] - Sub-account email
        * @param {string} [options.toEmail] - Sub-account email
        * @param {string} [options.clientTranId]
        * @param {string} [options.symbol] - Only supported under ISOLATED_MARGIN type
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async universalTransfer(fromAccountType: FromAccountType, toAccountType: ToAccountType, asset: string, amount: number, options?: universalTransferOptions): Promise<universalTransferResponse> {
            validateRequiredParameters({ fromAccountType, toAccountType, asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/universalTransfer',
                Object.assign(
                    options ? options : {},
                    {
                        fromAccountType: fromAccountType,
                        toAccountType: toAccountType,
                        asset: asset.toUpperCase(),
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Universal Transfer History (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Query-Universal-Transfer-History}
        *
        * @param {object} [options]
        * @param {string} [options.fromEmail] - Sub-account email
        * @param {string} [options.toEmail] - Sub-account email
        * @param {string} [options.clientTranId]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.page] - Default 1
        * @param {number} [options.limit] - Default 500, Max 500
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getUniversalTransferHistory(options?: getUniversalTransferHistoryOptions): Promise<getUniversalTransferHistoryResponse> {
            const url = this.prepareSignedPath('/sapi/v1/sub-account/universalTransfer',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Detail on Sub-account's Futures Account V2 (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Detail-on-Sub-accounts-Futures-Account-V2}
        *
        * @param {string} email - Sub-account email
        * @param {number} futuresType - * `1` - USDT Margined Futures, * `2` - COIN Margined Futures
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getDetailOnSubAccountFuturesAccountV2(email: string, futuresType: number, options?: getDetailOnSubAccountFuturesAccountV2Options): Promise<getDetailOnSubAccountFuturesAccountV2Response> {
            validateRequiredParameters({ email, futuresType });
            const url = this.prepareSignedPath('/sapi/v2/sub-account/futures/account',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        futuresType: futuresType
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Summary of Sub-account's Futures Account V2 (For Master Account) {@link https://developers.binance.com/docs/sub_account/asset-management/Get-Summary-of-Sub-accounts-Futures-Account-V2}
        *
        * @param {number} futuresType - * `1` - USDT Margined Futures, * `2` - COIN Margined Futures
        * @param {object} [options]
        * @param {number} [options.page] - Default 1
        * @param {number} [options.limit] - Default 10, Max 20
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async summaryOfSubAccountFuturesAccountV2(futuresType: number, options?: summaryOfSubAccountFuturesAccountV2Options): Promise<summaryOfSubAccountFuturesAccountV2Response> {
            validateRequiredParameters({ futuresType });
            const url = this.prepareSignedPath('/sapi/v2/sub-account/futures/accountSummary',
                Object.assign(
                    options ? options : {},
                    {
                        futuresType: futuresType
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Futures Position-Risk of Sub-account V2 (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Get-Futures-Position-Risk-of-Sub-account-V2}
        *
        * @param {string} email - Sub-account email
        * @param {number} futuresType - * `1` - USDT Margined Futures, * `2` - COIN Margined Futures
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async futuresPositionriskOfSubAccountV2(email: string, futuresType: number, options?: futuresPositionriskOfSubAccountV2Options): Promise<futuresPositionriskOfSubAccountV2Response> {
            validateRequiredParameters({ email, futuresType });
            const url = this.prepareSignedPath('/sapi/v2/sub-account/futures/positionRisk',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        futuresType: futuresType
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Enable Leverage Token for Sub-account (For Master Account) {@link https://developers.binance.com/docs/sub_account/account-management/Enable-Leverage-Token-for-Sub-account}
        *
        * @param {string} email - Sub-account email
        * @param {boolean} enableBlvt - Only true for now
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async enableLeverageTokenForSubAccount(email: string, enableBlvt: boolean, options?: enableLeverageTokenForSubAccountOptions): Promise<enableLeverageTokenForSubAccountResponse> {
            validateRequiredParameters({ email, enableBlvt });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/blvt/enable',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        enableBlvt: enableBlvt
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get IP Restriction for a Sub-account API Key (For Master Account) {@link https://developers.binance.com/docs/sub_account/api-management/Get-IP-Restriction-for-a-Sub-account-API-Key}
        *
        * @param {string} email - Sub-account email
        * @param {string} subAccountApiKey
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getIpRestrictionForASubAccountApiKey(email: string, subAccountApiKey: string, options?: getIpRestrictionForASubAccountApiKeyOptions): Promise<getIpRestrictionForASubAccountApiKeyResponse> {
            validateRequiredParameters({ email, subAccountApiKey });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/subAccountApi/ipRestriction',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        subAccountApiKey: subAccountApiKey
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Delete IP List for a Sub-account API Key (For Master Account) {@link https://developers.binance.com/docs/sub_account/api-management/Delete-IP-List-For-a-Sub-account-API-Key}
        *
        * @param {string} email - Sub-account email
        * @param {string} subAccountApiKey
        * @param {object} [options]
        * @param {string} [options.ipAddress] - Can be added in batches, separated by commas
        * @param {string} [options.thirdPartyName] - third party IP list name
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async deleteIpListForASubAccountApiKey(email: string, subAccountApiKey: string, options?: deleteIpListForASubAccountApiKeyOptions): Promise<deleteIpListForASubAccountApiKeyResponse> {
            validateRequiredParameters({ email, subAccountApiKey });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        subAccountApiKey: subAccountApiKey
                    }
                )
            );
            return await this.makeRequest('DELETE', url);
        }


        /**
        * Add IP Restriction for Sub-Account API key (For Master Account) {@link https://developers.binance.com/docs/sub_account/api-management/Add-IP-Restriction-for-Sub-Account-API-key}
        *
        * @param {string} email - Sub-account email
        * @param {string} subAccountApiKey
        * @param {string} status - IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only
        * @param {object} [options]
        * @param {string} [options.thirdPartyName] - third party IP list name
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async addIpRestrictionForSubAccountApiKey(email: string, subAccountApiKey: string, status: string, options?: addIpRestrictionForSubAccountApiKeyOptions): Promise<addIpRestrictionForSubAccountApiKeyResponse> {
            validateRequiredParameters({ email, subAccountApiKey, status });
            const url = this.prepareSignedPath('/sapi/v2/sub-account/subAccountApi/ipRestriction',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        subAccountApiKey: subAccountApiKey,
                        status: status
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Deposit assets into the managed sub-account (For Investor Master Account) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Deposit-Assets-Into-The-Managed-Sub-account}
        *
        * @param {string} toEmail - Recipient email
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async depositAssetsIntoTheManagedSubAccount(toEmail: string, asset: string, amount: number, options?: depositAssetsIntoTheManagedSubAccountOptions): Promise<depositAssetsIntoTheManagedSubAccountResponse> {
            validateRequiredParameters({ toEmail, asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/deposit',
                Object.assign(
                    options ? options : {},
                    {
                        toEmail: toEmail,
                        asset: asset.toUpperCase(),
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Managed Sub-account Asset Details (For Investor Master Account) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-account-Asset-Details}
        *
        * @param {string} email - Sub-account email
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getManagedSubAccountAssetDetails(email: string, options?: getManagedSubAccountAssetDetailsOptions): Promise<getManagedSubAccountAssetDetailsResponse[]> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/asset',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Withdrawl assets from the managed sub-account (For Investor Master Account) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Withdrawl-Assets-From-The-Managed-Sub-account}
        *
        * @param {string} fromEmail - Sender email
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {number} [options.transferDate] - Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async withdrawlAssetsFromTheManagedSubAccount(fromEmail: string, asset: string, amount: number, options?: withdrawlAssetsFromTheManagedSubAccountOptions): Promise<withdrawlAssetsFromTheManagedSubAccountResponse> {
            validateRequiredParameters({ fromEmail, asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/withdraw',
                Object.assign(
                    options ? options : {},
                    {
                        fromEmail: fromEmail,
                        asset: asset.toUpperCase(),
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Managed Sub-account Snapshot (For Investor Master Account) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-account-Snapshot}
        *
        * @param {string} email - Sub-account email
        * @param {AccountSnapshotType} type - 'SPOT', 'MARGIN'(cross), 'FUTURES'(UM)
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit] - min 7, max 30, default 7
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getManagedSubAccountSnapshot(email: string, type: AccountSnapshotType, options?: getManagedSubAccountSnapshotOptions): Promise<getManagedSubAccountSnapshotResponse> {
            validateRequiredParameters({ email, type });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/accountSnapshot',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        type: type
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query Managed Sub Account Transfer Log (For Investor Master Account) (USER_DATA) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-Account-Transfer-Log-Investor}
         * 
         * @param {string} email - Managed Sub Account Email
         * @param {number} startTime - Start Time
         * @param {number} endTime - End Time (The start time and end time interval cannot exceed half a year)
         * @param {number} page - Page
         * @param {number} limit - Limit (Max: 500)
         * @param {object} [options]
         * @param {string} [options.transfers] - Transfer Direction (FROM/TO)
         * @param {SubAccountTransferLog} [options.transferFunctionAccountType] - Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
         */
        async getManagedSubAccountTransferLog(email: string, startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogOptions): Promise<getManagedSubAccountTransferLogResponse> {
            validateRequiredParameters({ email, startTime, endTime, page, limit });
            const url = this.preparePath('/sapi/v1/managed-subaccount/queryTransLogForInvestor',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        startTime: startTime,
                        endTime: endTime,
                        page: page,
                        limit: limit
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query Managed Sub Account Transfer Log (For Trading Team Master Account) (USER_DATA) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-Account-Transfer-Log-Trading-Team-Master}
         * 
         * @param {string} email - Managed Sub Account Email
         * @param {number} startTime - Start Time
         * @param {number} endTime - End Time (The start time and end time interval cannot exceed half a year)
         * @param {number} page - Page
         * @param {number} limit - Limit (Max: 500)
         * @param {object} [options]
         * @param {string} [options.transfers] - Transfer Direction (FROM/TO)
         * @param {SubAccountTransferLog} [options.transferFunctionAccountType] - Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
         */
        async getManagedSubAccountTransferLogForTradeParent(email: string, startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogForTradeParentOptions): Promise<getManagedSubAccountTransferLogForTradeParentResponse> {
            validateRequiredParameters({ email, startTime, endTime, page, limit });
            const url = this.preparePath('/sapi/v1/managed-subaccount/queryTransLogForTradeParent',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        startTime: startTime,
                        endTime: endTime,
                        page: page,
                        limit: limit
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }



        /**
         * Query Managed Sub-account Futures Asset Details（For Investor Master Account）(USER_DATA) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-account-Futures-Asset-Details}
         * 
         * @param {string} email - Managed Sub Account Email
         */
        async getManagedSubAccountFuturesAssetDetails(email: string): Promise<getManagedSubAccountFuturesAssetDetailsResponse> {
            validateRequiredParameters({ email });
            const url = this.preparePath('/sapi/v1/managed-subaccount/fetch-future-asset',
                {
                    email: email
                }
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query Managed Sub-account Margin Asset Details (For Investor Master Account) (USER_DATA) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-account-Margin-Asset-Details}
         * 
         * @param {string} email - Managed Sub Account Email
         */
        async getManagedSubAccountMarginAssetDetails(email: string): Promise<getManagedSubAccountMarginAssetDetailsResponse> {
            validateRequiredParameters({ email });
            const url = this.preparePath('/sapi/v1/managed-subaccount/marginAsset',
                {
                    email: email
                }
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query Sub-account Assets (For Master Account)(USER_DATA) {@link https://developers.binance.com/docs/sub_account/asset-management/Query-Sub-account-Assets-V4}
         * 
         * @param {string} email - Managed Sub Account Email
         * @param {option} [options]
         * @param {number} [options.recvWindow]
         */
        async getSubAccountAssetsForMasterAccount(email: string, options?: getSubAccountAssetsForMasterAccountOptions): Promise<getSubAccountAssetsForMasterAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v4/sub-account/assets',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query Managed Sub-account List {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-account-List}
         * 
         * @param {string} email - Managed Sub Account Email
         * @param {option} [options]
         * @param {number} [options.page] - Default value: 1
         * @param {number} [options.limit] - Default value: 20, Max value: 20
         * @param {number} [options.recvWindow]
         */
        async getManagedSubAccountList(email: string, options?: getManagedSubAccountListOptions): Promise<getManagedSubAccountListResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/info',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query Sub-account Transaction Statistics (For Master Account) (USER_DATA) {@link https://developers.binance.com/docs/sub_account/account-management/Query-Sub-account-Transaction-Statistics}
         * 
         * @param {string} email - Managed Sub Account Email
         * @param {option} [options]
         * @param {number} [options.recvWindow]
         */
        async getSubAccountTransactionStatisticsForMasterAccount(email: string, options?: getSubAccountTransactionStatisticsForMasterAccountOptions): Promise<getSubAccountTransactionStatisticsForMasterAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/transaction-statistics',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Get Managed Sub-account Deposit Address (For Investor Master Account) (USER_DATA) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Get-Managed-Sub-account-Deposit-Address}
         * 
         * @param {string} email - Sub user email
         * @param {string} coin
         * @param {option} [options]
         * @param {string} [options.network] - networks can be found in GET /sapi/v1/capital/deposit/address
         * @param {number} [options.recvWindow]
         */
        async getManagedSubAccountDepositAddress(email: string, coin: string, options?: getManagedSubAccountDepositAddressOptions): Promise<getManagedSubAccountDepositAddressResponse> {
            validateRequiredParameters({ email, coin });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/deposit/address',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        coin: coin.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Enable Options for Sub-account (For Master Account)(USER_DATA) {@link https://developers.binance.com/docs/sub_account/account-management/Enable-Options-for-Sub-account}
         * 
         * @param {string} email - Managed Sub Account Email
         * @param {option} [options]
         * @param {number} [options.recvWindow]
         */
        async enableOptionsForSubAccount(email: string, options?: enableOptionsForSubAccountOptions): Promise<enableOptionsForSubAccountResponse> {
            validateRequiredParameters({ email });
            const url = this.prepareSignedPath('/sapi/v1/sub-account/eoptions/enable',
                Object.assign(
                    options ? options : {},
                    {
                        email: email
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
         * Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA) {@link https://developers.binance.com/docs/sub_account/managed-sub-account/Query-Managed-Sub-Account-Transfer-Log-Trading-Team-Sub}
         * 
         * @param {number} startTime - Start Time
         * @param {number} endTime - End Time (The start time and end time interval cannot exceed half a year)
         * @param {number} page - Page
         * @param {number} limit - Limit (Max: 500)
         * @param {object} [options]
         * @param {string} [options.transfers] - Transfer Direction (FROM/TO)
         * @param {SubAccountTransferLog} [options.transferFunctionAccountType] - Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)
         * @param {number} [options.recvWindow]
         */
        async getManagedSubAccountTransferLogForTradeSub(startTime: number, endTime: number, page: number, limit: number, options?: getManagedSubAccountTransferLogForTradeSubOptions): Promise<getManagedSubAccountTransferLogForTradeSubResponse> {
            validateRequiredParameters({ startTime, endTime, page, limit });
            const url = this.prepareSignedPath('/sapi/v1/managed-subaccount/transfer',
                Object.assign(
                    options ? options : {},
                    {
                        startTime: startTime,
                        endTime: endTime,
                        page: page,
                        limit: limit
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }
    };
}
