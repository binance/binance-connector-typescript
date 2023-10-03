import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/depositHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Deposit History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Deposit History', async () => {
        const spy = jest.spyOn(client, 'depositHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.depositHistory();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
