import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.getCloudminingPaymentAndRefundHistoryResponse = {
    'total': 1,
    'rows': [{
        'createTime': 1667880112000,
        'tranId': 121230610120,
        'type': 248,
        'asset': 'USDT',
        'amount': '1',
        'status': 'S'
    }]
};
