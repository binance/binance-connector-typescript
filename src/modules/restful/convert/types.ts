import { ConvertOrderStatus, ValidTime, WalletType } from '../../enum';

export interface listAllConvertPairsOptions {
    fromAsset?: string;
    toAsset?: string;
    recvWindow?: number;
}

export interface listAllConvertPairsResponse {
    fromAsset: string;
    toAsset: string;
    fromAssetMinAmount: string;
    fromAssetMaxAmount: string;
    toAssetMinAmount: string;
    toAssetMaxAmount: string;
}

export interface getOrderQuantityPrecisionPerAssetOptions {
    recvWindow?: number;
}

export interface getOrderQuantityPrecisionPerAssetResponse {
    asset: string;
    fraction: number;
}

export interface sendQuoteRequestOptions {
    fromAmount?: number;
    toAmount?: number;
    walletType?: WalletType;
    validTime?: ValidTime;
    recvWindow?: number;
}

export interface sendQuoteRequestResponse {
    quoteId: string;
    ratio: string;
    inverseRatio: string;
    validTimestamp: number;
    toAmount: string;
    fromAmount: string;
}

export interface acceptQuoteOptions {
    recvWindow?: number;
}

export interface acceptQuoteResponse {
    orderId: string;
    createTime: number;
    orderStatus: ConvertOrderStatus;
}

export interface orderStatusOptions {
    orderId?: string;
    quoteId?: string;
    recvWindow?: number;
}

export interface orderStatusResponse {
    orderId: bigint;
    orderStatus: ConvertOrderStatus;
    fromAsset: string;
    fromAmount: string;
    toAsset: string;
    toAmount: string;
    ratio: string;
    inverseRatio: string;
    createTime: number;
}

export interface getConvertTradeHistoryOptions {
    limit?: number;
    recvWindow?: number;
}

export interface getConvertTradeHistoryResponse {
    list: getConvertTradeHistoryList[];
    startTime: number;
    endTime: number;
    limit: number;
    moreData: boolean;
}

export interface getConvertTradeHistoryList {
    quoteId: string;
    orderId: bigint;
    orderStatus: string;
    fromAsset: string;
    fromAmount: string;
    toAsset: string;
    toAmount: string;
    ratio: string;
    inverseRatio: string;
    createTime: number;
}

export interface queryLimitOpenOrdersOptions {
    recvWindow?: number;
}

export interface queryLimitOpenOrdersResponse {
    list: queryLimitOpenOrdersList[];
}

export interface queryLimitOpenOrdersList {
    quoteId: string;
    orderId: number;
    orderStatus: ConvertOrderStatus;
    fromAsset: string;
    fromAmount: string;
    toAsset: string;
    toAmount: string;
    ratio: string;
    inverseRatio: string;
    createTime: number;
    expiredTimestamp: number;
}

export interface placeLimitOrderOptions {
    baseAmount?: number;
    quoteAmount?: number;
    walletType?: WalletType;
    recvWindow?: number;
}

export interface placeLimitOrderResponse {
    orderId: number;
    status: string;
}

export interface cancelLimitOrderOptions {
    recvWindow?: number;
}

export interface cancelLimitOrderResponse {
    orderId: number;
    status: string;
}
