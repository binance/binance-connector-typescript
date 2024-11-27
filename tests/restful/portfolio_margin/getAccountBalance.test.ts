
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/getAccountBalance';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Account Balance', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return account balance', async () => {
        const spy = jest.spyOn(client, 'getAccountBalance').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getAccountBalance();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
