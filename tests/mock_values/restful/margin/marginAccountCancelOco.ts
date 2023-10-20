import {
    OCOOrderStatus,
    OCOStatusType,
    OrderStatus,
    RestMarginTypes,
    TimeInForce,
    OrderType,
    Side,
    SelfTradePreventionMode
} from '../../../../src/index';

export const mockResponse: RestMarginTypes.marginAccountCancelOcoResponse = {
    'orderListId': 0,
    'contingencyType': 'OCO',
    'listStatusType': OCOStatusType.ALL_DONE,
    'listOrderStatus': OCOOrderStatus.ALL_DONE,
    'listClientOrderId': 'C3wyj4WVEktd7u9aVBRXcN',
    'transactionTime': 1574040868128,
    'symbol': 'BNBUSDT',
    'isIsolated': false,
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }
    ],
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
        'status': OrderStatus.NEW,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.SELL,
        'stopPrice': '',
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    }]
};
