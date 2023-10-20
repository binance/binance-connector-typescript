import { expect } from '@jest/globals';
import { Interval, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/klineCandlestickData';

jest.mock('../../../src/index');

const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Kline/Candlestick Data', () => {
    const client = new Spot('', '', { baseURL: baseURL });
    it('should return Kline/Candlestick Data', async () => {
        const spy = jest.spyOn(client, 'klineCandlestickData').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.klineCandlestickData('BNBUSDT', Interval['1m']);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
