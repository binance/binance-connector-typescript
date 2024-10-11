import { AutoCompoundPlan, OptionType, RestDualInvestmentTypes } from '../../../../src/index';

export const mockResponse: RestDualInvestmentTypes.getDualInvestmentProductListResponse = {
    'total': 1,
    'list': [
        {
            'id': '741590',
            'investCoin': 'USDT',
            'exercisedCoin': 'BNB',
            'strikePrice': '380',
            'duration': 4,
            'settleDate': 1709020800000,
            'purchaseDecimal': 8,
            'purchaseEndTime': 1708934400000,
            'canPurchase': true, //true, false
            'apr': '0.6076',
            'orderId': 8257205859,
            'minAmount': '0.1',
            'maxAmount': '25265.7',
            'createTimestamp': 1708560084000,
            'optionType': OptionType.PUT,
            'isAutoCompoundEnable': true, //true, false
            'autoCompoundPlanList': [
                AutoCompoundPlan.STANDARD,
                AutoCompoundPlan.ADVANCED
            ]
        }
    ]
};
