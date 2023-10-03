import { RestMarginTypes } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getCrossMarginAccountDetailsResponse = {
    'borrowEnabled': true,
    'marginLevel': '11.64405625',
    'totalAssetOfBtc': '6.82728457',
    'totalLiabilityOfBtc': '0.58633215',
    'totalNetAssetOfBtc': '6.24095242',
    'tradeEnabled': true,
    'transferEnabled': true,
    'userAssets': [{
        'asset': 'BTC',
        'borrowed': '0.00000000',
        'free': '0.00499500',
        'interest': '0.00000000',
        'locked': '0.00000000',
        'netAsset': '0.00499500'
    }]
};
