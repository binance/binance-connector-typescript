import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/enableFuturesForSubAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Enable Futures for Sub-account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Enable Futures for Sub-account', async () => {
        const spy = jest.spyOn(client, 'enableFuturesForSubAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.enableFuturesForSubAccount('sub.account@email.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
