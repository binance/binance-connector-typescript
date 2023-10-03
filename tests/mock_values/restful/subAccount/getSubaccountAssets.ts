import { RestSubAccountTypes } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.getSubAccountAssetsResponse = {
    'balances': [{
        'asset': 'ADA',
        'free': 10000,
        'locked': 0
    }]
};
