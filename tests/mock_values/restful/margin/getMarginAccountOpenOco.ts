import { OCOOrderStatus, OCOStatusType, RestMarginTypes } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getMarginAccountOpenOcoResponse[] = [
    {
        'orderListId': 31,
        'contingencyType': 'OCO',
        'listStatusType': OCOStatusType.EXEC_STARTED,
        'listOrderStatus': OCOOrderStatus.EXECUTING,
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
