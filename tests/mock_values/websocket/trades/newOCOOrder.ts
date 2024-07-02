import {
    OrderListOrderStatus,
    OrderListStatusType,
    OrderStatus,
    OrderType,
    SelfTradePreventionMode,
    Side,
    TimeInForce,
    WsTradeTypes
} from '../../../../src/index';

export const mockNewOCOOrder: WsTradeTypes.newOCOOrder = {
    'orderListId': 1274512,
    'contingencyType': 'OCO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': '08985fedd9ea2cf6b28996',
    'transactionTime': 1660801713793,
    'symbol': 'BNBUSDT',
    'orders': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 12569138901,
            'clientOrderId': 'BqtFCj5odMoWtSqGk2X9tU'
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 12569138902,
            'clientOrderId': 'jLnZpj5enfMXTuhKB1d0us'
        }
    ],
    'orderReports': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 12569138901,
            'orderListId': 1274512,
            'clientOrderId': 'BqtFCj5odMoWtSqGk2X9tU',
            'transactTime': 1660801713793,
            'price': '400.00000000',
            'origQty': '1.00000000',
            'executedQty': '0.00000000',
            'cummulativeQuoteQty': '0.00000000',
            'status': OrderStatus.NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.STOP_LOSS_LIMIT,
            'side': Side.BUY,
            'stopPrice': '23405.00000000',
            'workingTime': -1,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 12569138902,
            'orderListId': 1274512,
            'clientOrderId': 'jLnZpj5enfMXTuhKB1d0us',
            'transactTime': 1660801713793,
            'price': '395.00000000',
            'origQty': '1.00000000',
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