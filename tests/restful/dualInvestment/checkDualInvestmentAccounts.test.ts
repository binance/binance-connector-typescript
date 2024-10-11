
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/dualInvestment/checkDualInvestmentAccounts';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Check Dual Investment accounts', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return Check Dual Investment accounts ', async () => {
        const spy = jest.spyOn(client, 'checkDualInvestmentAccounts').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.checkDualInvestmentAccounts();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
