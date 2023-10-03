import { RestMarginTypes } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getCurrentMarginOrderCountUsageResponse[] = [
    {
        'rateLimitType': 'ORDERS',
        'interval': 'SECOND',
        'intervalNum': 10,
        'limit': 10000,
        'count': 0
    }
];
