import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/summaryOfSubAccountFuturesAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Summary of Sub-account Futures Account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Summary of Sub-account Futures Account', async () => {
        const spy = jest.spyOn(client, 'summaryOfSubAccountFuturesAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.summaryOfSubAccountFuturesAccount();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
