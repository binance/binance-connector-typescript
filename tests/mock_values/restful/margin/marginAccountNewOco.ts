import {
    OrderListOrderStatus,
    OrderListStatusType,
    OrderStatus,
    OrderType,
    RestMarginTypes,
    Side,
    SelfTradePreventionMode,
    TimeInForce
} from '../../../../src/index';

export const mockResponse: RestMarginTypes.marginAccountNewOcoResponse = {
    'orderListId': 0,
    'contingencyType': 'OCO',
    'listStatusType': OrderListStatusType.EXEC_STARTED,
    'listOrderStatus': OrderListOrderStatus.EXECUTING,
    'listClientOrderId': 'JYVpp3F0f5CAG15DhtrqLp',
    'transactionTime': 1563417480525,
    'symbol': 'LTCBTC',
    'marginBuyBorrowAmount': '5',
    'marginBuyBorrowAsset': 'BTC',
    'isIsolated': false,
    'orders': [{
        'symbol': '',
        'orderId': 0,
        'clientOrderId': ''
    }],
    'orderReports': [{
        'symbol': '',
        'orderId': 0,
        'orderListId': 0,
        'clientOrderId': '',
        'transactTime': 0,
        'price': '',
        'origQty': '',
        'executedQty': '',
        'cummulativeQuoteQty': '',
        'status': OrderStatus.NEW,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.SELL,
        'stopPrice': '',
        'selfTradePreventionMode': SelfTradePreventionMode.NONE
    }]
};
