
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/getClassicPortfolioMarginNegativeBalanceInterestHistory';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Classic Portfolio Margin Negative Balance Interest History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should query interest history of negative balance for portfolio margin', async () => {
        const spy = jest.spyOn(client, 'getClassicPortfolioMarginNegativeBalanceInterestHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getClassicPortfolioMarginNegativeBalanceInterestHistory();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
