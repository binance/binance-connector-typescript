import { GetCrossMargingTransferHistoryType, MarginStatus, RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getCrossMarginTransferHistoryResponse = {
    'rows': [
        {
            'amount': '0.10000000',
            'asset': 'BNB',
            'status': MarginStatus.CONFIRMED,
            'timestamp': 1566898617,
            'txId': 5240372201,
            'type': GetCrossMargingTransferHistoryType.ROLL_IN
        },
        {
            'amount': '5.00000000',
            'asset': 'USDT',
            'status': MarginStatus.CONFIRMED,
            'timestamp': 1566888436,
            'txId': 5239810406,
            'type': GetCrossMargingTransferHistoryType.ROLL_OUT
        }
    ],
    'total': 3
};
