import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/addIpRestrictionForSubAccountApiKey';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Update IP Restriction for Sub-Account API key', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Update IP Restriction for Sub-Account API key', async () => {
        const spy = jest.spyOn(client, 'addIpRestrictionForSubAccountApiKey').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.addIpRestrictionForSubAccountApiKey('alice@test.com', 'subAccountApiKey', '1');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
