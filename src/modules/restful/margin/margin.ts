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
    marginAccountNewOtoOptions,
    marginAccountNewOtoResponse,
    marginAccountNewOtocoOptions,
    marginAccountNewOtocoResponse,
    getLeverageBracketResponse,
    marginAccountBorrowRepayOptions,
    marginAccountBorrowRepayResponse,
    getBorrowRepayRecordsOptions,
    getBorrowRepayRecordsResponse
} from './types';
import { MarginMethods } from './methods';
import { Side, OrderType, IsIsolatedMargin, MarginBorrowRepayType, OrderListAboveBelowType, OtoPendingType, OrderListWorkingType } from '../../enum';

export function mixinMargin<T extends Constructor>(base: T): Constructor<MarginMethods> & T {
    return class extends base {
        /**
        * Get All Margin Assets (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Get-All-Margin-Assets}
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
        * Get All Cross Margin Pairs (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Get-All-Cross-Margin-Pairs}
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
        * Query Margin PriceIndex (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Query-Margin-PriceIndex}
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
        * Margin Account New Order (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-New-Order}
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
        * Margin Account Cancel Order (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-Order}
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
        * Margin Account Cancel all Open Orders on a Symbol (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-All-Open-Orders}
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
         * Adjust cross margin max leverage (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Adjust-Cross-Margin-Max-Leverage}
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
        * Get Cross Margin Transfer History (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/transfer/Get-Cross-Margin-Transfer-History}
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
        * Get Interest History (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/borrow-and-repay/Get-Interest-History}
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
        * Get Force Liquidation Record (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Get-Force-Liquidation-Record}
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
        * Query Cross Margin Account Details (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Query-Cross-Margin-Account-Details}
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
        * Query Margin Account's Order (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Order}
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
        * Query Margin Account's Open Orders (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Open-Orders}
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
        * Query Margin Account's All Orders (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-Orders}
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
        * Margin Account New OCO (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-New-OCO}
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
        * Margin Account Cancel OCO (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-OCO}
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
        * Query Margin Account's OCO (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-OCO}
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
        * Query Margin Account's all OCO (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-OCO}
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
        * Query Margin Account's Open OCO (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Open-OCO}
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
        * Query Margin Account's Trade List (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Trade-List}
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
        * Query Max Borrow (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/borrow-and-repay/Query-Max-Borrow}
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
        * Query Max Transfer-Out Amount (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/transfer/Query-Max-Transfer-Out-Amount}
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
        * Get Summary of Margin account (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Get-Summary-Of-Margin-Account}
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
        * Query Isolated Margin Account Info (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Account-Info}
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
        * Disable Isolated Margin Account (TRADE) {@link https://developers.binance.com/docs/margin_trading/account/Disable-Isolated-Margin-Account}
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
        * Enable Isolated Margin Account (TRADE) {@link https://developers.binance.com/docs/margin_trading/account/Enable-Isolated-Margin-Account}
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
        * Query Enabled Isolated Margin Account Limit (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Query-Enabled-Isolated-Margin-Account-Limit}
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
        * Get All Isolated Margin Symbol (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Get-All-Isolated-Margin-Symbol}
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
        * Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Toggle-BNB-Burn-On-Spot-Trade-And-Margin-Interest}
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
        * Get BNB Burn Status (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Get-BNB-Burn-Status}
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
        * Query Margin Interest Rate History (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/borrow-and-repay/Query-Margin-Interest-Rate-History}
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
        * Query Cross Margin Fee Data (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Query-Cross-Margin-Fee-Data}
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
        * Query Isolated Margin Fee Data (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Fee-Data}
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
        * Query Isolated Margin Tier Data (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Query-Isolated-Margin-Tier-Data}
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
        * Query Current Margin Order Count Usage (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Query-Current-Margin-Order-Count-Usage}
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
        * Cross margin collateral ratio (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Cross-margin-collateral-ratio}
        *
        */
        async crossMarginCollateralRatio(): Promise<crossMarginCollateralRatioResponse[]> {
            return await this.makeRequest('GET', '/sapi/v1/margin/crossMarginCollateralRatio');
        }


        /**
        * Get Small Liability Exchange Coin List (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Get-Small-Liability-Exchange-Coin-List}
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
        * Small Liability Exchange (MARGIN) {@link https://developers.binance.com/docs/margin_trading/trade/Small-Liability-Exchange}
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
        * Get Small Liability Exchange History (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/trade/Get-Small-Liability-Exchange-History}
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
        * Get a future hourly interest rate (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/borrow-and-repay/Get-a-future-hourly-interest-rate}
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
        * Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Get-Delist-Schedule}
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
         * Get the available margin inventory (USER_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Query-margin-avaliable-inventory}
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
         * Margin manual liquidation (MARGIN) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Manual-Liquidation}
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
         * Margin Account New OTO (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-New-OTO}
         * 
         * @param {string} symbol
         * @param {OrderListWorkingType} workingType - Supported values: `LIMIT`, `LIMIT_MAKER`
         * @param {Side} workingSide - Supported values: `BUY`, `SELL`
         * @param {number} workingPrice
         * @param {number} workingQuantity - Sets the quantity for the working order.
         * @param {OtoPendingType} pendingType - Note that `MARKET` orders using `quoteOrderQty` are not supported.
         * @param {Side} pendingSide - Supported values: `BUY`, `SELL`
         * @param {number} pendingQuantity - 	Sets the quantity for the pending order.
         * @param {object} [options]
         * @param {string} [options.isIsolated] - for isolated margin or not: TRUE, FALSE. Default: FALSE
         * @param {string} [options.listClientOrderId] - Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order list with the same listClientOrderId is accepted only when the previous one is filled or completely expired. `listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.
         * @param {NewOrderRespType} [options.newOrderRespType] - Format of the JSON response. Supported values: `ACK`, `FULL`, `RESULT`
         * @param {SideEffectType} [options.sideEffectType] - Default `NO_SIDE_EFFECT`
         * @param {string} [options.selfTradePreventionMode] - The allowed values are dependent on what is configured on the symbol.
         * @param {boolean} [options.autoRepayAtCancel] - Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true
         * @param {string} [options.workingClientOrderId] - Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.
         * @param {number} [options.workingIcebergQty] - This can only be used if workingTimeInForce is `GTC` or if workingType is `LIMIT_MAKER`
         * @param {TimeInForce} [options.workingTimeInForce] - Supported values: `FOK`, `IOC`, `GTC`
         * @param {string} [options.pendingClientOrderId] - Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent.
         * @param {number} [options.pendingPrice]
         * @param {number} [options.pendingStopPrice]
         * @param {number} [options.pendingTrailingDelta]
         * @param {number} [options.pendingIcebergQty] - This can only be used if pendingTimeInForce is GTC or if pendingType is LIMIT_MAKER
         * @param {TimeInForce} [options.pendingTimeInForce] - Supported values: `GTC`, `FOK`, `IOC`
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000.
         */
        async marginAccountNewOto(symbol: string, workingType: OrderListWorkingType, workingSide: Side, workingPrice: number, workingQuantity: number, pendingType: OtoPendingType, pendingSide: Side, pendingQuantity: number, options?: marginAccountNewOtoOptions): Promise<marginAccountNewOtoResponse> {
            validateRequiredParameters({ symbol, workingType, workingSide, workingPrice, workingQuantity, pendingType, pendingSide, pendingQuantity });
            const url = this.prepareSignedPath('/sapi/v1/margin/order/oto',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase(),
                        workingType: workingType,
                        workingSide: workingSide,
                        workingPrice: workingPrice,
                        workingQuantity: workingQuantity,
                        pendingType: pendingType,
                        pendingSide: pendingSide,
                        pendingQuantity: pendingQuantity
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
         * New Order List - OTOCO (TRADE) {@link https://developers.binance.com/docs/margin_trading/trade/Margin-Account-New-OTOCO}
         * 
         * @param {string} symbol
         * @param {OrderListWorkingType} workingType - Supported values: `LIMIT`, `LIMIT_MAKER`
         * @param {Side} workingSide - Supported values: `BUY`, `SELL`
         * @param {number} workingPrice
         * @param {number} workingQuantity
         * @param {Side} pendingSide - Supported values: `BUY`, `SELL`
         * @param {number} pendingQuantity - Sets the quantity for the pending order.
         * @param {OrderListAboveBelowType} pendingAboveType - Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT
         * @param {object} [options]
         * @param {string} [options.isIsolated] - for isolated margin or not: TRUE, FALSE. Default: FALSE
         * @param {SideEffectType} [options.sideEffectType] - Default `NO_SIDE_EFFECT`
         * @param {boolean} [options.autoRepayAtCancel] - Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true
         * @param {string} [options.listClientOrderId] - Arbitrary unique ID among open order lists. Automatically generated if not sent. A new order list with the same listClientOrderId is accepted only when the previous one is filled or completely expired. `listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.
         * @param {NewOrderRespType} [options.newOrderRespType] - Format of the JSON response. Supported values: `ACK`, `FULL`, `RESULT`
         * @param {string} [options.selfTradePreventionMode] - The allowed values are dependent on what is configured on the symbol
         * @param {string} [options.workingClientOrderId] - Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.
         * @param {number} [options.workingIcebergQty] - This can only be used if workingTimeInForce is `GTC` or if workingType is `LIMIT_MAKER`
         * @param {TimeInForce} [options.workingTimeInForce] - Supported values: `FOK`, `IOC`, `GTC`
         * @param {string} [options.pendingAboveClientOrderId] - Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent.
         * @param {number} [options.pendingAbovePrice]
         * @param {number} [options.pendingAboveStopPrice]
         * @param {number} [options.pendingAboveTrailingDelta]
         * @param {number} [options.pendingAboveIcebergQty] - This can only be used if pendingAboveTimeInForce is GTC or if pendingAboveType is LIMIT_MAKER.
         * @param {TimeInForce} [options.pendingAboveTimeInForce]
         * @param {OrderListAboveBelowType} [options.pendingBelowType] - Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT
         * @param {string} [options.pendingBelowClientOrderId] - Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent.
         * @param {number} [options.pendingBelowPrice]
         * @param {number} [options.pendingBelowStopPrice]
         * @param {number} [options.pendingBelowTrailingDelta]
         * @param {number} [options.pendingBelowIcebergQty] - This can only be used if pendingBelowTimeInForce is GTC or if pendingBelowType is LIMIT_MAKER.
         * @param {TimeInForce} [options.pendingBelowTimeInForce]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000.
         */
        async marginAccountNewOtoco(symbol: string, workingType: OrderListWorkingType, workingSide: Side, workingPrice: number, workingQuantity: number, pendingSide: Side, pendingQuantity: number, pendingAboveType: OrderListAboveBelowType, options?: marginAccountNewOtocoOptions): Promise<marginAccountNewOtocoResponse> {
            validateRequiredParameters({ symbol, workingType, workingSide, workingPrice, workingQuantity, pendingSide, pendingQuantity, pendingAboveType });
            const url = this.prepareSignedPath('/sapi/v1/margin/order/otoco',
                Object.assign(
                    options ? options : {},
                    {
                        symbol: symbol.toUpperCase(),
                        workingType: workingType,
                        workingSide: workingSide,
                        workingPrice: workingPrice,
                        workingQuantity: workingQuantity,
                        pendingSide: pendingSide,
                        pendingQuantity: pendingQuantity,
                        pendingAboveType: pendingAboveType
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
         * Get the liability assets leverage bracket in Cross Margin Pro Mode (MARKET_DATA) {@link https://developers.binance.com/docs/margin_trading/market-data/Query-Liability-Coin-Leverage-Bracket-in-Cross-Margin-Pro-Mode}
         */
        async getLeverageBracket(): Promise<getLeverageBracketResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/margin/leverageBracket');
            return await this.makeRequest('GET', url);
        }

        /**
         * Margin account borrow/repay(MARGIN) {@link https://developers.binance.com/docs/margin_trading/borrow-and-repay/Margin-Account-Borrow-Repay}
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
         * Query borrow/repay records in Margin account(USER_DATA) {@link https://developers.binance.com/docs/margin_trading/borrow-and-repay/Query-Borrow-Repay}
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
