import { CrossMarginAccountType, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getCrossMarginAccountDetailsResponse = {
    'created' : true,
    'borrowEnabled': true,
    'marginLevel': '11.64405625',
    'collateralMarginLevel' : '3.2',
    'totalAssetOfBtc': '6.82728457',
    'totalLiabilityOfBtc': '0.58633215',
    'totalNetAssetOfBtc': '6.24095242',
    'TotalCollateralValueInUSDT': '5.82728457',
    'tradeEnabled': true,
    'transferInEnabled': true,
    'transferOutEnabled': true,
    'accountType': CrossMarginAccountType.MARGIN_1,
    'userAssets': [
        {
            'asset': 'BTC',
            'borrowed': '0.00000000',
            'free': '0.00499500',
            'interest': '0.00000000',
            'locked': '0.00000000',
            'netAsset': '0.00499500'
        },
        {
            'asset': 'BNB',
            'borrowed': '201.66666672',
            'free': '2346.50000000',
            'interest': '0.00000000',
            'locked': '0.00000000',
            'netAsset': '2144.83333328'
        },
        {
            'asset': 'ETH',
            'borrowed': '0.00000000',
            'free': '0.00000000',
            'interest': '0.00000000',
            'locked': '0.00000000',
            'netAsset': '0.00000000'
        },
        {
            'asset': 'USDT',
            'borrowed': '0.00000000',
            'free': '0.00000000',
            'interest': '0.00000000',
            'locked': '0.00000000',
            'netAsset': '0.00000000'
        }
    ]
};
