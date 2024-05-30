
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/portfolioMarginBankruptcyLoanRepay';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Portfolio Margin Bankruptcy Loan Repay', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should repay Portfolio Margin Pro Bankruptcy Loan', async () => {
        const spy = jest.spyOn(client, 'portfolioMarginBankruptcyLoanRepay').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.portfolioMarginBankruptcyLoanRepay();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
