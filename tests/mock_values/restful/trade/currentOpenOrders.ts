import { OrderStatus, OrderType, RestTradeTypes, SelfTradePreventionMode, Side, TimeInForce } from '../../../../src/index';

export const mockResponse: RestTradeTypes.currentOpenOrdersResponse[] = [
    {
        'symbol': 'LTCBTC',
        'orderId': 1,
        'orderListId': -1,
        'clientOrderId': 'myOrder1',
        'price': '0.1',
        'origQty': '1.0',
        'executedQty': '0.0',
        'cummulativeQuoteQty': '0.0',
        'status': OrderStatus.NEW,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.BUY,
        'stopPrice': '0.0',
        'icebergQty': '0.0',
        'time': 1499827319559,
        'updateTime': 1499827319559,
        'isWorking': true,
        'workingTime': 1499827319559,
        'origQuoteOrderQty': '0.00000000',
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    }
];
