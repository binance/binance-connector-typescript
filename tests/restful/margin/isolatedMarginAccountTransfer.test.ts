import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/isolatedMarginAccountTransfer';
import { TransFrom, TransTo } from '../../../src/types';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Isolated Margin Account Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Isolated Margin Account Transfer', async () => {
        const spy = jest.spyOn(client, 'isolatedMarginAccountTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.isolatedMarginAccountTransfer('BTC', 'BNBUSDT', TransFrom.SPOT, TransTo.ISOLATED_MARGIN, 1.01);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
