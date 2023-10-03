import { RestSimpleEarnTypes, SimpleEarnFlexibleRewards } from '../../../../src/types';

export const mockResponse: RestSimpleEarnTypes.getFlexibleRewardsHistoryResponse = {
    'rows': [
        {
            'asset': 'BUSD',
            'rewards': '0.00006408',
            'projectId': 'USDT001',
            'type': SimpleEarnFlexibleRewards.BONUS,
            'time': 1577233578000
        },
        {
            'asset': 'USDT',
            'rewards': '0.00687654',
            'projectId': 'USDT001',
            'type': SimpleEarnFlexibleRewards.REALTIME,
            'time': 1577233562000
        }
    ],
    'total': 2
};
