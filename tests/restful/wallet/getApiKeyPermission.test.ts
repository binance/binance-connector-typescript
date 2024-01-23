import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/getApiKeyPermission';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get API Key Permission', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return API Key Permission', async () => {
        const spy = jest.spyOn(client, 'getApiKeyPermission').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getApiKeyPermission();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
