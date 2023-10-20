import { RestSubAccountTypes } from '../../../../src/index';

export const mockResponse: RestSubAccountTypes.getSubAccountFuturesAssetTransferHistoryResponse = {
    'success': true,
    'futuresType': 2,
    'transfers': [{
        'from': 'aaa@test.com',
        'to': 'bbb@test.com',
        'asset': 'BTC',
        'qty': '1',
        'tranId': 11897001102,
        'time': 1544433328000
    }]
};
