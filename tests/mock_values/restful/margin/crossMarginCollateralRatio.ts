import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.crossMarginCollateralRatioResponse[] = [
    {
        'collaterals': [
            {
                'minUsdValue': '0',
                'maxUsdValue': '13000000',
                'discountRate': '1'
            },
            {
                'minUsdValue': '13000000',
                'maxUsdValue': '20000000',
                'discountRate': '0.975'
            },
            {
                'minUsdValue': '20000000',
                'discountRate': '0'
            }
        ],
        'assetNames': [
            'BNX'
        ]
    },
    {
        'collaterals': [
            {
                'minUsdValue': '0',
                'discountRate': '1'
            }
        ],
        'assetNames': [
            'BTC',
            'BUSD',
            'ETH',
            'USDT'
        ]
    }
];