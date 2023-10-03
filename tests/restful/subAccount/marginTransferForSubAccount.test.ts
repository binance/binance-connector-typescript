import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/marginTransferForSubAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Transfer for Sub-account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Transfer for Sub-account', async () => {
        const spy = jest.spyOn(client, 'marginTransferForSubAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginTransferForSubAccount('sub.account@email.com', 'BTC', 1.01, 1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
