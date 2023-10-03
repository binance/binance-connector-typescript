import { RestSubAccountTypes } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.futuresPositionriskOfSubAccountV2Response = {
    'futurePositionRiskVos': [{
        'entryPrice': '9975.12000',
        'leverage': '50',
        'maxNotional': '1000000',
        'liquidationPrice': '7963.54',
        'markPrice': '9973.50770517',
        'positionAmount': '0.010',
        'symbol': 'BTCUSDT',
        'unrealizedProfit': '-0.01612295'
    }
    ]
};
