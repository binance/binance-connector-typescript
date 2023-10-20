import {
    CancelResult,
    NewOrderResult,
    OrderStatus,
    OrderType,
    SelfTradePreventionMode,
    Side,
    TimeInForce,
    WsTradeTypes
} from '../../../../src/index';


export const mockCancelReplaceOrder: WsTradeTypes.CancelReplaceOrder = {
    'cancelResult': CancelResult.SUCCESS,
    'newOrderResult': NewOrderResult.SUCCESS,
    'cancelResponse': {
        'symbol': 'BTCUSDT',
        'origClientOrderId': '4d96324ff9d44481926157',
        'orderId': 125690984230,
        'orderListId': -1,
        'clientOrderId': '91fe37ce9e69c90d6358c0',
        'transactTime': 1684804350068,
        'price': '23450.00000000',
        'origQty': '0.00847000',
        'executedQty': '0.00001000',
        'cummulativeQuoteQty': '0.23450000',
        'status': OrderStatus.CANCELED,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.SELL,
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    },
    'newOrderResponse': {
        'symbol': 'BTCUSDT',
        'orderId': 12569099453,
        'orderListId': -1,
        'clientOrderId': 'bX5wROblo6YeDwa9iTLeyY',
        'transactTime': 1660813156959,
        'price': '23416.10000000',
        'origQty': '0.00847000',
        'executedQty': '0.00000000',
        'cummulativeQuoteQty': '0.00000000',
        'status': OrderStatus.NEW,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.SELL,
        'workingTime': 1660813156959,
        'fills': [],
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    }
};