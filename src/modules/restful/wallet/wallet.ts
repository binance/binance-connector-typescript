import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
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
import { WalletMethods } from './methods';
import { AccountSnapshotType, UnivTransferType } from '../../enum';

export function mixinWallet<T extends Constructor>(base: T): Constructor<WalletMethods> & T {
    return class extends base {
        /**
        * System Status (System) {@link https://developers.binance.com/docs/wallet/others/system-status}
        */
        async systemStatus(): Promise<systemStatusResponse> {
            return await this.makeRequest('GET', '/sapi/v1/system/status');
        }


        /**
         * Get symbols delist schedule for spot (MARKET_DATA) {@link https://developers.binance.com/docs/wallet/others/delist-schedule}
         * 
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async getSymbolsDelistSchedule(options?: getSymbolsDelistScheduleOptions): Promise<getSymbolsDelistScheduleResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/spot/delist-schedule',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * All Coins' Information (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/all-coins-info}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async allCoinsInformation(options?: allCoinsInformationOptions): Promise<allCoinsInformationResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/capital/config/getall',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Daily Account Snapshot (USER_DATA) {@link https://developers.binance.com/docs/wallet/account/daily-account-snapshoot}
        *
        * @param {AccountSnapshotType} type
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async dailyAccountSnapshot(type: AccountSnapshotType, options?: dailyAccountSnapshotOptions): Promise<dailyAccountSnapshotResponse> {
            validateRequiredParameters({ type });
            const url = this.prepareSignedPath('/sapi/v1/accountSnapshot',
                Object.assign(options ? options : {}, { type: type })
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Disable Fast Withdraw Switch (USER_DATA) {@link https://developers.binance.com/docs/wallet/account/disable-fast-withdraw-switch}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async disableFastWithdrawSwitch(options?: disableFastWithdrawSwitchOptions): Promise<Record<string, never>> {
            const url = this.prepareSignedPath('/sapi/v1/account/disableFastWithdrawSwitch',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Enable Fast Withdraw Switch (USER_DATA) {@link https://developers.binance.com/docs/wallet/account/enable-fast-withdraw-switch}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async enableFastWithdrawSwitch(options?: enableFastWithdrawSwitchOptions): Promise<Record<string, never>> {
            const url = this.prepareSignedPath('/sapi/v1/account/enableFastWithdrawSwitch',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Withdraw (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/withdraw}
        *
        * @param {string} coin - Coin name
        * @param {string} address
        * @param {number} amount
        * @param {object} [options]
        * @param {string} [options.withdrawOrderId] - Client id for withdraw
        * @param {string} [options.network] - Get the value from `GET /sapi/v1/capital/config/getall`
        * @param {string} [options.addressTag] - Secondary address identifier for coins like XRP,XMR etc.
        * @param {boolean} [options.transactionFeeFlag] - When making internal transfer, - `true` ->  returning the fee to the destination account;, - `false` -> returning the fee back to the departure account.
        * @param {string} [options.name]
        * @param {number} [options.walletType] - The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async withdraw(coin: string, address: string, amount: number, options?: withdrawOptions): Promise<withdrawResponse> {
            validateRequiredParameters({ coin, address, amount });
            const url = this.prepareSignedPath('/sapi/v1/capital/withdraw/apply',
                Object.assign(options ? options : {}, { coin: coin, address: address, amount: amount })
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Deposit History (supporting network) (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/deposite-history}
        *
        * @param {object} [options]
        * @param {string} [options.coin] - Coin name
        * @param {number} [options.status] - * `0` - pending, * `6` - credited but cannot withdraw, * `1` - success
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.offset]
        * @param {number} [options.limit] - Default 500; max 1000.
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        * @param {string} [options.txId]
        */
        async depositHistory(options?: depositHistoryOptions): Promise<depositHistoryResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/capital/deposit/hisrec',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Withdraw History (supporting network) (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/withdraw-history}
        *
        * @param {object} [options]
        * @param {string} [options.coin] - Coin name
        * @param {string} [options.withdrawOrderId]
        * @param {number} [options.status] - * `0` - Email Sent, * `1` - Cancelled, * `2` - Awaiting Approval, * `3` - Rejected, * `4` - Processing, * `5` - Failure, * `6` - Completed
        * @param {number} [options.startTime] - UTC timestamp in ms, Default: 90 days from current timestamp
        * @param {number} [options.endTime] - UTC timestamp in ms, Default: present timestamp
        * @param {number} [options.offset]
        * @param {number} [options.limit] - Default 500; max 1000.
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async withdrawHistory(options?: withdrawHistoryOptions): Promise<withdrawHistoryResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/capital/withdraw/history',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Deposit Address (supporting network) (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/deposite-address}
        *
        * @param {string} coin - Coin name
        * @param {object} [options]
        * @param {string} [options.network]
        * @param {number} [options.amount]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async depositAddress(coin: string, options?: depositAddressOptions): Promise<depositAddressResponse> {
            validateRequiredParameters({ coin });
            const url = this.prepareSignedPath('/sapi/v1/capital/deposit/address',
                Object.assign(options ? options : {}, { coin: coin })
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Fetch deposit address list with network (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/fetch-deposit-address-list-with-network}
         * 
         * @param {string} coin - Coin refers to the parent network address format that the address is using
         * @param {object} [options]
         * @param {string} [options.network] - The value cannot be greater than 60000
         */
        async depositAddressList(coin: string, options?: depositAddressListOptions): Promise<depositAddressListResponse[]> {
            validateRequiredParameters({ coin });
            const url = this.prepareSignedPath('/sapi/v1/capital/deposit/address/list',
                Object.assign(options ? options : {}, { coin: coin })
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Account Status (USER_DATA) {@link https://developers.binance.com/docs/wallet/account/account-status}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async accountStatus(options?: accountStatusOptions): Promise<accountStatusResponse> {
            const url = this.prepareSignedPath('/sapi/v1/account/status',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Account API Trading Status (USER_DATA) {@link https://developers.binance.com/docs/wallet/account/account-api-trading-status}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async accountApiTradingStatus(options?: accountApiTradingStatusOptions): Promise<accountApiTradingStatusResponse> {
            const url = this.prepareSignedPath('/sapi/v1/account/apiTradingStatus',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * DustLog (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/dust-log}
        *
        * @param {object} [options]
        * @param {DustAccountType} [options.accountType] - SPOT or MARGIN, default SPOT
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async dustlog(options?: dustlogOptions): Promise<dustlogResponse> {
            const url = this.prepareSignedPath('/sapi/v1/asset/dribblet',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Assets That Can Be Converted Into BNB (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/assets-can-convert-bnb}
        *
        * @param {object} [options]
        * @param {DustAccountType} [options.accountType] - SPOT or MARGIN, default SPOT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getAssetsThatCanBeConvertedIntoBnb(options?: getAssetsThatCanBeConvertedIntoBnbOptions): Promise<getAssetsThatCanBeConvertedIntoBnbResponse> {
            const url = this.prepareSignedPath('/sapi/v1/asset/dust-btc',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Dust Transfer (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/dust-transfer}
        *
        * @param {string[]} asset - The asset being converted. For example: asset=BTC,USDT
        * @param {object} [options]
        * @param {DustAccountType} [options.accountType] - SPOT or MARGIN, default SPOT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async dustTransfer(asset: string[], options?: dustTransferOptions): Promise<dustTransferResponse> {
            validateRequiredParameters({ asset });
            const assets = asset.map(x => x.toUpperCase()).join(',');
            const url = this.prepareSignedPath('/sapi/v1/asset/dust',
                Object.assign(options ? options : {}, { asset: assets })
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Asset Dividend Record (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/assets-divided-record}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async assetDividendRecord(options?: assetDividendRecordOptions): Promise<assetDividendRecordResponse> {
            const url = this.prepareSignedPath('/sapi/v1/asset/assetDividend',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Asset Detail (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/asset-detail}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async assetDetail(options?: assetDetailOptions): Promise<assetDetailResponse> {
            const url = this.prepareSignedPath('/sapi/v1/asset/assetDetail',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query User Wallet Balance (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/query-user-wallet-balance}
         * 
         * @param {object} [options]
         * @param {number} [options.recvWindow]
         */
        async queryUserWalletBalance(options?: queryUserWalletBalanceOptions): Promise<queryUserWalletBalanceResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/asset/wallet/balance',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Trade Fee (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/trade-fee}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async tradeFee(options?: tradeFeeOptions): Promise<tradeFeeResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/asset/tradeFee',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * User Universal Transfer (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/user-universal-transfer}
        *
        * @param {UnivTransferType} type - Universal transfer type
        * @param {string} asset
        * @param {number} amount
        * @param {object} [options]
        * @param {string} [options.fromSymbol] - Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
        * @param {string} [options.toSymbol] - Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async userUniversalTransfer(type: UnivTransferType, asset: string, amount: number, options?: userUniversalTransferOptions): Promise<userUniversalTransferResponse> {
            validateRequiredParameters({ type, asset, amount });
            const url = this.prepareSignedPath('/sapi/v1/asset/transfer',
                Object.assign(options ? options : {}, { type: type, asset: asset.toUpperCase(), amount: amount })
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query User Universal Transfer History (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/query-user-universal-transfer}
        *
        * @param {UnivTransferType} type - Universal transfer type
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {string} [options.fromSymbol] - Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
        * @param {string} [options.toSymbol] - Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getUserUniversalTransferHistory(type: UnivTransferType, options?: getUserUniversalTransferHistoryOptions): Promise<getUserUniversalTransferHistoryResponse> {
            validateRequiredParameters({ type });
            const url = this.prepareSignedPath('/sapi/v1/asset/transfer',
                Object.assign(options ? options : {}, { type: type })
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Funding Wallet (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/funding-wallet}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {NeedBtcValuation} [options.needBtcValuation]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async fundingWallet(options?: fundingWalletOptions): Promise<fundingWalletResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/asset/get-funding-asset',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * User Asset (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/user-assets}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {NeedBtcValuation} [options.needBtcValuation]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async userAsset(options?: userAssetOptions): Promise<userAssetResponse[]> {
            const url = this.prepareSignedPath('/sapi/v3/asset/getUserAsset',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Cloud-Mining payment and refund history (USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/cloud-mining-payment-and-refund-history}
        *
        * @param {number} startTime - inclusive, unit: ms
        * @param {number} endTime - exclusive, unit: ms
        * @param {object} [options]
        * @param {number} [options.tranId] - The transaction id
        * @param {string} [options.clientTranId] - The unique flag
        * @param {string} [options.asset] - If it is blank, we will query all assets
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        */
        async getCloudminingPaymentAndRefundHistory(startTime: number, endTime: number, options?: getCloudminingPaymentAndRefundHistoryOptions): Promise<getCloudminingPaymentAndRefundHistoryResponse> {
            validateRequiredParameters({ startTime, endTime });
            const url = this.prepareSignedPath('/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage',
                Object.assign(
                    options ? options : {},
                    {
                        startTime: startTime,
                        endTime: endTime
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Query User Delegation History(For Master Account)(USER_DATA) {@link https://developers.binance.com/docs/wallet/asset/query-user-delegation}
         * 
         * @param {string} email
         * @param {number} startTime
         * @param {number} endTime
         * @param {object} [options]
         * @param {string} [options.type] - Delegate/Undelegate
         * @param {string} [options.asset]
         * @param {number} [options.current] - default 1
         * @param {number} [options.size] - default 10, max 100
         * @param {number} [options.recvWindow]
         */
        async queryUserDelegationHistory(email: string, startTime: number, endTime: number, options?: queryUserDelegationHistoryOptions): Promise<queryUserDelegationHistoryResponse> {
            validateRequiredParameters({ email, startTime, endTime });
            const url = this.prepareSignedPath('/sapi/v1/asset/custody/transfer-history',
                Object.assign(
                    options ? options : {},
                    {
                        email: email,
                        startTime: startTime,
                        endTime: endTime
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Account info (USER_DATA) {@link https://developers.binance.com/docs/wallet/account}
         * 
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async accountInfo(options?: accountInfoOptions): Promise<accountInfoResponse> {
            const url = this.prepareSignedPath('/sapi/v1/account/info',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get API Key Permission (USER_DATA) {@link https://developers.binance.com/docs/wallet/account/api-key-permission}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getApiKeyPermission(options?: getApiKeyPermissionOptions): Promise<getApiKeyPermissionResponse> {
            const url = this.prepareSignedPath('/sapi/v1/account/apiRestrictions',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * One click arrival deposit apply (for expired address deposit) (USER_DATA) {@link https://developers.binance.com/docs/wallet/capital/one-click-arrival-deposite-apply}
        *
        * @param {object} [options]
        * @param {number} [options.depositId] - Deposit record Id, priority use
        * @param {number} [options.txId] - Deposit txId, used when depositId is not specified
        * @param {number} [options.subAccountId] - Sub-accountId of Cloud user
        * @param {number} [options.subUserId] - Sub-userId of parent user
        */
        async oneClickArrivalDepositApply(options?: oneClickArrivalDepositApplyOptions): Promise<oneClickArrivalDepositApplyResponse> {
            const url = this.prepareSignedPath('/sapi/v1/capital/deposit/credit-apply',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }
    };
}
