import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/oldTradeLookup';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Old Trade Lookup', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Old Trade Lookup', async () => {
        const spy = jest.spyOn(client, 'oldTradeLookup').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.oldTradeLookup('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
