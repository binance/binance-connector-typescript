import { RestSubAccountTypes } from '../../../../src/index';

export const mockResponse: RestSubAccountTypes.getManagedSubAccountSnapshotResponse = {
    'code': 200,
    'msg': '',
    'snapshotVos': [{
        'data': {
            'balances': [{
                'asset': 'BTC',
                'free': '0.09905021',
                'locked': '0.00000000'
            }
            ],
            'totalAssetOfBtc': '0.09942700'
        },
        'type': 'spot',
        'updateTime': 1576281599000
    }]
};
