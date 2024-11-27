import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/queryUserWalletBalance';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query User Wallet Balance', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return user wallet balance', async () => {
        const spy = jest.spyOn(client, 'queryUserWalletBalance').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.queryUserWalletBalance();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
