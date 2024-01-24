import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getAllCrossMarginPairsResponse[] = [
    {
        'base': 'BNB',
        'id': 351637150141315861n,
        'isBuyAllowed': true,
        'isMarginTrade': true,
        'isSellAllowed': true,
        'quote': 'BTC',
        'symbol': 'BNBBTC'
    },
    {
        'base': 'TRX',
        'id': 351637923235429141n,
        'isBuyAllowed': true,
        'isMarginTrade': true,
        'isSellAllowed': true,
        'quote': 'BTC',
        'symbol': 'TRXBTC',
        'delistTime': 1704973040
    },
    {
        'base': 'XRP',
        'id': 351638112213990165n,
        'isBuyAllowed': true,
        'isMarginTrade': true,
        'isSellAllowed': true,
        'quote': 'BTC',
        'symbol': 'XRPBTC'
    },
    {
        'base': 'ETH',
        'id': 351638524530850581n,
        'isBuyAllowed': true,
        'isMarginTrade': true,
        'isSellAllowed': true,
        'quote': 'BTC',
        'symbol': 'ETHBTC'
    }
];
