import { RestMarginTypes } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getAllMarginAssetsResponse[] = [
    {
        'assetFullName': 'Binance coin',
        'assetName': 'BNB',
        'isBorrowable': true,
        'isMortgageable': true,
        'userMinBorrow': '0.00000000',
        'userMinRepay': '0.00000000'
    }
];
