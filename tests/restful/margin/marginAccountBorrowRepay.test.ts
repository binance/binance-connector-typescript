import { expect } from '@jest/globals';
import { MarginBorrowRepayType, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginAccountBorrowRepay';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Account Borrow Repay', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Account Borrow Repay result', async () => {
        const spy = jest.spyOn(client, 'marginAccountBorrowRepay').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginAccountBorrowRepay('BNB', 'FALSE', 'BNBUSDT', '1.0', MarginBorrowRepayType.BORROW);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
