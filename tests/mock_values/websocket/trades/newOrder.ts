import { OrderStatus, OrderType, RestTradeTypes, SelfTradePreventionMode, Side, TimeInForce } from '../../../../src/types';

export const mockNewOrder: RestTradeTypes.newOrderResponse = {
    'symbol': 'BTCUSDT',
    'orderId': 12569099453,
    'orderListId': -1,
    'clientOrderId': '4d96324ff9d44481926157ec08158a40',
    'transactTime': 1660801715793,
    'price': '23416.10000000',
    'origQty': '0.00847000',
    'executedQty': '0.00847000',
    'cummulativeQuoteQty': '198.33521500',
    'status': OrderStatus.FILLED,
    'timeInForce': TimeInForce.GTC,
    'type': OrderType.LIMIT,
    'side': Side.SELL,
    'workingTime': 1660801715793,
    'fills': [
        {
            'price': '23416.10000000',
            'qty': '0.00635000',
            'commission': '0.000000',
            'commissionAsset': 'BNB',
            'tradeId': 1650422481
        },
        {
            'price': '23416.50000000',
            'qty': '0.00212000',
            'commission': '0.000000',
            'commissionAsset': 'BNB',
            'tradeId': 1650422482
        }
    ],
    'selfTradePreventionMode': SelfTradePreventionMode.NONE
};