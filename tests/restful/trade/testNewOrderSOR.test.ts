import { expect } from '@jest/globals';
import { OrderType, Side, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/testNewOrderSOR';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Test New Order SOR', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Test New Order SOR result', async () => {
        const spy = jest.spyOn(client, 'testNewOrderSOR').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.testNewOrderSOR('BNBUSDT', Side.SELL, OrderType.LIMIT, 1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});