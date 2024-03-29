import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getEnabledIsolatedMarginAccountLimit';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Enabled Isolated Margin Account Limit', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Enabled Isolated Margin Account Limit', async () => {
        const spy = jest.spyOn(client, 'getEnabledIsolatedMarginAccountLimit').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getEnabledIsolatedMarginAccountLimit();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
