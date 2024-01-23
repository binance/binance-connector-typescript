import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import {
    adjustCrossMarginMaxLeverageResponse,
    getAllCrossMarginPairsOptions,
    getAllCrossMarginPairsResponse,
    getAllMarginAssetsOptions,
    getAllMarginAssetsResponse,
    getCrossMarginAccountDetailsOptions,
    getCrossMarginAccountDetailsResponse,
    getCrossMarginTransferHistoryOptions,
    getCrossMarginTransferHistoryResponse,
    getForceLiquidationRecordOptions,
    getForceLiquidationRecordResponse,
    getInterestHistoryOptions,
    getInterestHistoryResponse,
    getMarginPriceIndexResponse,
    getMarginAccountAllOrdersOptions,
    getMarginAccountAllOrdersResponse,
    getMarginAccountOpenOrdersOptions,
    getMarginAccountOpenOrdersResponse,
    getMarginAccountOrderOptions,
    getMarginAccountOrderResponse,
    marginAccountCancelAllOpenOrdersOnASymbolOptions,
    marginAccountCancelAllOpenOrdersOnASymbolResponse,
    marginAccountCancelOrderOptions,
    marginAccountCancelOrderResponse,
    marginAccountNewOrderOptions,
    marginAccountNewOrderResponse,
    marginAccountNewOcoOptions,
    marginAccountNewOcoResponse,
    getMarginAccountOcoOptions,
    getMarginAccountOcoResponse,
    marginAccountCancelOcoOptions,
    marginAccountCancelOcoResponse,
    getMarginAccountAllOcoOptions,
    getMarginAccountAllOcoResponse,
    getMarginAccountOpenOcoOptions,
    getMarginAccountOpenOcoResponse,
    getMarginAccountTradeListOptions,
    getMarginAccountTradeListResponse,
    getMaxBorrowOptions,
    getMaxBorrowResponse,
    getMaxTransferoutAmountOptions,
    getMaxTransferoutAmountResponse,
    getSummaryOfMarginAccountOptions,
    getSummaryOfMarginAccountResponse,
    getIsolatedMarginAccountInfoOptions,
    getIsolatedMarginAccountInfoResponse,
    disableIsolatedMarginAccountOptions,
    disableIsolatedMarginAccountResponse,
    enableIsolatedMarginAccountOptions,
    enableIsolatedMarginAccountResponse,
    getEnabledIsolatedMarginAccountLimitOptions,
    getEnabledIsolatedMarginAccountLimitResponse,
    getAllIsolatedMarginSymbolOptions,
    getAllIsolatedMarginSymbolResponse,
    toggleBnbBurnOnSpotTradeAndMarginInterestOptions,
    toggleBnbBurnOnSpotTradeAndMarginInterestResponse,
    getBnbBurnStatusOptions,
    getBnbBurnStatusResponse,
    marginInterestRateHistoryOptions,
    marginInterestRateHistoryResponse,
    getCrossMarginFeeDataOptions,
    getCrossMarginFeeDataResponse,
    getIsolatedMarginFeeDataOptions,
    getIsolatedMarginFeeDataResponse,
    getIsolatedMarginTierDataOptions,
    getIsolatedMarginTierDataResponse,
    getCurrentMarginOrderCountUsageOptions,
    getCurrentMarginOrderCountUsageResponse,
    crossMarginCollateralRatioResponse,
    getSmallLiabilityExchangeCoinListOptions,
    getSmallLiabilityExchangeCoinListResponse,
    smallLiabilityExchangeOptions,
    smallLiabilityExchangeResponse,
    getSmallLiabilityExchangeHistoryOptions,
    getSmallLiabilityExchangeHistoryResponse,
    getFutureHoulyInterestRateResponse,
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions,
    getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse,
    getMarginAvailableInventoryOptions,
    getMarginAvailableInventoryResponse,
    marginManualLiquidationOptions,
    marginManualLiquidationResponse,
    getLeverageBracketResponse,
    marginAccountBorrowRepayOptions,
    marginAccountBorrowRepayResponse,
    getBorrowRepayRecordsOptions,
    getBorrowRepayRecordsResponse
} from './types';
import { MarginMethods } from './methods';
import { Side, OrderType, IsIsolatedMargin, MarginBorrowRepayType } from '../../enum';

export function mixinMargin<T extends Constructor>(base: T): Constructor<MarginMethods> & T {
    return class extends base {
        /**
        * Get All Margin Assets (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-margin-assets-market_data}
        * 
        * @param {object} [options]
        * @param {string} [options.asset]
        */
        async getAllMarginAssets(options?: getAllMarginAssetsOptions): Promise<getAllMarginAssetsResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/allAssets',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get All Cross Margin Pairs (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-cross-margin-pairs-market_data}
        * 
        * @param {object} [options]
        * @param {string} [options.symbol]
        */
        async getAllCrossMarginPairs(options?: getAllCrossMarginPairsOptions): Promise<getAllCrossMarginPairsResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/allPairs',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin PriceIndex (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-priceindex-market_data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        */
        async getMarginPriceIndex(symbol: string): Promise<getMarginPriceIndexResponse> {
            validateRequiredParameters({ symbol });
            const url = this.preparePath('/sapi/v1/margin/priceIndex',
                {
                    symbol: symbol.toUpperCase()
                });
            return await this.makeRequest('GET', url);
        }


        /**
        * Margin Account New Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-new-order-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {Side} side
        * @param {OrderType} type - Order type
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.quantity]
        * @param {number} [options.quoteOrderQty] - Quote quantity
        * @param {number} [options.price] - Order price
        * @param {number} [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
        * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
        * @param {number} [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
        * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON.
        * @param {SideEffectType} [options.sideEffectType] - Default `NO_SIDE_EFFECT`
        * @param {TimeInForce} [options.timeInForce] - Order time in force
        * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE
        * @param {Boolean} [options.autoRepayAtCancel] - Only when MARGIN_BUY or AUTO_BORROW_REPAY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginAccountNewOrder(symbol: string, side: Side, type: OrderType, options?: marginAccountNewOrderOptions): Promise<marginAccountNewOrderResponse> {
            validateRequiredParameters({ symbol, side, type });
            const url = this.prepareSignedPath('/sapi/v1/margin/order',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase(),
                        side: side,
                        type: type
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Margin Account Cancel Order (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-order-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.orderId] - Order id
        * @param {string} [options.origClientOrderId] - Order id from client
        * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginAccountCancelOrder(symbol: string, options?: marginAccountCancelOrderOptions): Promise<marginAccountCancelOrderResponse> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/order',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('DELETE', url);
        }


        /**
        * Margin Account Cancel all Open Orders on a Symbol (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-all-open-orders-on-a-symbol-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginAccountCancelAllOpenOrdersOnASymbol(symbol: string, options?: marginAccountCancelAllOpenOrdersOnASymbolOptions): Promise<marginAccountCancelAllOpenOrdersOnASymbolResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/openOrders',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('DELETE', url);
        }


        /**
         * Adjust cross margin max leverage (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#adjust-cross-margin-max-leverage-user_data}
         * 
         * @param {number} maxLeverage - Can only adjust 3 , 5 or 10，Example: maxLeverage=10 for Cross Margin Pro ，maxLeverage = 5 or 3 for Cross Margin Classic
         */
        async adjustCrossMarginMaxLeverage(maxLeverage: number): Promise<adjustCrossMarginMaxLeverageResponse> {
            validateRequiredParameters({ maxLeverage });
            const url = this.prepareSignedPath('/sapi/v1/margin/max-leverage',
                {
                    maxLeverage: maxLeverage
                }
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Cross Margin Transfer History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-cross-margin-transfer-history-user_data}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {GetCrossMargingTransferHistoryType} [options.type] - Transfer Type
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {string} [options.isolatedSymbol] - Symbol in Isolated Margin
        * @param {string} [options.archived] - Default: false. Set to true for archived data from 6 months ago
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getCrossMarginTransferHistory(options?: getCrossMarginTransferHistoryOptions): Promise<getCrossMarginTransferHistoryResponse> {
            const url = this.prepareSignedPath('/sapi/v1/margin/transfer',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Interest History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-interest-history-user_data}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {string} [options.isolatedSymbol] - Isolated symbol
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {string} [options.archived] - Default: false. Set to true for archived data from 6 months ago
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getInterestHistory(options?: getInterestHistoryOptions): Promise<getInterestHistoryResponse> {
            const url = this.prepareSignedPath('/sapi/v1/margin/interestHistory',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Force Liquidation Record (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-force-liquidation-record-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {string} [options.isolatedSymbol] - Isolated symbol
        * @param {number} [options.current] - Current querying page. Start from 1. Default:1
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getForceLiquidationRecord(options?: getForceLiquidationRecordOptions): Promise<getForceLiquidationRecordResponse> {

            const url = this.prepareSignedPath('/sapi/v1/margin/forceLiquidationRec',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Cross Margin Account Details (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-account-details-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getCrossMarginAccountDetails(options?: getCrossMarginAccountDetailsOptions): Promise<getCrossMarginAccountDetailsResponse> {
            const url = this.prepareSignedPath('/sapi/v1/margin/account',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin Account Order (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-order-user_data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.orderId] - Order id
        * @param {string} [options.origClientOrderId] - Order id from client
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountOrder(symbol: string, options?: getMarginAccountOrderOptions): Promise<getMarginAccountOrderResponse> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/order',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin Account Open Orders (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-open-orders-user_data}
        *
        * @param {object} [options]
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountOpenOrders(options?: getMarginAccountOpenOrdersOptions): Promise<getMarginAccountOpenOrdersResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/openOrders',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin Account All Orders (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-all-orders-user_data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.orderId] - Order id
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit] - Default 500; max 1000.
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountAllOrders(symbol: string, options?: getMarginAccountAllOrdersOptions): Promise<getMarginAccountAllOrdersResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/allOrders',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Margin Account New OCO (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-new-oco-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {Side} side
        * @param {number} quantity
        * @param {number} price - Order price
        * @param {number} stopPrice
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {string} [options.listClientOrderId] - A unique Id for the entire orderList
        * @param {string} [options.limitClientOrderId] - A unique Id for the limit order
        * @param {number} [options.limitIcebergQty]
        * @param {string} [options.stopClientOrderId] - A unique Id for the stop loss/stop loss limit leg
        * @param {number} [options.stopLimitPrice] - If provided, stopLimitTimeInForce is required.
        * @param {number} [options.stopIcebergQty]
        * @param {StopLimitTimeInForce} [options.stopLimitTimeInForce]
        * @param {NewOrderRespType} [options.newOrderRespType] - Set the response JSON.
        * @param {SideEffectType} [options.sideEffectType] - Default `NO_SIDE_EFFECT`
        * @param {SelfTradePreventionMode} [options.selfTradePreventionMode] - The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE
        * @param {Boolean} [options.autoRepayAtCancel] - Only when MARGIN_BUY or AUTO_BORROW_REPAY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginAccountNewOco(symbol: string, side: Side, quantity: number, price: number, stopPrice: number, options?: marginAccountNewOcoOptions): Promise<marginAccountNewOcoResponse> {
            validateRequiredParameters({ symbol, side, quantity, price, stopPrice });
            const url = this.prepareSignedPath('/sapi/v1/margin/order/oco',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase(),
                        side: side,
                        quantity: quantity,
                        price: price,
                        stopPrice: stopPrice
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Margin Account Cancel OCO (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-oco-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.orderListId] - Order list id
        * @param {string} [options.listClientOrderId] - A unique Id for the entire orderList
        * @param {string} [options.newClientOrderId] - Used to uniquely identify this cancel. Automatically generated by default
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginAccountCancelOco(symbol: string, options?: marginAccountCancelOcoOptions): Promise<marginAccountCancelOcoResponse> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/orderList',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('DELETE', url);
        }


        /**
        * Query Margin Account OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-oco-user_data}
        *
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
        * @param {number} [options.orderListId] - Order list id
        * @param {string} [options.origClientOrderId] - Order id from client
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountOco(options?: getMarginAccountOcoOptions): Promise<getMarginAccountOcoResponse> {

            const url = this.prepareSignedPath('/sapi/v1/margin/orderList',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin Account all OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-all-oco-user_data}
        *
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
        * @param {string} [options.fromId] - If supplied, neither `startTime` or `endTime` can be provided
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.limit] - Default Value: 500; Max Value: 1000
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountAllOco(options?: getMarginAccountAllOcoOptions): Promise<getMarginAccountAllOcoResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/allOrderList',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin Account Open OCO (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-open-oco-user_data}
        *
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {string} [options.symbol] - Mandatory for isolated margin, not supported for cross margin
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountOpenOco(options?: getMarginAccountOpenOcoOptions): Promise<getMarginAccountOpenOcoResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/openOrderList',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Margin Account Trade List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-trade-list-user_data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {IsIsolatedMargin} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {number} [options.orderId]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
        * @param {number} [options.limit] - Default 500; max 1000.
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMarginAccountTradeList(symbol: string, options?: getMarginAccountTradeListOptions): Promise<getMarginAccountTradeListResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/myTrades',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Max Borrow (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-borrow-user_data}
        *
        * @param {string} asset
        * @param {object} [options]
        * @param {string} [options.isolatedSymbol] - Isolated symbol
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMaxBorrow(asset: string, options?: getMaxBorrowOptions): Promise<getMaxBorrowResponse> {
            validateRequiredParameters({ asset });
            const url = this.prepareSignedPath('/sapi/v1/margin/maxBorrowable',
                Object.assign(
                    options ? options : {},
                    {
                        asset: asset.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Max Transfer-Out Amount (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-transfer-out-amount-user_data}
        *
        * @param {string} asset
        * @param {object} [options]
        * @param {string} [options.isolatedSymbol] - Isolated symbol
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getMaxTransferoutAmount(asset: string, options?: getMaxTransferoutAmountOptions): Promise<getMaxTransferoutAmountResponse> {
            validateRequiredParameters({ asset });
            const url = this.prepareSignedPath('/sapi/v1/margin/maxTransferable',
                Object.assign(
                    options ? options : {},
                    {
                        asset: asset.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get Summary of Margin account (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-summary-of-margin-account-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSummaryOfMarginAccount(options?: getSummaryOfMarginAccountOptions): Promise<getSummaryOfMarginAccountResponse> {
            const url = this.prepareSignedPath('/sapi/v1/margin/tradeCoeff',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Isolated Margin Account Info (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-account-info-user_data}
        *
        * @param {object} [options]
        * @param {string} [options.symbols] - Max 5 symbols can be sent; separated by ','
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getIsolatedMarginAccountInfo(options?: getIsolatedMarginAccountInfoOptions): Promise<getIsolatedMarginAccountInfoResponse> {
            const url = this.prepareSignedPath('/sapi/v1/margin/isolated/account',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Disable Isolated Margin Account (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#disable-isolated-margin-account-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async disableIsolatedMarginAccount(symbol: string, options?: disableIsolatedMarginAccountOptions): Promise<disableIsolatedMarginAccountResponse> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/isolated/account',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('DELETE', url);
        }


        /**
        * Enable Isolated Margin Account (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#enable-isolated-margin-account-trade}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async enableIsolatedMarginAccount(symbol: string, options?: enableIsolatedMarginAccountOptions): Promise<enableIsolatedMarginAccountResponse> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/isolated/account',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Enabled Isolated Margin Account Limit (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-enabled-isolated-margin-account-limit-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getEnabledIsolatedMarginAccountLimit(options?: getEnabledIsolatedMarginAccountLimitOptions): Promise<getEnabledIsolatedMarginAccountLimitResponse> {
            const url = this.prepareSignedPath('/sapi/v1/margin/isolated/accountLimit',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get All Isolated Margin Symbol (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-isolated-margin-symbol-user_data}
        *
        * @param {object} [options]
        * @param {string} [options.symbol]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getAllIsolatedMarginSymbol(options?: getAllIsolatedMarginSymbolOptions): Promise<getAllIsolatedMarginSymbolResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/isolated/allPairs',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#toggle-bnb-burn-on-spot-trade-and-margin-interest-user_data}
        *
        * @param {object} [options]
        * @param {SpotBNBBurn} [options.spotBNBBurn] - Determines whether to use BNB to pay for trading fees on SPOT
        * @param {InterestBNBBurn} [options.interestBNBBurn] - Determines whether to use BNB to pay for margin loan interest
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async toggleBnbBurnOnSpotTradeAndMarginInterest(options?: toggleBnbBurnOnSpotTradeAndMarginInterestOptions): Promise<toggleBnbBurnOnSpotTradeAndMarginInterestResponse> {
            const url = this.prepareSignedPath('/sapi/v1/bnbBurn',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get BNB Burn Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-bnb-burn-status-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getBnbBurnStatus(options?: getBnbBurnStatusOptions): Promise<getBnbBurnStatusResponse> {
            const url = this.prepareSignedPath('/sapi/v1/bnbBurn',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Margin Interest Rate History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-interest-rate-history-user_data}
        *
        * @param {string} asset
        * @param {object} [options]
        * @param {number} [options.vipLevel] - Defaults to user vip level
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async marginInterestRateHistory(asset: string, options?: marginInterestRateHistoryOptions): Promise<marginInterestRateHistoryResponse[]> {
            validateRequiredParameters({ asset });
            const url = this.prepareSignedPath('/sapi/v1/margin/interestRateHistory',
                Object.assign(
                    options ? options : {},
                    {
                        asset: asset.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Cross Margin Fee Data (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-fee-data-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.vipLevel] - Defaults to user vip level
        * @param {string} [options.coin] - Coin name
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getCrossMarginFeeData(options?: getCrossMarginFeeDataOptions): Promise<getCrossMarginFeeDataResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/crossMarginData',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Isolated Margin Fee Data (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-fee-data-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.vipLevel] - Defaults to user vip level
        * @param {string} [options.symbol] - Trading symbol, e.g. BNBUSDT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getIsolatedMarginFeeData(options?: getIsolatedMarginFeeDataOptions): Promise<getIsolatedMarginFeeDataResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/isolatedMarginData',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Isolated Margin Tier Data (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-isolated-margin-tier-data-user_data}
        *
        * @param {string} symbol - Trading symbol, e.g. BNBUSDT
        * @param {object} [options]
        * @param {string} [options.tier] - All margin tier data will be returned if tier is omitted
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getIsolatedMarginTierData(symbol: string, options?: getIsolatedMarginTierDataOptions): Promise<getIsolatedMarginTierDataResponse[]> {
            validateRequiredParameters({ symbol });
            const url = this.prepareSignedPath('/sapi/v1/margin/isolatedMarginTier',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Current Margin Order Count Usage (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#query-current-margin-order-count-usage-trade}
        *
        * @param {object} [options]
        * @param {string} [options.isIsolated] - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        * @param {string} [options.symbol] - isolated symbol, mandatory for isolated margin
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getCurrentMarginOrderCountUsage(options?: getCurrentMarginOrderCountUsageOptions): Promise<getCurrentMarginOrderCountUsageResponse[]> {

            const url = this.prepareSignedPath('/sapi/v1/margin/rateLimit/order',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Cross margin collateral ratio (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#cross-margin-collateral-ratio-market_data}
        *
        */
        async crossMarginCollateralRatio(): Promise<crossMarginCollateralRatioResponse> {
            return await this.makeRequest('GET', '/sapi/v1/margin/crossMarginCollateralRatio');
        }


        /**
        * Get Small Liability Exchange Coin List (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-small-liability-exchange-coin-list-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSmallLiabilityExchangeCoinList(options?: getSmallLiabilityExchangeCoinListOptions): Promise<getSmallLiabilityExchangeCoinListResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/exchange-small-liability',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Small Liability Exchange (MARGIN) {@link https://binance-docs.github.io/apidocs/spot/en/#small-liability-exchange-margin}
        *
        * @param {string[]} assetNames - The assets list of small liability exchange, Example: assetNames = BTC,ETH
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async smallLiabilityExchange(assetNames: string[], options?: smallLiabilityExchangeOptions): Promise<smallLiabilityExchangeResponse> {
            validateRequiredParameters({ assetNames });
            const url = this.prepareSignedPath('/sapi/v1/margin/exchange-small-liability ',
                Object.assign(
                    options ? options : {},
                    {
                        assetNames: assetNames,
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Small Liability Exchange History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-small-liability-exchange-history-user_data}
        *
        * @param {object} [options]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getSmallLiabilityExchangeHistory(current: number, size: number, options?: getSmallLiabilityExchangeHistoryOptions): Promise<getSmallLiabilityExchangeHistoryResponse> {
            validateRequiredParameters({ current, size });
            const url = this.prepareSignedPath('/sapi/v1/margin/exchange-small-liability-history',
                Object.assign(
                    options ? options : {},
                    {
                        current: current,
                        size: size,
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }

        /**
        * Get a future hourly interest rate (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-a-future-hourly-interest-rate-user_data}
        *
        * @param {string} assets - List of assets, separated by commas, up to 20
        * @param {IsIsolatedMargin} isIsolated - * `TRUE` - For isolated margin, * `FALSE` - Default, not for isolated margin
        */
        async getFutureHoulyInterestRate(assets: string, isIsolated: IsIsolatedMargin): Promise<getFutureHoulyInterestRateResponse> {
            validateRequiredParameters({ assets, isIsolated });
            const url = this.prepareSignedPath('/sapi/v1/margin/next-hourly-interest-rate',
                {
                    assets: assets,
                    isIsolated: isIsolated
                }
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-tokens-or-symbols-delist-schedule-for-cross-margin-and-isolated-margin-market_data}
        * 
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMargin(options?: getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginOptions): Promise<getTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/delist-schedule',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

        /**
         * Get the available margin inventory (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-available-inventory-user_data}
         * 
         * @param {string} type - MARGIN, ISOLATED
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async getMarginAvailableInventory(type: string, options?: getMarginAvailableInventoryOptions): Promise<getMarginAvailableInventoryResponse> {
            validateRequiredParameters({ type });
            const url = this.prepareSignedPath('/sapi/v1/margin/available-inventory',
                Object.assign(
                    options ? options : {},
                    { 
                        type: type 
                    }
                ) 
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Margin manual liquidation (MARGIN) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-manual-liquidation-margin}
         * 
         * @param {string} type - MARGIN, ISOLATED
         * @param {object} [options]
         * @param {string} [options.symbol] - When type selects ISOLATED, symbol must be filled in
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async marginManualLiquidation(type: string, options?: marginManualLiquidationOptions): Promise<marginManualLiquidationResponse[]> {
            validateRequiredParameters({ type });
            const url = this.prepareSignedPath('/sapi/v1/margin/manual-liquidation',
                Object.assign(
                    options ? options : {},
                    { 
                        type: type 
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

        /**
         * Get the liability assets leverage bracket in Cross Margin Pro Mode (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-liability-coin-leverage-bracket-in-cross-margin-pro-mode-market_data}
         */
        async getLeverageBracket(): Promise<getLeverageBracketResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/leverageBracket');
            return await this.makeRequest('GET', url);
        }

        /**
         * Margin account borrow/repay(MARGIN) {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-borrow-repay-margin}
         * 
         * @param {string} asset
         * @param {string} isIsolated - TRUE for Isolated Margin, FALSE for Cross Margin, Default FALSE
         * @param {string} symbol - Only for Isolated margin
         * @param {string} amount
         * @param {MarginBorrowRepayType} type - BORROW or REPAY
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async marginAccountBorrowRepay(asset: string, isIsolated: string, symbol: string, amount: string, type: MarginBorrowRepayType, options?: marginAccountBorrowRepayOptions): Promise<marginAccountBorrowRepayResponse> {
            validateRequiredParameters({ asset, isIsolated, symbol, amount, type });
            const url = this.prepareSignedPath('/sapi/v1/margin/borrow-repay',
                Object.assign(
                    options ? options : {},
                    { 
                        asset: asset,
                        isIsolated: isIsolated,
                        symbol: symbol,
                        amount: amount,
                        type: type
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

        /**
         * Query borrow/repay records in Margin account(USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-borrow-repay-records-in-margin-account-user_data}
         * 
         * @param {MarginBorrowRepayType} type - BORROW or REPAY
         * @param {object} [options]
         * @param {string} [options.asset]
         * @param {string} [options.isolatedSymbol] - Symbol in Isolated Margin
         * @param {number} [options.txId]
         * @param {number} [options.startTime]	
         * @param {number} [options.endTime]
         * @param {number} [options.current] - Current querying page. Start from 1. Default:1
         * @param {number} [options.size] - Default:10 Max:100
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async getBorrowRepayRecords(type: MarginBorrowRepayType, options?: getBorrowRepayRecordsOptions): Promise<getBorrowRepayRecordsResponse> {
            validateRequiredParameters({ type });
            const url = this.prepareSignedPath('/sapi/v1/margin/borrow-repay',
                Object.assign(
                    options ? options : {},
                    { 
                        type: type
                    }
                )
            );
            return await this.makeRequest('GET', url);
        }
    };
}
