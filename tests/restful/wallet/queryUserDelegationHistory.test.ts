import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/queryUserDelegationHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query User Delegation History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return user delegation history', async () => {
        const spy = jest.spyOn(client, 'queryUserDelegationHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.queryUserDelegationHistory('email', 1695205000000, 1695205999999);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
