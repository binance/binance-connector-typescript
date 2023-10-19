import { OrderStatus, OrderType, RestMarginTypes, SelfTradePreventionMode, Side, TimeInForce } from '../../../../src/index';

export const mockResponse: RestMarginTypes.marginAccountCancelAllOpenOrdersOnASymbolResponse[] = [
    {
        'symbol': 'BNBUSDT',
        'isIsolated': true,
        'origClientOrderId': 'E6APeyTJvkMvLMYMqu1KQ4',
        'orderId': 11,
        'orderListId': -1,
        'clientOrderId': 'pXLV6Hz6mprAcVYpVMTGgx',
        'price': '0.089853',
        'origQty': '0.178622',
        'executedQty': '0.000000',
        'cummulativeQuoteQty': '0.000000',
        'status': OrderStatus.CANCELED,
        'timeInForce': TimeInForce.GTC,
        'type': OrderType.LIMIT,
        'side': Side.BUY,
        'selfTradePreventionMode': SelfTradePreventionMode.NONE,
    }
];
