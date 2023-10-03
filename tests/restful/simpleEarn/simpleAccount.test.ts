
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/simpleAccount';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Simple Account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return simple account information', async () => {
        const spy = jest.spyOn(client, 'simpleAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.simpleAccount();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

