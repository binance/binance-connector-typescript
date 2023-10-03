import { RestSubAccountTypes } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.summaryOfSubAccountMarginAccountResponse = {
    'totalAssetOfBtc': '4.33333333',
    'totalLiabilityOfBtc': '2.11111112',
    'totalNetAssetOfBtc': '2.22222221',
    'subAccountList': [{
        'email': '123@test.com',
        'totalAssetOfBtc': '2.11111111',
        'totalLiabilityOfBtc': '1.11111111',
        'totalNetAssetOfBtc': '1.00000000'
    }]
};
