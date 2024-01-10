import { SelfTradePreventionMode } from '../../../enum';
import { RestTradeTypes } from '../../../../index';
import { sendMessageOptions } from '../../../../setters/types';

export interface accountOptions extends sendMessageOptions {
    recvWindow?: number;
}

export interface orderLimitOptions extends sendMessageOptions {
    recvWindow: number;
}

export interface orderHistoryOptions extends sendMessageOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface ocoOrderHistoryOptions extends sendMessageOptions {
    fromId?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
}

export interface myTradesOptions extends sendMessageOptions {
    orderId?: number;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface preventedMatchesOptions extends sendMessageOptions {
    preventedMatchId?: number;
    orderId?: number;
    fromPreventedMatchId?: number;
    limit?: number;
    recvWindow?: number;
}

export interface accountAllocationOptions extends sendMessageOptions {
    startTime?: number;
    endTime?: number;
    fromAllocationId?: number;
    limit?: number;
    orderId?: number;
    recvWindow?: number;
}

export interface accountAllocationResponse extends sendMessageOptions {
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

export interface orderHistoryResponse extends RestTradeTypes.getOrderResponse, sendMessageOptions {
    preventedMatchId: number,
    preventedQuantity: string
}

export interface preventedMatchesResponse extends sendMessageOptions {
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
