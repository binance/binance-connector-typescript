import {
    CancelResult,
    NewOrderResult,
    OrderStatus,
    OrderType,
    RestTradeTypes,
    SelfTradePreventionMode,
    Side,
    TimeInForce
} from '../../../../src/types';

export const mockResponse: RestTradeTypes.cancelAnExistingOrderAndSendANewOrderResponse = {
    'cancelResult': CancelResult.SUCCESS,
    'newOrderResult': NewOrderResult.SUCCESS,
    'cancelResponse': {
        'symbol': 'BTCUSDT',
        'origClientOrderId': 'DnLo3vTAQcjha43lAZhZ0y',
        'orderId': 9,
        'orderListId': -1,
        'clientOrderId': 'osxN3JXAtJvKvCqGeMWMVR',
        'price': '0.01000000',
        'origQty': '0.000100',
        'executedQty': '0.00000000',
        'cummulativeQuoteQty': '0.00000000',
        'status': OrderStatus.NEW,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.BUY,
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    },
    'newOrderResponse': {
        'symbol': 'BTCUSDT',
        'orderId': 10,
        'orderListId': -1,
        'clientOrderId': 'wOceeeOzNORyLiQfw7jd8S',
        'transactTime': 1652928801803,
        'price': '0.02000000',
        'origQty': '0.040000',
        'executedQty': '0.00000000',
        'cummulativeQuoteQty': '0.00000000',
        'status': OrderStatus.NEW,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.BUY,
        'workingTime': 1669277163808,
        'fills': [],
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    }
};
