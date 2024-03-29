import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getMarginAccountAllOco';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Margin Account all OCO', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Account all OCO', async () => {
        const spy = jest.spyOn(client, 'getMarginAccountAllOco').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getMarginAccountAllOco();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
