import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/enableFastWithdrawSwitch';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Enable Fast Withdraw Switch', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Enable Fast Withdraw Switch', async () => {
        const spy = jest.spyOn(client, 'enableFastWithdrawSwitch').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.enableFastWithdrawSwitch();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
