import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
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
import { WalletMethods } from './methods';
import { AccountSnapshotType, UnivTransferType, BusdStableCoinsConversion } from '../../enum';

export function mixinWallet<T extends Constructor>(base: T): Constructor<WalletMethods> & T {
    return class extends base {
        /**
        * System Status (System) {@link https://binance-docs.github.io/apidocs/spot/en/#system-status-system}
        */
        async systemStatus(): Promise<systemStatusResponse> {
            return await this.makeRequest('GET', '/sapi/v1/system/status');
        }


        /**
        * All Coins' Information (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#all-coins39-information-user_data}
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
        * Daily Account Snapshot (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#daily-account-snapshot-user_data}
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
        * Disable Fast Withdraw Switch (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#disable-fast-withdraw-switch-user_data}
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
        * Enable Fast Withdraw Switch (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-fast-withdraw-switch-user_data}
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
        * Withdraw (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#withdraw-user_data}
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
        * Deposit History (supporting network) {@link https://binance-docs.github.io/apidocs/spot/en/#deposit-history-supporting-network}
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
        * Withdraw History (supporting network) {@link https://binance-docs.github.io/apidocs/spot/en/#withdraw-history-supporting-network}
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
        * Deposit Address (supporting network) {@link https://binance-docs.github.io/apidocs/spot/en/#deposit-address-supporting-network}
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
        * Account Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#account-status-user_data}
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
        * Account API Trading Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#account-api-trading-status-user_data}
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
        * DustLog (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#dustlog-user_data}
        *
        * @param {object} [options]
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
        * Get Assets That Can Be Converted Into BNB (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-assets-that-can-be-converted-into-bnb-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getAssetsThatCanBeConvertedIntoBnb(options?: getAssetsThatCanBeConvertedIntoBnbOptions): Promise<getAssetsThatCanBeConvertedIntoBnbResponse> {
            const url = this.prepareSignedPath('/sapi/v1/asset/dust-btc',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Dust Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#dust-transfer-user_data}
        *
        * @param {string[]} asset - The asset being converted. For example: asset=BTC,USDT
        * @param {object} [options]
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
        * Asset Dividend Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#asset-dividend-record-user_data}
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
        * Asset Detail (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#asset-detail-user_data}
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
        * Trade Fee (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#trade-fee-user_data}
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
        * User Universal Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#user-universal-transfer-user_data}
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
        * Query User Universal Transfer History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-user-universal-transfer-history-user_data}
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
        * Funding Wallet (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#funding-wallet-user_data}
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
        * User Asset (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#user-asset-user_data}
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
        * Convert Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#convert-transfer-user_data}
        *
        * @param {string} clientTranId - The unique flag, the min length is 20
        * @param {string} asset
        * @param {number} amount
        * @param {string} targetAsset - Target asset you want to convert
        * @param {object} [options]
        * @param {QueryConvertTransfer} [options.accountType] - The value cannot be greater than 60000
        */
        async convertTransfer(clientTranId: string, asset: string, amount: number, targetAsset: string, options?: convertTransferOptions): Promise<convertTransferResponse> {
            validateRequiredParameters({ clientTranId, asset, amount, targetAsset });
            const url = this.prepareSignedPath('/sapi/v1/asset/convert-transfer',
                Object.assign(
                    options ? options : {},
                    {
                        clientTranId: clientTranId,
                        asset: asset.toUpperCase(),
                        amount: amount,
                        targetAsset: targetAsset
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Convert Transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-convert-transfer-user_data}
        *
        * @param {number} startTime - inclusive, unit: ms
        * @param {number} endTime - exclusive, unit: ms
        * @param {object} [options]
        * @param {number} [options.tranId] - The transaction id
        * @param {string} [options.clientTranId] - The user-defined transaction id
        * @param {string} [options.asset] - If it is blank, we will match deducted asset and target asset.
        * @param {AccountType} [options.accountType] - MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet
        * @param {number} [options.current] - current page, default 1, the min value is 1
        * @param {number} [options.size] - page size, default 10, the max value is 100
        */
        async getConvertTransfer(startTime: number, endTime: number, options?: getConvertTransferOptions): Promise<getConvertTransferResponse> {
            validateRequiredParameters({ startTime, endTime });
            const url = this.prepareSignedPath('/sapi/v1/asset/convert-transfer/queryByPage',
                Object.assign(options ? options : {}, { startTime: startTime, endTime: endTime })
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Cloud-Mining payment and refund history (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-cloud-mining-payment-and-refund-history-user_data}
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
        * Get API Key Permission (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-api-key-permission-user_data}
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
        * Query auto-converting stable coins (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-auto-converting-stable-coins-user_data}
        */
        async getAutoconvertingStableCoins(): Promise<getAutoconvertingStableCoinsResponse> {
            return await this.makeRequest('GET', '/sapi/v1/capital/contract/convertible-coins');
        }


        /**
        * Switch on/off BUSD and stable coins conversion (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#switch-on-off-busd-and-stable-coins-conversion-user_data}
        *
        * @param {BusdStableCoinsConversion} coin - Must be USDC, USDP or TUSD
        * @param {boolean} enable - true: turn on the auto-conversion. false: turn off the auto-conversion
        */
        async switchOnOffBusdAndStableCoinsConversion(coin: BusdStableCoinsConversion, enable: boolean): Promise<void> {
            validateRequiredParameters({ coin, enable });
            const url = this.prepareSignedPath('/sapi/v1/capital/contract/convertible-coins',
                { coin: coin, enable: enable }
            );
            return await this.makeRequest('POST', url);
        }

        /**
        * One click arrival deposit apply (for expired address deposit) (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#one-click-arrival-deposit-apply-for-expired-address-deposit-user_data}
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
