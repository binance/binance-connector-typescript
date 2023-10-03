import { RestTradeTypes } from '../../../../src/types';

export const mockMyTrades: RestTradeTypes.accountTradeListResponse[] = [
    {
        'symbol': 'BTCUSDT',
        'id': 1650422481,
        'orderId': 12569099453,
        'orderListId': -1,
        'price': '23416.10000000',
        'qty': '0.00635000',
        'quoteQty': '148.69223500',
        'commission': '0.00000000',
        'commissionAsset': 'BNB',
        'time': 1660801715793,
        'isBuyer': false,
        'isMaker': true,
        'isBestMatch': true
    },
    {
        'symbol': 'BTCUSDT',
        'id': 1650422482,
        'orderId': 12569099453,
        'orderListId': -1,
        'price': '23416.50000000',
        'qty': '0.00212000',
        'quoteQty': '49.64298000',
        'commission': '0.00000000',
        'commissionAsset': 'BNB',
        'time': 1660801715793,
        'isBuyer': false,
        'isMaker': true,
        'isBestMatch': true
    }
];