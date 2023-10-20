import { OCOOrderStatus, OCOStatusType, RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.getOpenOcoResponse[] = [
    {
        'orderListId': 31,
        'contingencyType': 'OCO',
        'listStatusType': OCOStatusType.EXEC_STARTED,
        'listOrderStatus': OCOOrderStatus.EXECUTING,
        'listClientOrderId': 'wuB13fmulKj3YjdqWEcsnp',
        'transactionTime': 1565246080644,
        'symbol': 'LTCBTC',
        'orders': [{
            'symbol': '',
            'orderId': 0,
            'clientOrderId': ''
        }]
    }
];
