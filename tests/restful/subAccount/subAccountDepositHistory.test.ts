import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/subAccountDepositHistory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Sub-account Deposit History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Sub-account Deposit History', async () => {
        const spy = jest.spyOn(client, 'subAccountDepositHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.subAccountDepositHistory('sub.account@email.com');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
