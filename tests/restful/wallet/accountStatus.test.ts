import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/accountStatus';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Account Status', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Account Status', async () => {
        const spy = jest.spyOn(client, 'accountStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.accountStatus();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
