import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/crossMarginAccountTransfer';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Cross Margin Account Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Cross Margin Account Transfer', async () => {
        const spy = jest.spyOn(client, 'crossMarginAccountTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.crossMarginAccountTransfer('BTC', 1.01, 1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
