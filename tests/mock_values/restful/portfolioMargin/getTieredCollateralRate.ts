import { RestPortfolioMarginTypes } from '../../../../src/index';

export const mockResponse: RestPortfolioMarginTypes.getTieredCollateralRateResponse[] =[
    {
        'asset': 'BNB',
        'collateralInfo': [
            {
                'tierFloor': '0.0000',
                'tierCap': '1000.0000',
                'collateralRate': '1.0000',
                'cum':'0.0000'
            },
            {
                'tierFloor': '1000.0000',
                'tierCap': '2000.0000',
                'collateralRate': '0.9000',
                'cum':'0.0000'
            }
        ]
    },
    {
        'asset': 'USDT',
        'collateralInfo': [
            {
                'tierFloor': '0.0000',
                'tierCap': '1000.0000',
                'collateralRate': '1.0000',
                'cum':'0.0000'
            },
            {
                'tierFloor': '1000.0000',
                'tierCap': '2000.0000',
                'collateralRate': '0.9999',
                'cum':'0.0000'
            }
        ]
    }
];
