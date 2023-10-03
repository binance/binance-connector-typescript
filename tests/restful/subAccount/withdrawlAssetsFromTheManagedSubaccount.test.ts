import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/withdrawlAssetsFromTheManagedSubaccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Withdrawl assets from the managed sub-account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Withdrawl assets from the managed sub-account', async () => {
        const spy = jest.spyOn(client, 'withdrawlAssetsFromTheManagedSubAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.withdrawlAssetsFromTheManagedSubAccount('undefined', 'BTC', 1.01,);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
