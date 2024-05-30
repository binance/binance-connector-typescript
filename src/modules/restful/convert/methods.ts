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
import { ConvertExpiredType, ConvertSide } from '../../enum';

export interface ConvertMethods {
    listAllConvertPairs(options?: listAllConvertPairsOptions): Promise<listAllConvertPairsResponse[]>;
    getOrderQuantityPrecisionPerAsset(options?: getOrderQuantityPrecisionPerAssetOptions): Promise<getOrderQuantityPrecisionPerAssetResponse[]>;
    sendQuoteRequest(fromAsset: string, toAsset: string, options?: sendQuoteRequestOptions): Promise<sendQuoteRequestResponse>;
    acceptQuote(quoteId: string, options?: acceptQuoteOptions): Promise<acceptQuoteResponse>;
    orderStatus(options?: orderStatusOptions): Promise<orderStatusResponse>;
    placeLimitOrder(baseAsset: string, quoteAsset: string, limitPrice: number, side: ConvertSide, expiredType: ConvertExpiredType, options?: placeLimitOrderOptions): Promise<placeLimitOrderResponse>;
    cancelLimitOrder(orderId: number, options?: cancelLimitOrderOptions): Promise<cancelLimitOrderResponse>;
    queryLimitOpenOrders(options?: queryLimitOpenOrdersOptions): Promise<queryLimitOpenOrdersResponse>;
    getConvertTradeHistory(startTime: number, endTime: number, options?: getConvertTradeHistoryOptions): Promise<getConvertTradeHistoryResponse>;
}
