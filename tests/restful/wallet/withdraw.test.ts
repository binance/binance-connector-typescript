import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/withdraw';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Withdraw', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Withdraw', async () => {
        const spy = jest.spyOn(client, 'withdraw').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.withdraw('BNB', 'bnb_address', 0.1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
