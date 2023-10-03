import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/dustlog';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('DustLog', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return DustLog', async () => {
        const spy = jest.spyOn(client, 'dustlog').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.dustlog();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
