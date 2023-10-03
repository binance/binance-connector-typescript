import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/currentAveragePrice';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Current Average Price', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Current Average Price', async () => {
        const spy = jest.spyOn(client, 'currentAveragePrice').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.currentAveragePrice('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
