import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/withdrawHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Withdraw History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Withdraw History', async () => {
        const spy = jest.spyOn(client, 'withdrawHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.withdrawHistory();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
