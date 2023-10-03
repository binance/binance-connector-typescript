import { RestSubAccountTypes } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.summaryOfSubAccountFuturesAccountResponse = {
    'totalInitialMargin': '9.83137400',
    'totalMaintenanceMargin': '0.41568700',
    'totalMarginBalance': '23.03235621',
    'totalOpenOrderInitialMargin': '9.00000000',
    'totalPositionInitialMargin': '0.83137400',
    'totalUnrealizedProfit': '0.03219710',
    'totalWalletBalance': '22.15879444',
    'asset': 'USD',
    'subAccountList': [{
        'email': '123@test.com',
        'totalInitialMargin': '9.00000000',
        'totalMaintenanceMargin': '0.00000000',
        'totalMarginBalance': '22.12659734',
        'totalOpenOrderInitialMargin': '9.00000000',
        'totalPositionInitialMargin': '0.00000000',
        'totalUnrealizedProfit': '0.00000000',
        'totalWalletBalance': '22.12659734',
        'asset': 'USD'
    }]
};
