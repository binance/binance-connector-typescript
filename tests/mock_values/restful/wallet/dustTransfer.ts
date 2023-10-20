import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.dustTransferResponse = {
    'totalServiceCharge': '0.02102542',
    'totalTransfered': '1.05127099',
    'transferResult': [{
        'amount': '0.03000000',
        'fromAsset': 'ETH',
        'operateTime': 1563368549307,
        'serviceChargeAmount': '0.00500000',
        'tranId': 2970932918,
        'transferedAmount': '0.25000000'
    }
    ]
};
