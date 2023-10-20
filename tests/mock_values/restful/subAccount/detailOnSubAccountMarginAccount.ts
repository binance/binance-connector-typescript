import { RestSubAccountTypes } from '../../../../src/index';

export const mockResponse: RestSubAccountTypes.detailOnSubAccountMarginAccountResponse = {
    'email': '123@test.com',
    'marginLevel': '11.64405625',
    'totalAssetOfBtc': '6.82728457',
    'totalLiabilityOfBtc': '0.58633215',
    'totalNetAssetOfBtc': '6.24095242',
    'marginTradeCoeffVo': {
        'forceLiquidationBar': '1.10000000',
        'marginCallBar': '1.50000000',
        'normalBar': '2.00000000'
    },
    'marginUserAssetVoList': [{
        'asset': 'BTC',
        'borrowed': '0.00000000',
        'free': '0.00499500',
        'interest': '0.00000000',
        'locked': '0.00000000',
        'netAsset': '0.00499500'
    }
    ]
};
