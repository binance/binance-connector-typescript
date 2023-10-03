import { RestSubAccountTypes } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.getSubAccountSpotAssetsSummaryResponse = {
    'totalCount': 1,
    'masterAccountTotalAsset': '0.23231201',
    'spotSubUserAssetBtcVoList': [{
        'email': 'sub123@test.com',
        'totalAsset': '9999.00000000'
    }]
};
