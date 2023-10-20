import { RestMarketTypes } from '../../../../src/index';

export const mockResponse: RestMarketTypes.exchangeInformationResponse = {
    'timezone': 'UTC',
    'serverTime': 1592882214236,
    'rateLimits': [
        {
            'rateLimitType': 'REQUEST_WEIGHT',
            'interval': 'MINUTE',
            'intervalNum': 1,
            'limit': 1200
        }
    ],
    'exchangeFilters': [{}],
    'symbols': [
        {
            'symbol': 'ETHBTC',
            'status': 'TRADING',
            'baseAsset': 'ETH',
            'baseAssetPrecision': 8,
            'quoteAsset': 'BTC',
            'quoteAssetPrecision': 8,
            'baseCommissionPrecision': 8,
            'quoteCommissionPrecision': 8,
            'orderTypes': ['LIMIT'],
            'icebergAllowed': true,
            'ocoAllowed': true,
            'quoteOrderQtyMarketAllowed': true,
            'allowTrailingStop': false,
            'isSpotTradingAllowed': true,
            'isMarginTradingAllowed': true,
            'filters': [
                {
                    'filterType': 'PRICE_FILTER',
                    'minPrice': '0.00000100',
                    'maxPrice': '100000.00000000',
                    'tickSize': '0.00000100'
                }
            ],
            'permissions': ['SPOT'],
            'defaultSelfTradePreventionMode': 'NONE',
            'allowedSelfTradePreventionModes': ['NONE']
        }
    ]
};
