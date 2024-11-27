import { RestPortfolioMarginTypes } from '../../../../src/index';

export const mockResponse: RestPortfolioMarginTypes.getAccountBalanceResponse[] = [
    {
        'asset': 'BTC',
        'totalWalletBalance': '100',
        'crossMarginAsset': '100',
        'crossMarginBorrowed': '0',
        'crossMarginFree': '100',
        'crossMarginInterest': '0',
        'crossMarginLocked': '0',
        'umWalletBalance': '0',
        'umUnrealizedPNL': '0',
        'cmWalletBalance': '0',
        'cmUnrealizedPNL': '0',
        'updateTime': 0,
        'negativeBalance': '0',
        'optionWalletBalance': '0',
        'optionEquity': '0'
    }
];
