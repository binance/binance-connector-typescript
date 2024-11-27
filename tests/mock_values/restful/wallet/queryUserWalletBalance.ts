import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.queryUserWalletBalanceResponse[] = [
    {
        'activate': true,
        'balance': '0',
        'walletName': 'Spot'
    }, 
    {
        'activate': true,
        'balance': '0',
        'walletName': 'Funding'
    }, 
    {
        'activate': true,
        'balance': '0',
        'walletName': 'Cross Margin'
    }, 
    {
        'activate': true,
        'balance': '0',
        'walletName': 'Isolated Margin'
    }, 
    {
        'activate': true,
        'balance': '0.71842752',
        'walletName': 'USDⓈ-M Futures'
    }, 
    {
        'activate': true,
        'balance': '0',
        'walletName': 'COIN-M Futures'
    }, 
    {
        'activate': true,
        'balance': '0',
        'walletName': 'Earn'
    }, 
    {
        'activate': false,
        'balance': '0',
        'walletName': 'Options'
    }
];
