import { RestSimpleEarnTypes } from '../../../../src/index';

export const mockResponse: RestSimpleEarnTypes.getLockedProductPositionResponse = {
    'rows': [
        {
            'positionId': 123123,
            'parentPositionId': 123122,
            'projectId': 'Axs*90',
            'asset': 'AXS',
            'amount': '122.09202928',
            'purchaseTime': '1646182276000',
            'duration': '60',
            'accrualDays': '4',
            'rewardAsset': 'AXS',
            'APY': '0.2032',      
            'rewardAmt': '5.17181528',
            'extraRewardAsset': 'BNB',
            'extraRewardAPR': '0.0203',
            'estExtraRewardAmt': '5.17181528',
            'nextPay': '1.29295383',
            'nextPayDate': '1646697600000',
            'payPeriod': '1',
            'redeemAmountEarly': '2802.24068892',
            'rewardsEndDate': '1651449600000',
            'deliverDate': '1651536000000',
            'redeemPeriod': '1',
            'redeemingAmt': '232.2323',
            'redeemTo':'FLEXIBLE',
            'partialAmtDeliverDate':'1651536000000',
            'canRedeemEarly': true,
            'canFastRedemption': true,
            'autoSubscribe': true,
            'type': 'AUTO',
            'status': 'HOLDING',
            'canReStake': true
        }
    ],
    'total': 1
};
