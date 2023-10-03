import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/accountTradeList';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Account Trade List', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Account Trade List', async () => {
        const spy = jest.spyOn(client, 'accountTradeList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.accountTradeList('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
