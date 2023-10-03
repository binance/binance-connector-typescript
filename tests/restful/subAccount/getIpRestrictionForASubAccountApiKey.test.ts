import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getIpRestrictionForASubAccountApiKey';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get IP Restriction for a Sub-account API Key', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Get IP Restriction for a Sub-account API Key', async () => {
        const spy = jest.spyOn(client, 'getIpRestrictionForASubAccountApiKey').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getIpRestrictionForASubAccountApiKey('alice@test.com', 'subAccountApiKey');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
