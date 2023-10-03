import { OrderStatus, OrderType, SelfTradePreventionMode, RestMarginTypes, Side, TimeInForce } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getMarginAccountOrderResponse = {
    'clientOrderId': 'ZwfQzuDIGpceVhKW5DvCmO',
    'cummulativeQuoteQty': '0.00000000',
    'executedQty': '0.00000000',
    'icebergQty': '0.00000000',
    'isWorking': true,
    'orderId': 213205622,
    'origQty': '0.30000000',
    'price': '0.00493630',
    'side': Side.SELL,
    'status': OrderStatus.NEW,
    'stopPrice': '0.00000000',
    'symbol': 'BNBBTC',
    'isIsolated': true,
    'time': 1562133008725,
    'timeInForce': TimeInForce.GTC,
    'type': OrderType.LIMIT,
    'updateTime': 1562133008725,
    'selfTradePreventionMode': SelfTradePreventionMode.NONE
};
