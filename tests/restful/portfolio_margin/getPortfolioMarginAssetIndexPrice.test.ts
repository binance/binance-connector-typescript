
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/getPortfolioMarginAssetIndexPrice';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Portfolio Margin Asset Index Price', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });

    it('should query Portfolio Margin Asset Index Price', async () => {
        const spy = jest.spyOn(client, 'getPortfolioMarginAssetIndexPrice').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getPortfolioMarginAssetIndexPrice();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
