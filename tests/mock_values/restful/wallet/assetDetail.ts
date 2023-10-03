import { RestWalletTypes } from '../../../../src/types';

export const mockResponse: RestWalletTypes.assetDetailResponse = {
    'CTR': {
        'minWithdrawAmount': '70.00000000',
        'depositStatus': false,
        'withdrawFee': 35,
        'withdrawStatus': true,
        'depositTip': 'Delisted, Deposit Suspended'
    }
};
