import { expect } from '@jest/globals';
import { MarginBorrowRepayType, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getBorrowRepayRecords';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Margin Borrow Repay Records', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Borrow Repay Records', async () => {
        const spy = jest.spyOn(client, 'getBorrowRepayRecords').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getBorrowRepayRecords(MarginBorrowRepayType.BORROW);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
