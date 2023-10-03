import { RestMarginTypes } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getAllCrossMarginPairsResponse[] = [
    {
        'base': 'BNB',
        'id': 351637150141315840,
        'isBuyAllowed': true,
        'isMarginTrade': true,
        'isSellAllowed': true,
        'quote': 'BTC',
        'symbol': 'BNBBTC'
    }
];
