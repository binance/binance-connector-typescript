import {
    OCOOrderStatus,
    OCOStatusType,
    OrderStatus,
    OrderType,
    SelfTradePreventionMode,
    Side,
    TimeInForce,
    WsTradeTypes
} from '../../../../src/types';

export const mockCancelOpenOrders: (WsTradeTypes.cancelOpenOrder | WsTradeTypes.cancelOpenOCOOrder)[] = [
    {
        'symbol': 'BTCUSDT',
        'origClientOrderId': '4d96324ff9d44481926157',
        'orderId': 12569099453,
        'orderListId': -1,
        'clientOrderId': '91fe37ce9e69c90d6358c0',
        'transactTime': 1684804350068,
        'price': '23416.10000000',
        'origQty': '0.00847000',
        'executedQty': '0.00001000',
        'cummulativeQuoteQty': '0.23416100',
        'status': OrderStatus.CANCELED,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.SELL,
        'stopPrice': '0.00000000',
        'icebergQty': '0.00000000',
        'strategyId': 37463720,
        'strategyType': 1000000,
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    },
    {
        'orderListId': 19431,
        'contingencyType': 'OCO',
        'listStatusType': OCOStatusType.ALL_DONE,
        'listOrderStatus': OCOOrderStatus.ALL_DONE,
        'listClientOrderId': 'iuVNVJYYrByz6C4yGOPPK0',
        'transactionTime': 1660803702431,
        'symbol': 'BTCUSDT',
        'orders': [
            {
                'symbol': 'BTCUSDT',
                'orderId': 12569099453,
                'clientOrderId': 'bX5wROblo6YeDwa9iTLeyY'
            },
            {
                'symbol': 'BTCUSDT',
                'orderId': 12569099454,
                'clientOrderId': 'Tnu2IP0J5Y4mxw3IATBfmW'
            }
        ],
        'orderReports': [
            {
                'symbol': 'BTCUSDT',
                'origClientOrderId': 'bX5wROblo6YeDwa9iTLeyY',
                'orderId': 12569099453,
                'orderListId': 19431,
                'clientOrderId': 'OFFXQtxVFZ6Nbcg4PgE2DA',
                'transactTime': 1684804350068,
                'price': '23450.50000000',
                'origQty': '0.00850000',
                'executedQty': '0.00000000',
                'cummulativeQuoteQty': '0.00000000',
                'status': OrderStatus.CANCELED,
                'timeInForce': TimeInForce.GTC,
                'type': OrderType.STOP_LOSS_LIMIT,
                'side': Side.BUY,
                'stopPrice': '23430.00000000',
                'selfTradePreventionMode': SelfTradePreventionMode.NONE
            },
            {
                'symbol': 'BTCUSDT',
                'origClientOrderId': 'Tnu2IP0J5Y4mxw3IATBfmW',
                'orderId': 12569099454,
                'orderListId': 19431,
                'clientOrderId': 'OFFXQtxVFZ6Nbcg4PgE2DA',
                'transactTime': 1684804350068,
                'price': '23400.00000000',
                'origQty': '0.00850000',
                'executedQty': '0.00000000',
                'cummulativeQuoteQty': '0.00000000',
                'status': OrderStatus.CANCELED,
                'timeInForce': TimeInForce.GTC,
                'type': OrderType.LIMIT_MAKER,
                'side': Side.SELL,
                'selfTradePreventionMode': SelfTradePreventionMode.NONE
            }
        ]
    }
];