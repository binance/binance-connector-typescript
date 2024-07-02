import { OrderListOrderStatus, OrderListStatusType, RestTradeTypes } from '../../../../src/index';

export const mockGetOCOOpenOrders: RestTradeTypes.getOcoResponse[] = [
    {
        'orderListId': 0,
        'contingencyType': 'OCO',
        'listStatusType': OrderListStatusType.EXEC_STARTED,
        'listOrderStatus': OrderListOrderStatus.EXECUTING,
        'listClientOrderId': '08985fedd9ea2cf6b28996',
        'transactionTime': 1660801713793,
        'symbol': 'BTCUSDT',
        'orders': [
            {
                'symbol': 'BTCUSDT',
                'orderId': 4,
                'clientOrderId': 'CUhLgTXnX5n2c0gWiLpV4d'
            },
            {
                'symbol': 'BTCUSDT',
                'orderId': 5,
                'clientOrderId': '1ZqG7bBuYwaF4SU8CwnwHm'
            }
        ]
    }
];