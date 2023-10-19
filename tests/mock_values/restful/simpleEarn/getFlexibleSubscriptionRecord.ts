import { SimpleEarnSourceAccount, SimpleEarnStatus, SimpleEarnType, RestSimpleEarnTypes } from '../../../../src/index';

export const mockResponse: RestSimpleEarnTypes.getFlexibleSubscriptionRecordResponse = {
    'rows': [
        {
            'amount': '100.00000000',
            'asset': 'USDT',
            'time': 1575018510000,
            'purchaseId': 26055,
            'type': SimpleEarnType.AUTO,
            'sourceAccount': SimpleEarnSourceAccount.SPOT,
            'amtFromSpot': '30',
            'amtFromFunding': '70',
            'status': SimpleEarnStatus.SUCCESS
        }
    ],
    'total': 1
};
