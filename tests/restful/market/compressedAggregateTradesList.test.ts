import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/compressedAggregateTradesList';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Compressed/Aggregate Trades List', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Compressed/Aggregate Trades List', async () => {
        const spy = jest.spyOn(client, 'compressedAggregateTradesList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.compressedAggregateTradesList('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
