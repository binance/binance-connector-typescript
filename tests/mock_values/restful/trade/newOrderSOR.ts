import { OrderStatus, OrderType, RestTradeTypes, SelfTradePreventionMode, Side, TimeInForce, WorkingFloor } from '../../../../src/index';

export const mockResponse: RestTradeTypes.newOrderSORResponse = {
    'symbol': 'BTCUSDT',
    'orderId': 2,
    'orderListId': -1,
    'clientOrderId': 'sBI1KM6nNtOfj5tccZSKly',
    'transactTime': 1689149087774,
    'price': '31000.00000000',
    'origQty': '0.50000000',
    'executedQty': '0.50000000',
    'cummulativeQuoteQty': '14000.00000000',
    'status': OrderStatus.FILLED,
    'timeInForce': TimeInForce.GTC,
    'type': OrderType.LIMIT,
    'side': Side.BUY,
    'workingTime': 1689149087774,
    'fills': [
        {
            'price': '28000.00000000',
            'qty': '0.50000000',
            'commission': '0.00000000',
            'commissionAsset': 'BTC',
            'tradeId': -1
        }
    ],
    'workingFloor': WorkingFloor.SOR,              
    'selfTradePreventionMode': SelfTradePreventionMode.NONE,
    'usedSor': true
};