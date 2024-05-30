
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/getPortfolioMarginAssetLeverage';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Portfolio Margin Asset Leverage', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });

    it('should return portfolio margin asset leverage ', async () => {
        const spy = jest.spyOn(client, 'getPortfolioMarginAssetLeverage').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getPortfolioMarginAssetLeverage();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
