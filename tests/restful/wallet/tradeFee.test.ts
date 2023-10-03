import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/tradeFee';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Trade Fee', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Trade Fee', async () => {
        const spy = jest.spyOn(client, 'tradeFee').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.tradeFee();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
