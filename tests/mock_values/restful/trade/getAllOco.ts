import { OrderListOrderStatus, OrderListStatusType, RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.getAllOcoResponse[] = [
    {
        'orderListId': 29,
        'contingencyType': 'OCO',
        'listStatusType': OrderListStatusType.EXEC_STARTED,
        'listOrderStatus': OrderListOrderStatus.EXECUTING,
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
