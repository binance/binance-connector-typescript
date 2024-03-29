import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getAllIsolatedMarginSymbol';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get All Isolated Margin Symbol', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return All Isolated Margin Symbol', async () => {
        const spy = jest.spyOn(client, 'getAllIsolatedMarginSymbol').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getAllIsolatedMarginSymbol();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
