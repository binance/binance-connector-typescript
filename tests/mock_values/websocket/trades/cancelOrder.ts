import { OrderStatus, OrderType, SelfTradePreventionMode, Side, TimeInForce, WsTradeTypes } from '../../../../src/index';

export const mockCancelOrder: WsTradeTypes.cancelOrder = {
    'symbol': 'BTCUSDT',
    'origClientOrderId': '4d96324ff9d44481926157',
    'orderId': 12569099453,
    'orderListId': -1,
    'clientOrderId': '91fe37ce9e69c90d6358c0',
    'transactTime': 1684804350068,
    'price': '23416.10000000',
    'origQty': '0.00847000',
    'executedQty': '0.00001000',
    'cummulativeQuoteQty': '0.23416100',
    'status': OrderStatus.CANCELED,
    'timeInForce': TimeInForce.GTC,
    'type': OrderType.LIMIT,
    'side': Side.SELL,
    'selfTradePreventionMode': SelfTradePreventionMode.NONE
};