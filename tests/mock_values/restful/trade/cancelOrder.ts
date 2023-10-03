import { OrderStatus, OrderType, RestTradeTypes, SelfTradePreventionMode, Side, TimeInForce } from '../../../../src/types';

export const mockResponse: RestTradeTypes.cancelOrderResponse = {
    'symbol': 'BNBBTC',
    'origClientOrderId': 'msXkySR3u5uYwpvRMFsi3u',
    'orderId': 28,
    'orderListId': -1,
    'clientOrderId': '6gCrw2kRUAF9CvJDGP16IP',
    'price': '1.00000000',
    'origQty': '10.00000000',
    'executedQty': '10.00000000',
    'cummulativeQuoteQty': '10.00000000',
    'status': OrderStatus.NEW,
    'timeInForce': TimeInForce.GTC,
    'type': OrderType.LIMIT,
    'side': Side.BUY,
    'selfTradePreventionMode': SelfTradePreventionMode.NONE
};
