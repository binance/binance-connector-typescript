import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/oneClickArrivalDepositApply';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Switch on/off BUSD and stable coins conversion', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Switch on/off BUSD and stable coins conversion', async () => {
        const spy = jest.spyOn(client, 'oneClickArrivalDepositApply').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.oneClickArrivalDepositApply();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
