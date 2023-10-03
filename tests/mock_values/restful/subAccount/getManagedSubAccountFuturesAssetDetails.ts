import { RestSubAccountTypes } from '../../../../src/types';

export const mockResponse: RestSubAccountTypes.getManagedSubAccountFuturesAssetDetailsResponse = {
    'code': '200',
    'message': 'OK',
    'snapshotVos': [
        {
            'type': 'FUTURES',
            'updateTime': 1672893855394,
            'data': {
                'assets': [
                    {
                        'asset': 'USDT',
                        'marginBalance': 100,
                        'walletBalance': 120
                    }
                ],
                'position': [
                    {
                        'symbol': 'BTCUSDT',
                        'entryPrice': 17000,
                        'markPrice': 17000,
                        'positionAmt': 0.0001
                    }
                ]
            }
        }
    ]
};
  