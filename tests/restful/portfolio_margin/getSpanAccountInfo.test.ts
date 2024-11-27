
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/getSpanAccountInfo';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get SPAN Account Info', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return SPAN account info', async () => {
        const spy = jest.spyOn(client, 'getSpanAccountInfo').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSpanAccountInfo();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
