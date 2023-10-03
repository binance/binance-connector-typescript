import { OCOOrderStatus, OCOStatusType, RestTradeTypes } from '../../../../src/types';

export const mockOcoOrderHistory: RestTradeTypes.getOcoResponse[] = [
    {
        'orderListId': 1274512,
        'contingencyType': 'OCO',
        'listStatusType': OCOStatusType.EXEC_STARTED,
        'listOrderStatus': OCOOrderStatus.EXECUTING,
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
    }
];