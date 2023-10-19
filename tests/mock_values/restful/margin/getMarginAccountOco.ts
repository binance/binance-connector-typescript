import { OCOOrderStatus, OCOStatusType, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getMarginAccountOcoResponse = {
    'orderListId': 27,
    'contingencyType': 'OCO',
    'listStatusType': OCOStatusType.EXEC_STARTED,
    'listOrderStatus': OCOOrderStatus.EXECUTING,
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
