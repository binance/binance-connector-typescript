import { OrderListOrderStatus, OrderListStatusType, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getMarginAccountOcoResponse = {
    'orderListId': 27,
    'contingencyType': 'OCO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'h2USkA5YQpaXHPIrkd96xE',
    'transactionTime': 1565245656253,
    'symbol': 'LTCBTC',
    'isIsolated': false,
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }]
};
