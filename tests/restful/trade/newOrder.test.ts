import { expect } from '@jest/globals';
import { OrderType, Side, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/newOrder';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('New Order', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return New Order', async () => {
        const spy = jest.spyOn(client, 'newOrder').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.newOrder('BNBUSDT', Side.SELL, OrderType.LIMIT);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
