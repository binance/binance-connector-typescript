import { RestSimpleEarnTypes } from '../../../../src/types';

export const mockResponse: RestSimpleEarnTypes.getLockedRewardsHistoryResponse = {
    'rows': [
        {
            'positionId': '123123',
            'time': 1575018510000,
            'asset': 'BNB',
            'lockPeriod': '30',
            'amount': '21312.23223'
        }
    ],
    'total': 1
};
