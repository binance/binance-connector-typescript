import { OCOOrderStatus, OCOStatusType, RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.getAllOcoResponse[] = [
    {
        'orderListId': 29,
        'contingencyType': 'OCO',
        'listStatusType': OCOStatusType.EXEC_STARTED,
        'listOrderStatus': OCOOrderStatus.EXECUTING,
        'listClientOrderId': 'amEEAXryFzFwYF1FeRpUoZ',
        'transactionTime': 1565245913483,
        'symbol': 'LTCBTC',
        'isIsolated': true,
        'orders': [{
            'symbol': '',
            'orderId': 0,
            'clientOrderId': ''
        }]
    }
];
