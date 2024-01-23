import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/getAutoconvertingStableCoins';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query auto-converting stable coins', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return auto-converting stable coins', async () => {
        const spy = jest.spyOn(client, 'getAutoconvertingStableCoins').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getAutoconvertingStableCoins();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
