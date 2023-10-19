import { expect } from '@jest/globals';
import { Side, OrderType, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginAccountNewOrder';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Account New Order', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Account New Order', async () => {
        const spy = jest.spyOn(client, 'marginAccountNewOrder').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginAccountNewOrder('BNBUSDT', Side.SELL, OrderType.LIMIT);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
