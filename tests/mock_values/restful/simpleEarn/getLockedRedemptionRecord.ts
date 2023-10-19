import { RestSimpleEarnTypes, SimpleEarnLockedRedemption } from '../../../../src/index';

export const mockResponse: RestSimpleEarnTypes.getLockedRedemptionRecordResponse = {
    'rows': [
        {
            'positionId': '123123',
            'redeemId': 40607,
            'time': 1575018510000,
            'asset': 'BNB',
            'lockPeriod': '30',
            'amount': '21312.23223',
            'type': SimpleEarnLockedRedemption.MATURE,
            'deliverDate': '1575018510000',
            'status': 'PAID'
        }
    ],
    'total': 1
};
