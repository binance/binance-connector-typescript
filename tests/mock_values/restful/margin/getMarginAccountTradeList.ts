import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getMarginAccountTradeListResponse[] = [
    {
        'commission': '0.00006000',
        'commissionAsset': 'BTC',
        'id': 28,
        'isBestMatch': true,
        'isBuyer': true,
        'isMaker': true,
        'orderId': 28,
        'price': '0.02000000',
        'qty': '1.02000000',
        'symbol': 'BNBBTC',
        'isIsolated': false,
        'time': 1507725176595
    }
];
