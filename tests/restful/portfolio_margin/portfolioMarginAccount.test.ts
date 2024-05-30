
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/portfolioMarginAccount';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Portfolio Margin Account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should get portfolio margin pro account info', async () => {
        const spy = jest.spyOn(client, 'portfolioMarginAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.portfolioMarginAccount();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
