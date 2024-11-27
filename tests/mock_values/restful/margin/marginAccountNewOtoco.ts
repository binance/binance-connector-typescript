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

export const mockResponse: RestMarginTypes.marginAccountNewOtocoResponse = {
    'orderListId': 13509,
    'contingencyType': 'OTO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'u2AUo48LLef5qVenRtwJZy',
    'transactionTime': 1725521881300,
    'symbol': 'BNBUSDT',
    'isIsolated': false,
    'orders': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 28282534,
            'clientOrderId': 'IfYDxvrZI4kiyqYpRH13iI'
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 28282535,
            'clientOrderId': '0HCSsPRxVfW8BkTUy9z4np'
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 28282536,
            'clientOrderId': 'dypsgdxWnLY75kwT930cbD'
        }
    ],
    'orderReports': [
        {
            'symbol': 'BNBUSDT',
            'orderId': 28282534,
            'orderListId': 13509,
            'clientOrderId': 'IfYDxvrZI4kiyqYpRH13iI',
            'transactTime': 1725521881300,
            'price': '300.00000000',
            'origQty': '1.00000000',
            'executedQty': '0',
            'cummulativeQuoteQty': '0',
            'status': OrderStatus.NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT,
            'side': Side.BUY,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 28282535,
            'orderListId': 13509,
            'clientOrderId': '0HCSsPRxVfW8BkTUy9z4np',
            'transactTime': 1725521881300,
            'price': '0E-8',
            'origQty': '1.00000000',
            'executedQty': '0',
            'cummulativeQuoteQty': '0',
            'status': OrderStatus.PENDING_NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.STOP_LOSS,
            'side': Side.SELL,
            'stopPrice': '299.00000000',
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        },
        {
            'symbol': 'BNBUSDT',
            'orderId': 28282536,
            'orderListId': 13509,
            'clientOrderId': 'dypsgdxWnLY75kwT930cbD',
            'transactTime': 1725521881300,
            'price': '301.00000000',
            'origQty': '1.00000000',
            'executedQty': '0',
            'cummulativeQuoteQty': '0',
            'status': OrderStatus.PENDING_NEW,
            'timeInForce': TimeInForce.GTC,
            'type': OrderType.LIMIT_MAKER,
            'side': Side.SELL,
            'selfTradePreventionMode': SelfTradePreventionMode.NONE
        }
    ]
};
