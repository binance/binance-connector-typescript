import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getIsolatedMarginAccountInfo';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Isolated Margin Account Info', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Isolated Margin Account Info', async () => {
        const spy = jest.spyOn(client, 'getIsolatedMarginAccountInfo').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getIsolatedMarginAccountInfo();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
