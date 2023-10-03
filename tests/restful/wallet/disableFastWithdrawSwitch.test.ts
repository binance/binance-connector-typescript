import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/disableFastWithdrawSwitch';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Disable Fast Withdraw Switch', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Disable Fast Withdraw Switch', async () => {
        const spy = jest.spyOn(client, 'disableFastWithdrawSwitch').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.disableFastWithdrawSwitch();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
