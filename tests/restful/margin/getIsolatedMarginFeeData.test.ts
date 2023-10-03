import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getIsolatedMarginFeeData';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Isolated Margin Fee Data', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Isolated Margin Fee Data', async () => {
        const spy = jest.spyOn(client, 'getIsolatedMarginFeeData').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getIsolatedMarginFeeData();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
