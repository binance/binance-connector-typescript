import { OrderListOrderStatus, OrderListStatusType, RestTradeTypes } from '../../../../src/index';

export const mockGetOCOOrder: RestTradeTypes.getOcoResponse = {
    'orderListId': 1274512,
    'contingencyType': 'OCO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': '08985fedd9ea2cf6b28996',
    'transactionTime': 1660801713793,
    'symbol': 'BTCUSDT',
    'orders': [
        {
            'symbol': 'BTCUSDT',
            'orderId': 12569138901,
            'clientOrderId': 'BqtFCj5odMoWtSqGk2X9tU'
        },
        {
            'symbol': 'BTCUSDT',
            'orderId': 12569138902,
            'clientOrderId': 'jLnZpj5enfMXTuhKB1d0us'
        }
    ]
};