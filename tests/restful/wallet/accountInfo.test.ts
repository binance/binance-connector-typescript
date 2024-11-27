import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/accountInfo';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Fetch Account Info Detail', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return account info detail', async () => {
        const spy = jest.spyOn(client, 'accountInfo').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.accountInfo();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
