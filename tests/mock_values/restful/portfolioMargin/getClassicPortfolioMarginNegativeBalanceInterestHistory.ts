import { RestPortfolioMarginTypes } from '../../../../src/index';

export const mockResponse: RestPortfolioMarginTypes.getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse[] = [
    {
        'asset': 'USDT',
        'interest': '24.4440',
        'interestAccruedTime': 1670227200000,
        'interestRate': '0.0001164',
        'principal': '210000'
    }
];
