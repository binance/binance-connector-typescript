import { RestSimpleEarnTypes, SimpleEarnDestAccount } from '../../../../src/types';

export const mockResponse: RestSimpleEarnTypes.getFlexibleRedemptionRecordResponse = {
    'rows': [
        {
            'amount': '10.54000000',
            'asset': 'USDT',
            'time': 1577257222000,
            'projectId': 'USDT001',
            'redeemId': 40607,
            'destAccount': SimpleEarnDestAccount.SPOT,
            'status': 'PAID'
        }
    ],
    'total': 1
};
