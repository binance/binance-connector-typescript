
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/queryLimitOpenOrders';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query limit open orders', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should enable users to query for all existing limit orders', async () => {
        const spy = jest.spyOn(client, 'queryLimitOpenOrders').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.queryLimitOpenOrders();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
