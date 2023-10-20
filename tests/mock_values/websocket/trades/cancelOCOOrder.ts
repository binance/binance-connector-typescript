import {
    OCOOrderStatus,
    OCOStatusType,
    OrderStatus,
    OrderType,
    SelfTradePreventionMode,
    Side,
    TimeInForce,
    WsTradeTypes
} from '../../../../src/index';

export const mockCancelOCOOrder: WsTradeTypes.cancelOCOOrder = {
    'orderListId': 1274512,
    'contingencyType': 'OCO',
    'listStatusType': OCOStatusType.ALL_DONE,
    'listOrderStatus': OCOOrderStatus.ALL_DONE,
    'listClientOrderId': '6023531d7edaad348f5aff',
    'transactionTime': 1660801720215,
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
    ],
    'orderReports': [
        {
            'symbol': 'BTCUSDT',
            'orderId': 12569138901,
            'orderListId': 1274512,
            'clientOrderId': 'BqtFCj5odMoWtSqGk2X9tU',
            'transactTime': 1660801720215,
            'price': '23410.00000000',
            'origQty': '0.00650000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.CANCELED,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.STOP_LOSS_LIMIT,
            'side': Side.SELL,
            'stopPrice': '23405.00000000',
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        },
        {
            'symbol': 'BTCUSDT',
            'orderId': 12569138902,
            'orderListId': 1274512,
            'clientOrderId': 'jLnZpj5enfMXTuhKB1d0us',
            'price': '23420.00000000',
            'origQty': '0.00650000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.CANCELED,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT_MAKER,
            'side': Side.SELL,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        }
    ]
};