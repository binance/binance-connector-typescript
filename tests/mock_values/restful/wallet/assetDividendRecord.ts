import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.assetDividendRecordResponse = {
    'rows': [{
        'id': 242006910,
        'amount': '10.00000000',
        'asset': 'BHFT',
        'divTime': 1563189166000,
        'enInfo': 'BHFT distribution',
        'tranId': 2968885920
    }],
    'total': 1
};
