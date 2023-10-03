
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/subscribeFlexibleProduct';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Subscribe Flexible Product', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should subscribe flexible product', async () => {
        const spy = jest.spyOn(client, 'subscribeFlexibleProduct').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.subscribeFlexibleProduct('1', 1.0);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

