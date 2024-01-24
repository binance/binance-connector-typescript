import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getManagedSubAccountTransferLogForTradeParent';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Managed Sub-account Transfer log trade Parent', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Managed Sub-account Transfer log trade Parent', async () => {
        const currentTime = Date.now();
        const spy = jest.spyOn(client, 'getManagedSubAccountTransferLogForTradeParent').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getManagedSubAccountTransferLogForTradeParent('alice@test.com', (currentTime - 1000000), currentTime, 1, 10);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
