import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getSummaryOfMarginAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Summary of Margin account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Summary of Margin account', async () => {
        const spy = jest.spyOn(client, 'getSummaryOfMarginAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSummaryOfMarginAccount();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
