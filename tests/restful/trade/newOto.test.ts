import { expect } from '@jest/globals';
import { OrderListWorkingType, OtoPendingType, Side, Spot, TimeInForce } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/newOto';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('New Oto', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return New Oto result', async () => {
        const options = { workingTimeInForce: TimeInForce.GTC, pendingPrice: 400, pendingTimeInForce: TimeInForce.GTC };
        const spy = jest.spyOn(client, 'newOto').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.newOto('BNBUSDT', OrderListWorkingType.LIMIT, Side.BUY, 400, 1, OtoPendingType.LIMIT, Side.BUY, 1, options);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
