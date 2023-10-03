import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getManagedSubAccountDepositAddress';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Managed Sub-account Deposit Address', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Managed Sub-account Deposit Address', async () => {
        const spy = jest.spyOn(client, 'getManagedSubAccountDepositAddress').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getManagedSubAccountDepositAddress('alice@test.com', 'BTC');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
