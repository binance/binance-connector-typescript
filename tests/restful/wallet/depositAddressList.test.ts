import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/depositAddressList';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Fetch Deposit Address List With Network', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return deposit address list with network', async () => {
        const spy = jest.spyOn(client, 'depositAddressList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.depositAddressList('BNB');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
