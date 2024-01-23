import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/getCurrentOrderCountUsage';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Current Order Count Usage', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Current Order Count Usage', async () => {
        const spy = jest.spyOn(client, 'getCurrentOrderCountUsage').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCurrentOrderCountUsage();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
