import { FromAccountType, RestSubAccountTypes, SubAccountStatus, ToAccountType } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.subAccountTransferHistoryResponse[] = [
    {
        'counterParty': 'master',
        'email': 'master@test.com',
        'type': 1,
        'asset': 'BTC',
        'qty': '1',
        'fromAccountType': FromAccountType.SPOT,
        'toAccountType': ToAccountType.COIN_FUTURE,
        'status': SubAccountStatus.SUCCESS,
        'tranId': 11798835829,
        'time': 1544433325000
    }
];
