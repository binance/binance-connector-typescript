import { RestWalletTypes, UnivStatus, UnivTransferType } from '../../../../src/index';

export const mockResponse: RestWalletTypes.getUserUniversalTransferHistoryResponse = {
    'total': 1,
    'rows': [{
        'asset': 'USDT',
        'amount': '1',
        'type': UnivTransferType.MAIN_MARGIN,
        'status': UnivStatus.CONFIRMED,
        'tranId': 11415955596,
        'timestamp': 1544433328000
    }]
};
