import { RestSubAccountTypes } from '../../../../src/index';

export const mockResponse: RestSubAccountTypes.getSubAccountListResponse = {
    'subAccounts': [{
        'email': 'testsub@gmail.com',
        'isFreeze': false,
        'createTime': 1544433328000,
        'isManagedSubAccount': false,
        'isAssetManagementSubAccount': false
    }]
};
