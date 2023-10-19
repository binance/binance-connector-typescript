import { RestTradeTypes } from '../../../../src/index';

export const mockResponse: RestTradeTypes.accountTradeListResponse[] = [
    {
        'symbol': 'BNBBTC',
        'id': 28457,
        'orderId': 100234,
        'orderListId': -1,
        'price': '4.00000100',
        'qty': '12.00000000',
        'quoteQty': '48.000012',
        'commission': '10.10000000',
        'commissionAsset': 'BNB',
        'time': 1499865549590,
        'isBuyer': false,
        'isMaker': false,
        'isBestMatch': true
    }
];
