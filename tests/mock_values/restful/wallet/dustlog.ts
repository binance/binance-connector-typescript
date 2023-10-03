import { RestWalletTypes } from '../../../../src/types';

export const mockResponse: RestWalletTypes.dustlogResponse = {
    'total': 8,
    'userAssetDribblets': [{
        'operateTime': 1615985535000,
        'totalTransferedAmount': '0.00132256',
        'totalServiceChargeAmount': '0.00002699',
        'transId': 45178372831,
        'userAssetDribbletDetails': [{
            'transId': 4359321,
            'serviceChargeAmount': '0.000009',
            'amount': '0.0009',
            'operateTime': 1615985535000,
            'transferedAmount': '0.000441',
            'fromAsset': 'USDT'
        }]
    }]
};
