
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/dualInvestment/getDualInvestmentProductList';
import { OptionType } from '../../../src/index';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Dual Investment product list', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return Get Dual Investment product list ', async () => {
        const spy = jest.spyOn(client, 'getDualInvestmentProductList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getDualInvestmentProductList(OptionType.CALL, 'USDT', 'BNB');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
