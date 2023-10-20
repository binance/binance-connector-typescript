import { RestSubAccountTypes, SubAccountStatus } from '../../../../src/index';

export const mockResponse: RestSubAccountTypes.getSubAccountSpotAssetTransferHistoryResponse[] = [
    {
        'from': 'aaa@test.com',
        'to': 'bbb@test.com',
        'asset': 'BTC',
        'qty': 10,
        'status': SubAccountStatus.SUCCESS,
        'tranId': 6489943656,
        'time': 1544433328000
    }
];
