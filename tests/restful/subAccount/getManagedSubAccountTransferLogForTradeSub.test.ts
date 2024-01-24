import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getManagedSubAccountTransferLogForTradeSub';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Managed Sub-account Transfer log for TradeSub', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Managed Sub-account Transfer log for TradeSub', async () => {
        const currentTime = Date.now();
        const spy = jest.spyOn(client, 'getManagedSubAccountTransferLogForTradeSub').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getManagedSubAccountTransferLogForTradeSub((currentTime - 1000000), currentTime, 1, 10);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
