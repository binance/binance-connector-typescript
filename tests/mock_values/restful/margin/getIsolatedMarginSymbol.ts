import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getIsolatedMarginSymbolResponse = {
    'symbol': 'BTCUSDT',
    'base': 'BTC',
    'quote': 'USDT',
    'isMarginTrade': true,
    'isBuyAllowed': true,
    'isSellAllowed': true
};
