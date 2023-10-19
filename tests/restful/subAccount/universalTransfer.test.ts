import { expect } from '@jest/globals';
import { mockResponse } from '../../mock_values/restful/subAccount/universalTransfer';
import { FromAccountType, Spot, ToAccountType } from '../../../src/index';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Universal Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Universal Transfer', async () => {
        const spy = jest.spyOn(client, 'universalTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.universalTransfer(FromAccountType.SPOT, ToAccountType.USDT_FUTURE, 'USDT', 0.1);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
