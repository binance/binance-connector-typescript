import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/accountApiTradingStatus';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Account API Trading Status', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Account API Trading Status', async () => {
        const spy = jest.spyOn(client, 'accountApiTradingStatus').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.accountApiTradingStatus();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
