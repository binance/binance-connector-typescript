import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
import {
    acceptQuoteOptions,
    acceptQuoteResponse,
    cancelLimitOrderOptions,
    cancelLimitOrderResponse,
    getConvertTradeHistoryOptions,
    getConvertTradeHistoryResponse,
    getOrderQuantityPrecisionPerAssetOptions,
    getOrderQuantityPrecisionPerAssetResponse,
    listAllConvertPairsOptions,
    listAllConvertPairsResponse,
    orderStatusOptions,
    orderStatusResponse,
    placeLimitOrderOptions,
    placeLimitOrderResponse,
    queryLimitOpenOrdersOptions,
    queryLimitOpenOrdersResponse,
    sendQuoteRequestOptions,
    sendQuoteRequestResponse,
} from './types';
import { ConvertMethods } from './methods';
import { ConvertExpiredType, ConvertSide } from '../../enum';

export function mixinConvert<T extends Constructor>(base: T): Constructor<ConvertMethods> & T {
    return class extends base { 
        /**
        * List All Convert Pairs (USER_DATA) {@link https://developers.binance.com/docs/convert/market-data/List-all-convert-pairs}
        *
        * @param {object} [options]
        * @param {string} [options.fromAsset] - User spends coin
        * @param {string} [options.toAsset] - User receives coin
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async listAllConvertPairs(options?: listAllConvertPairsOptions): Promise<listAllConvertPairsResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/convert/exchangeInfo',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

  
        /**
        * Query order quantity precision per asset (USER_DATA) {@link https://developers.binance.com/docs/convert/market-data/Query-order-quantity-precision-per-asset}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getOrderQuantityPrecisionPerAsset(options?: getOrderQuantityPrecisionPerAssetOptions): Promise<getOrderQuantityPrecisionPerAssetResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/convert/assetInfo',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

  
        /**
        * Send quote request (USER_DATA) {@link https://developers.binance.com/docs/convert/trade/Send-quote-request}
        *
        * @param {string} fromAsset
        * @param {string} toAsset
        * @param {object} [options]
        * @param {number} [options.fromAmount] - When specified, it is the amount you will be debited after the conversion
        * @param {number} [options.toAmount] - When specified, it is the amount you will be debited after the conversion
        * @param {WalletType} [options.walletType] - SPOT or FUNDING. Default is SPOT
        * @param {ValidTime} [options.validTime] - 10s, 30s, 1m, 2m, default 10s
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async sendQuoteRequest(fromAsset: string, toAsset: string, options?: sendQuoteRequestOptions): Promise<sendQuoteRequestResponse> {
            validateRequiredParameters({ fromAsset, toAsset });
            const url = this.prepareSignedPath('/sapi/v1/convert/getQuote',
                Object.assign(
                    options ? options : {},
                    {
                        fromAsset: fromAsset,
                        toAsset: toAsset
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

  
        /**
        * Accept Quote (TRADE) {@link https://developers.binance.com/docs/convert/trade/Accept-Quote}
        *
        * @param {string} quoteId
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async acceptQuote(quoteId: string, options?: acceptQuoteOptions): Promise<acceptQuoteResponse> {
            validateRequiredParameters({ quoteId });
            const url = this.prepareSignedPath('/sapi/v1/convert/acceptQuote',
                Object.assign(
                    options ? options : {},
                    {
                        quoteId: quoteId
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

  
        /**
        * Order status (USER_DATA) {@link https://developers.binance.com/docs/convert/trade/Order-Status}
        *
        * @param {object} [options]
        * @param {string} [options.orderId] - Either orderId or quoteId is required
        * @param {string} [options.quoteId] - Either orderId or quoteId is required
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async orderStatus(options?: orderStatusOptions): Promise<orderStatusResponse> {
            const url = this.prepareSignedPath('/sapi/v1/convert/orderStatus',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Place limit order (USER_DATA) {@link https://developers.binance.com/docs/convert/trade/Place-Order}
         * 
         * @param {string} baseAsset - base asset (use the response fromIsBase from GET /sapi/v1/convert/exchangeInfo api to check which one is baseAsset)
         * @param {string} quoteAsset - quote asset
         * @param {number} limitPrice - Symbol limit price (from baseAsset to quoteAsset)
         * @param {ConvertSide} side - BUY or SELL
         * @param {ConvertExpiredType} expiredType - 1_D, 3_D, 7_D, 30_D (D means day)
         * @param {object} [options]
         * @param {number} [options.baseAmount] - Base asset amount. (One of baseAmount or quoteAmount is required)
         * @param {number} [options.quoteAmount] - Quote asset amount. (One of baseAmount or quoteAmount is required)
         * @param {WalletType} [options.walletType] - SPOT or FUNDING or SPOT_FUNDING. It is to use which type of assets. Default is SPOT.
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async placeLimitOrder(baseAsset: string, quoteAsset: string, limitPrice: number, side: ConvertSide, expiredType: ConvertExpiredType, options?: placeLimitOrderOptions): Promise<placeLimitOrderResponse> {
            validateRequiredParameters({ baseAsset, quoteAsset, limitPrice, side, expiredType });
            const url = this.prepareSignedPath('/sapi/v1/convert/limit/placeOrder',
                Object.assign(
                    options ? options : {},
                    {
                        baseAsset: baseAsset,
                        quoteAsset: quoteAsset,
                        limitPrice: limitPrice,
                        side: side,
                        expiredType: expiredType
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
         * Cancel limit order (USER_DATA) {@link https://developers.binance.com/docs/convert/trade/Cancel-Order}
         * 
         * @param {number} orderId - The orderId from placeOrder api
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async cancelLimitOrder(orderId: number, options?: cancelLimitOrderOptions): Promise<cancelLimitOrderResponse> {
            validateRequiredParameters({ orderId });
            const url = this.prepareSignedPath('/sapi/v1/convert/limit/cancelOrder',
                Object.assign(
                    options ? options : {},
                    {
                        orderId: orderId
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }

        /**
         * Query limit open orders (USER_DATA) {@link https://developers.binance.com/docs/convert/trade/Query-Order}
         * 
         * @param {object} [options]
         * @param {number} [options.recvWindow] - default 100, max 1000
         */
        async queryLimitOpenOrders(options?: queryLimitOpenOrdersOptions): Promise<queryLimitOpenOrdersResponse> {
            const url = this.prepareSignedPath('/sapi/v1/convert/limit/queryOpenOrders',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

  
        /**
        * Get Convert Trade History (USER_DATA) {@link https://developers.binance.com/docs/convert/trade/Get-Convert-Trade-History}
        *
        * @param {number} startTime - UTC timestamp in ms
        * @param {number} endTime - UTC timestamp in ms
        * @param {object} [options]
        * @param {number} [options.limit] - default 100, max 1000
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getConvertTradeHistory(startTime: number, endTime: number, options?: getConvertTradeHistoryOptions): Promise<getConvertTradeHistoryResponse> {
            validateRequiredParameters({ startTime, endTime });
            const url = this.prepareSignedPath('/sapi/v1/convert/tradeFlow',
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
    };
}
