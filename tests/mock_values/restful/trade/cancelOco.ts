import { OCOOrderStatus, OCOStatusType, RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.cancelOcoResponse = {
    'orderListId': 1929,
    'contingencyType': 'OCO',
    'listStatusType': OCOStatusType.ALL_DONE,
    'listOrderStatus': OCOOrderStatus.ALL_DONE,
    'listClientOrderId': 'C3wyj4WVEktd7u9aVBRXcN',
    'transactionTime': 1574040868128,
    'symbol': 'BNBBTC',
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }],
    'orderReports': [{
        'symbol': '',
        'origClientOrderId': '',
        'orderId': 0,
        'orderListId': 0,
        'clientOrderId': '',
        'price': '',
        'origQty': '',
        'executedQty': '',
        'cummulativeQuoteQty': '',
        'status': '',
        'timeInForce': '',
        'type': '',
        'side': '',
        'stopPrice': '',
        'selfTradePreventionMode': ''
    }]
};
