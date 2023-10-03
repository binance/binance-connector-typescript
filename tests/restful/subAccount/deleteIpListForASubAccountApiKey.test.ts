import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/deleteIpListForASubAccountApiKey';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Delete IP List for a Sub-account API Key', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Delete IP List for a Sub-account API Key', async () => {
        const spy = jest.spyOn(client, 'deleteIpListForASubAccountApiKey').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.deleteIpListForASubAccountApiKey('alice@test.com', 'subAccountApiKey');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
