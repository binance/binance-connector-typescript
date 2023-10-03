import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getIsolatedMarginTransferHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Isolated Margin Transfer History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Get Isolated Margin Transfer History', async () => {
        const spy = jest.spyOn(client, 'getIsolatedMarginTransferHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getIsolatedMarginTransferHistory('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
