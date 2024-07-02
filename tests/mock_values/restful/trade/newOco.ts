import { OrderListOrderStatus, OrderListStatusType, RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.newOcoResponse = {
    'orderListId': 0,
    'contingencyType': 'OCO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'JYVpp3F0f5CAG15DhtrqLp',
    'transactionTime': 1563417480525,
    'symbol': 'LTCBTC',
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }
    ],
    'orderReports': [{
        'symbol': '',
        'orderId': 0,
        'orderListId': 0,
        'clientOrderId': '',
        'transactTime': 0,
        'price': '',
        'origQty': '',
        'executedQty': '',
        'cummulativeQuoteQty': '',
        'status': '',
        'timeInForce': '',
        'type': '',
        'side': '',
        'stopPrice': '',
        'workingTime': '',
        'icebergQty': '',
        'selfTradePreventionMode': ''
    }
    ]
};
