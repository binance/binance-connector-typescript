import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getMarginAccountOco';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Margin Account OCO', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Account OCO', async () => {
        const spy = jest.spyOn(client, 'getMarginAccountOco').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getMarginAccountOco();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
