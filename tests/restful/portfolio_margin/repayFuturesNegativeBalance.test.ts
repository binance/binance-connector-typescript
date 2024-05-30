
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/repayFuturesNegativeBalance';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Repay futures Negative Balance', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should repay futures Negative Balance', async () => {
        const spy = jest.spyOn(client, 'repayFuturesNegativeBalance').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.repayFuturesNegativeBalance();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
