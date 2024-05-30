
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/convert/getConvertTradeHistory';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Convert Trade History', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return convert trade history ', async () => {
        const spy = jest.spyOn(client, 'getConvertTradeHistory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getConvertTradeHistory(1623824139000, 1626416139000);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
