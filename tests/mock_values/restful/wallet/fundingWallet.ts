import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.fundingWalletResponse[] = [
    {
        'asset': 'USDT',
        'free': '1',
        'locked': '0',
        'freeze': '0',
        'withdrawing': '0',
        'btcValuation': '0.00000091'
    }
];
