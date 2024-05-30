
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/placeLimitOrder';
import { ConvertExpiredType, ConvertSide } from '../../../src/index';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Place Limit Order', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should enable users to place a limit order', async () => {
        const spy = jest.spyOn(client, 'placeLimitOrder').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.placeLimitOrder('BNB', 'USDT', 1, ConvertSide.BUY, ConvertExpiredType.One_Day);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
