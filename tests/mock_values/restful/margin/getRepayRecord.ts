import { MarginStatus, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getRepayRecordResponse = {
    'rows': [{
        'isolatedSymbol': 'BNBUSDT',
        'amount': '14.00000000',
        'asset': 'BNB',
        'interest': '0.01866667',
        'principal': '13.98133333',
        'status': MarginStatus.CONFIRMED,
        'timestamp': 1563438204000,
        'txId': 2970933056
    }],
    'total': 1
};
