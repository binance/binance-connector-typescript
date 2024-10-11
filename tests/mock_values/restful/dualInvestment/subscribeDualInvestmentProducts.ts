import { AutoCompoundPlan, DualInvestmentPurchaseStatus, OptionType, RestDualInvestmentTypes } from '../../../../src/index';

export const mockResponse: RestDualInvestmentTypes.subscribeDualInvestmentProductsResponse = {
    'positionId': 10208824,
    'investCoin': 'BNB',
    'exercisedCoin': 'USDT',
    'subscriptionAmount': '0.002',
    'duration': 4,
    'autoCompoundPlan': AutoCompoundPlan.STANDARD,
    'strikePrice': '380',
    'settleDate': 1709020800000,
    'purchaseStatus': DualInvestmentPurchaseStatus.PURCHASE_SUCCESS,
    'apr': '0.7397',
    'orderId': 8259117597,
    'purchaseTime': 1708677583874,
    'optionType': OptionType.CALL
};
