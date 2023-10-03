import { FromAccountType, RestSubAccountTypes, SubAccountStatus, ToAccountType } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.getUniversalTransferHistoryResponse = {
    result: [{
        'tranId': 11945860693,
        'fromEmail': 'master@test.com',
        'toEmail': 'subaccount1@test.com',
        'asset': 'BTC',
        'amount': '0.1',
        'fromAccountType': FromAccountType.SPOT,
        'toAccountType': ToAccountType.COIN_FUTURE,
        'status': SubAccountStatus.SUCCESS,
        'createTimeStamp': 1544433325000,
        'clientTranId': '11945860694'
    }],
    'totalCount': 1
};
