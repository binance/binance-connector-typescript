import { RestWalletTypes } from '../../../../src/types';

export const mockResponse: RestWalletTypes.dailyAccountSnapshotResponse = {
    'code': 200,
    'msg': '',
    'snapshotVos': [{
        'data': {
            'balances': [{
                'asset': 'BTC',
                'free': '0.2',
                'locked': '0.001'
            }
            ],
            'totalAssetOfBtc': '0.09905021'
        },
        'type': 'spot',
        'updateTime': 1576281599000
    }]
};
