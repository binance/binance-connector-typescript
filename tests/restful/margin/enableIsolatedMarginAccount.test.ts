import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/enableIsolatedMarginAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Enable Isolated Margin Account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Enable Isolated Margin Account', async () => {
        const spy = jest.spyOn(client, 'enableIsolatedMarginAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.enableIsolatedMarginAccount('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
