
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/portfolioMargin/portfolioMarginBankruptcyLoanAmount';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Portfolio Margin Bankruptcy Loan Amount', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should query Portfolio Margin Pro Bankruptcy Loan Amount', async () => {
        const spy = jest.spyOn(client, 'portfolioMarginBankruptcyLoanAmount').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.portfolioMarginBankruptcyLoanAmount();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
