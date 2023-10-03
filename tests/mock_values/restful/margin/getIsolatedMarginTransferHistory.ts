import { MarginStatus, RestMarginTypes, TransFrom, TransTo } from '../../../../src/types';

export const mockResponse: RestMarginTypes.getIsolatedMarginTransferHistoryResponse = {
    'rows': [{
        'amount': '0.10000000',
        'asset': 'BNB',
        'status': MarginStatus.CONFIRMED,
        'timestamp': 1566898617000,
        'txId': 5240372201,
        'transFrom': TransFrom.SPOT,
        'transTo': TransTo.ISOLATED_MARGIN
    }],
    'total': 1
};
