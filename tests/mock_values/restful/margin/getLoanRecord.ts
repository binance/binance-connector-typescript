import { MarginStatus, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getLoanRecordResponse = {
    'rows': [{
        'isolatedSymbol': 'BNBUSDT',
        'txId': 12807067523,
        'asset': 'BNB',
        'principal': '0.84624403',
        'timestamp': 1555056425000,
        'status': MarginStatus.CONFIRMED
    }],
    'total': 0
};
