import { SimpleEarnSourceAccount, SimpleEarnStatus, SimpleEarnType, RestSimpleEarnTypes } from '../../../../src/index';

export const mockResponse: RestSimpleEarnTypes.getLockedSubscriptionRecordResponse = {
    'rows': [
        {
            'positionId': '123123',
            'purchaseId': 26055,
            'time': 1575018510000,
            'asset': 'BNB',
            'amount': '21312.23223',
            'lockPeriod': '30',
            'type': SimpleEarnType.AUTO,
            'sourceAccount': SimpleEarnSourceAccount.SPOT,
            'amtFromSpot': '30',
            'amtFromFunding': '70',
            'status': SimpleEarnStatus.SUCCESS
        }
    ],
    'total': 1
};
