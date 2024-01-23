import { expect } from '@jest/globals';
import { OrderType, Side, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/newOrderSOR';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('New Order SOR', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return New Order SOR result', async () => {
        const spy = jest.spyOn(client, 'newOrderSOR').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.newOrderSOR('BNBUSDT', Side.SELL, OrderType.LIMIT, 1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
