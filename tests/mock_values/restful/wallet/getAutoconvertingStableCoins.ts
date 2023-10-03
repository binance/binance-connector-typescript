import { RestWalletTypes } from '../../../../src/types';

export const mockResponse: RestWalletTypes.getAutoconvertingStableCoinsResponse = {
    'convertEnabled': true,
    'coins': ['USDC'],
    'exchangeRates': {
        'USDC': '1',
        'TUSD': '1',
        'USDP': '1'
    }
};
