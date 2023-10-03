import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/orderBook';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Order Book', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Order Book', async () => {
        const spy = jest.spyOn(client, 'orderBook').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.orderBook('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
