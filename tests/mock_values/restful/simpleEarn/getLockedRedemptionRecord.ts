import { RestSimpleEarnTypes, SimpleEarnLockedRedemption } from '../../../../src/index';

export const mockResponse: RestSimpleEarnTypes.getLockedRedemptionRecordResponse = {
    'rows': [
        {
            'positionId': 123123,
            'redeemId': 40607,
            'time': 1575018510000,
            'asset': 'BNB',
            'lockPeriod': '30',
            'amount': '21312.23223',
            'originalAmount': '21312.23223',
            'type': SimpleEarnLockedRedemption.MATURE,
            'deliverDate': '1575018510000',
            'lossAmount': '0.00001232',
            'isComplete': true,
            'rewardAsset':'AXS',
            'rewardAmt': '5.17181528',
            'extraRewardAsset':'BNB',
            'estExtraRewardAmt': '5.17181528',
            'status': 'PAID'
        }
    ],
    'total': 1
};
