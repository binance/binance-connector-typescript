import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getLeverageBracketResponse[] = [
    {
        'assetNames': [
            'SHIB',
            'FDUSD',
            'BTC',
            'ETH',
            'USDC'
        ],
        'rank': 1,
        'brackets': [
            {
                'leverage': 10,
                'maxDebt': 1000000.00000000,
                'maintenanceMarginRate': 0.02000000,
                'initialMarginRate': 0.1112,
                'fastNum': 0
            },
            {
                'leverage': 3,
                'maxDebt': 4000000.00000000,
                'maintenanceMarginRate': 0.07000000,
                'initialMarginRate': 0.5000,
                'fastNum': 60000.0000000000000000
            }
        ]
    }
];
