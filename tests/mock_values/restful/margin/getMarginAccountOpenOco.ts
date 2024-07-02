import { OrderListOrderStatus, OrderListStatusType, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getMarginAccountOpenOcoResponse[] = [
    {
        'orderListId': 31,
        'contingencyType': 'OCO',
        'listStatusType': OrderListStatusType.EXEC_STARTED,
        'listOrderStatus': OrderListOrderStatus.EXECUTING,
        'listClientOrderId': 'wuB13fmulKj3YjdqWEcsnp',
        'transactionTime': 1565246080644,
        'symbol': 'LTCBTC',
        'isIsolated': false,
        'orders': [{
            'symbol': '',
            'orderId': 0,
            'clientOrderId': ''
        }
        ]
    }
];
