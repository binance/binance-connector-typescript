import { OrderStatus, OrderType, RestMarginTypes, Side, TimeInForce } from '../../../../src/index';

export const mockResponse: RestMarginTypes.marginAccountCancelOrderResponse = {
    'symbol': 'LTCBTC',
    'orderId': 28,
    'origClientOrderId': 'msXkySR3u5uYwpvRMFsi3u',
    'clientOrderId': '6gCrw2kRUAF9CvJDGP16IP',
    'price': '1.00000000',
    'origQty': '10.00000000',
    'executedQty': '8.00000000',
    'cummulativeQuoteQty': '8.00000000',
    'status': OrderStatus.CANCELED,
    'timeInForce': TimeInForce.GTC,
    'type': OrderType.LIMIT,
    'side': Side.SELL,
    'isIsolated': false,
};
