import { RestSubAccountTypes } from '../../../../src/index';

export const mockResponse: RestSubAccountTypes.getSubAccountAssetsForMasterAccountResponse = {
    'balances': [
        {
            'freeze':'0',
            'withdrawing':'0',
            'asset':'ADA',
            'free':'10000',
            'locked':'0'
        },
        {
            'freeze':'0',
            'withdrawing':'0',
            'asset':'BNB',
            'free':'10003',
            'locked':'0'
        },
        {
            'freeze':'0',
            'withdrawing':'0',
            'asset':'BTC',
            'free':'11467.6399',
            'locked':'0'
        }
    ]
};

