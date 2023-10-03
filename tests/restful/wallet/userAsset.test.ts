import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/userAsset';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('User Asset', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return User Asset', async () => {
        const spy = jest.spyOn(client, 'userAsset').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.userAsset();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
