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

export const mockNewOCOOrder: WsTradeTypes.newOCOOrder = {
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
    ],
    'orderReports': [
        {
            'symbol': 'BTCUSDT',
            'orderId': 12569138901,
            'orderListId': 1274512,
            'clientOrderId': 'BqtFCj5odMoWtSqGk2X9tU',
            'transactTime': 1660801713793,
            'price': '23410.00000000',
            'origQty': '0.00650000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.STOP_LOSS_LIMIT,
            'side': Side.SELL,
            'stopPrice': '23405.00000000',
            'workingTime': -1,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        },
        {
            'symbol': 'BTCUSDT',
            'orderId': 12569138902,
            'orderListId': 1274512,
            'clientOrderId': 'jLnZpj5enfMXTuhKB1d0us',
            'transactTime': 1660801713793,
            'price': '23420.00000000',
            'origQty': '0.00650000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT_MAKER,
            'side': Side.SELL,
            'workingTime': 1660801713793,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        }
    ]
};