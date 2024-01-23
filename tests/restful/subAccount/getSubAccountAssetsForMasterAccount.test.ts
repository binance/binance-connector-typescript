import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getSubAccountAssetsForMasterAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Sub-account Assets for Master Account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Sub-account Assets for Master Account', async () => {
        const spy = jest.spyOn(client, 'getSubAccountAssetsForMasterAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSubAccountAssetsForMasterAccount('alice@test.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
