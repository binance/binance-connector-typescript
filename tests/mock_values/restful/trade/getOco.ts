import { OrderListOrderStatus, OrderListStatusType, RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.getOcoResponse = {
    'orderListId': 27,
    'contingencyType': 'OCO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'h2USkA5YQpaXHPIrkd96xE',
    'transactionTime': 1565245656253,
    'symbol': 'LTCBTC',
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }]
};
