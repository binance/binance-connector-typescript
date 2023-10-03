import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/transferForSubAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Transfer for Sub-account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Transfer for Sub-account', async () => {
        const spy = jest.spyOn(client, 'transferForSubAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.transferForSubAccount('sub.account@email.com', 'BTC', 1.01, 1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
