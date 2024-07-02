import { OrderListOrderStatus, OrderListStatusType, OrderStatus, OrderType, RestTradeTypes, SelfTradePreventionMode, Side, TimeInForce } from '../../../../src/index';

export const mockResponse: RestTradeTypes.newOtoResponse = {
    'orderListId': 1,
    'contingencyType': 'OTO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'qMLzHtuPraTiceVR0Tg9Od',
    'transactionTime': 1719549925847,
    'symbol': 'BNBUSDT',
    'orders': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 2,
            'clientOrderId': 'qJzbCBHWPS0twmER2i3jT5'
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 3,
            'clientOrderId': 'bR2sM0zgxLrUZyWMM6neJc'
        }
    ],
    'orderReports': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 2,
            'orderListId': 1,
            'clientOrderId': 'qJzbCBHWPS0twmER2i3jT5',
            'transactTime': 1719549925847,
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
            'orderId': 3,
            'orderListId': 1,
            'clientOrderId': 'bR2sM0zgxLrUZyWMM6neJc',
            'transactTime': 1719549925847,
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