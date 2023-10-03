import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/currentOpenOrders';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Current Open Orders', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Current Open Orders', async () => {
        const spy = jest.spyOn(client, 'currentOpenOrders').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.currentOpenOrders();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
