import { AutoCompoundPlan, DualInvestmentPurchaseStatus, OptionType, RestDualInvestmentTypes } from '../../../../src/index';

export const mockResponse: RestDualInvestmentTypes.getDualInvestmentPositionsResponse = {
    'total': 1,
    'list': [
        {
            'id': '10160533',
            'investCoin': 'USDT',
            'exercisedCoin': 'BNB',
            'subscriptionAmount': '0.5',
            'strikePrice': '330',
            'duration': 4,
            'settleDate': 1708416000000,
            'purchaseStatus': DualInvestmentPurchaseStatus.PURCHASE_SUCCESS,
            'apr': '0.0365',
            'orderId': 7973677530,
            'purchaseEndTime': 1708329600000,
            'optionType': OptionType.PUT,
            'autoCompoundPlan': AutoCompoundPlan.STANDARD
        }
    ]
};
