import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getCurrentMarginOrderCountUsage';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Current Margin Order Count Usage', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Current Margin Order Count Usage', async () => {
        const spy = jest.spyOn(client, 'getCurrentMarginOrderCountUsage').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCurrentMarginOrderCountUsage();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
