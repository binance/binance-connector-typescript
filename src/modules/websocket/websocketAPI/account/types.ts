import { SelfTradePreventionMode } from '../../../enum';
import { RestTradeTypes } from '../../../../types';

export interface accountOptions {
    recvWindow?: number;
}

export interface orderLimitOptions {
    recvWindow: number;
}

export interface orderHistoryOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface ocoOrderHistoryOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface myTradesOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface preventedMatchesOptions {
    preventedMatchId?: number;
    orderId?: number;
    fromPreventedMatchId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface accountAllocationOptions {
    startTime?: number;
    endTime?: number;
    fromAllocationId?: number;
    limit?: number;
    orderId?: number;
    recvWindow?: number;
}

export interface accountAllocationResponse {
    symbol: string,
    allocationId: number,
    allocationType: string,
    orderId: number,
    orderListId: number,
    price: string,
    qty: string,
    quoteQty: string,
    commission: string,
    commissionAsset: string,
    time: number,
    isBuyer: boolean,
    isMaker: boolean,
    isAllocator: boolean
}

export interface orderHistoryResponse extends RestTradeTypes.getOrderResponse {
    preventedMatchId: number,
    preventedQuantity: string
}

export interface preventedMatchesResponse {
    symbol: string,
    preventedMatchId: number,
    takerOrderId: number,
    makerOrderId: number,
    tradeGroupId: number,
    selfTradePreventionMode: SelfTradePreventionMode,
    price: string,
    makerPreventedQuantity: string,
    transactTime: number
}
