import { RestPortfolioMarginTypes } from '../../../../src/index';

export const mockResponse: RestPortfolioMarginTypes.getPortfolioMarginAssetLeverageResponse[] = [
    {
        'asset': 'USDC',
        'leverage': 10
    },
    {
        'asset': 'USDT',
        'leverage': 10
    }
];
