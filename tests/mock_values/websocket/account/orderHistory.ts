import { OrderStatus, OrderType, SelfTradePreventionMode, Side, TimeInForce, WsAccountTypes } from '../../../../src/index';

export const mockOrderHistory: WsAccountTypes.orderHistoryResponse[] = [
    {
        'symbol': 'BTCUSDT',
        'orderId': 12569099453,
        'orderListId': -1,
        'clientOrderId': '4d96324ff9d44481926157',
        'price': '23416.10000000',
        'origQty': '0.00847000',
        'executedQty': '0.00847000',
        'cummulativeQuoteQty': '198.33521500',
        'status': OrderStatus.FILLED,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.SELL,
        'stopPrice': '0.00000000',
        'icebergQty': '0.00000000',
        'time': 1660801715639,
        'updateTime': 1660801717945,
        'isWorking': true,
        'workingTime': 1660801715639,
        'origQuoteOrderQty': '0.00000000',
        'selfTradePreventionMode': SelfTradePreventionMode.NONE,
        'preventedMatchId': 0,
        'preventedQuantity': '1.200000'
    }
];