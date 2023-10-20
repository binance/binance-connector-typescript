import { MarginInterestHistory, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getInterestHistoryResponse = {
    'rows': [{
        'txId': 1352286576452864727n,
        'interestAccuredTime': 1672160400000,
        'asset': 'USDT',
        'rawAsset': 'USDT',  // will not be returned for isolated margin           
        'principal': '45.3313',
        'interest': '0.00024995',
        'interestRate': '0.00013233',
        'type': MarginInterestHistory.ON_BORROW,
        'isolatedSymbol': 'BNBUSDT',
    }],
    'total': 1
};
