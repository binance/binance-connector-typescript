import { OCOOrderStatus, OCOStatusType, RestTradeTypes } from '../../../../src/types';

export const mockResponse: RestTradeTypes.getOcoResponse = {
    'orderListId': 27,
    'contingencyType': 'OCO',
    'listStatusType': OCOStatusType.EXEC_STARTED,
    'listOrderStatus': OCOOrderStatus.EXECUTING,
    'listClientOrderId': 'h2USkA5YQpaXHPIrkd96xE',
    'transactionTime': 1565245656253,
    'symbol': 'LTCBTC',
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }]
};
