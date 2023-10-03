import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/enableLeverageTokenForSubAccount';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Enable Leverage Token for Sub-account', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Enable Leverage Token for Sub-account', async () => {
        const spy = jest.spyOn(client, 'enableLeverageTokenForSubAccount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.enableLeverageTokenForSubAccount('sub.account@email.com', true);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
