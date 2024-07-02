import { OrderListOrderStatus, OrderListStatusType, OrderStatus, OrderType, RestTradeTypes, SelfTradePreventionMode, Side, TimeInForce } from '../../../../src/index';

export const mockResponse: RestTradeTypes.newOtocoResponse = {
    'orderListId': 1,
    'contingencyType': 'OTO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'RumwQpBaDctlUu5jyG5rs0',
    'transactionTime': 1712291372842,
    'symbol': 'BNBUSDT',
    'orders': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 6,
            'clientOrderId': 'fM9Y4m23IFJVCQmIrlUmMK'
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 7,
            'clientOrderId': '6pcQbFIzTXGZQ1e2MkGDq4'
        }
    ],
    'orderReports': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 6,
            'orderListId': 1,
            'clientOrderId': 'fM9Y4m23IFJVCQmIrlUmMK',
            'transactTime': 1712291372842,
            'price': '400.00000000',
            'origQty': '1.00000000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT,
            'side': Side.BUY,
            'workingTime': 1719549925847,
            'selfTradePreventionMode': SelfTradePreventionMode.EXPIRE_MAKER
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 7,
            'orderListId': 1,
            'clientOrderId': '6pcQbFIzTXGZQ1e2MkGDq4',
            'transactTime': 1712291372842,
            'price': '400.00000000',
            'origQty': '1.00000000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.PENDING_NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT,
            'side': Side.BUY,
            'workingTime': -1,
            'selfTradePreventionMode': SelfTradePreventionMode.EXPIRE_MAKER
        }
    ]
};