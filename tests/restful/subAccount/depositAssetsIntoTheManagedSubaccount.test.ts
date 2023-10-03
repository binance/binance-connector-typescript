import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/depositAssetsIntoTheManagedSubaccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Deposit assets into the managed sub-account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Deposit assets into the managed sub-account', async () => {
        const spy = jest.spyOn(client, 'depositAssetsIntoTheManagedSubAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.depositAssetsIntoTheManagedSubAccount('alice@test.com', 'BTC', 1.01);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
