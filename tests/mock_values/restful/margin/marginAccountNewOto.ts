import {
    OrderListOrderStatus,
    OrderListStatusType,
    OrderStatus,
    OrderType,
    RestMarginTypes,
    SelfTradePreventionMode,
    Side,
    TimeInForce
} from '../../../../src/index';

export const mockResponse: RestMarginTypes.marginAccountNewOtoResponse = {
    'orderListId': 13551,
    'contingencyType': 'OTO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'JDuOrsu0Ge8GTyvx8J7VTD',
    'transactionTime': 1725521998054,
    'symbol': 'BTCUSDT',
    'isIsolated': false,
    'orders': [
        {
            'symbol': 'BTCUSDT',
            'orderId': 29896699,
            'clientOrderId': 'y8RB6tQEMuHUXybqbtzTxk'
        },
        {
            'symbol': 'BTCUSDT',
            'orderId': 29896700,
            'clientOrderId': 'dKQEdh5HhXb7Lpp85jz1dQ'
        }
    ],
    'orderReports': [
        {
            'symbol': 'BTCUSDT',
            'orderId': 29896699,
            'orderListId': 13551,
            'clientOrderId': 'y8RB6tQEMuHUXybqbtzTxk',
            'transactTime': 1725521998054,
            'price': '80000.00000000',
            'origQty': '0.02000000',
            'executedQty': '0',
            'cummulativeQuoteQty': '0',
            'status': OrderStatus.NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT,
            'side': Side.SELL,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        },
        {
            'symbol': 'BTCUSDT',
            'orderId': 29896700,
            'orderListId': 13551,
            'clientOrderId': 'dKQEdh5HhXb7Lpp85jz1dQ',
            'transactTime': 1725521998054,
            'price': '50000.00000000',
            'origQty': '0.02000000',
            'executedQty': '0',
            'cummulativeQuoteQty': '0',
            'status': OrderStatus.PENDING_NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT,
            'side': Side.BUY,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        }
    ]
};
