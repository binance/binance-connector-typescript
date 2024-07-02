import { expect } from '@jest/globals';
import { orderListWorkingType, OrderListAboveBelowType, Side, Spot, TimeInForce } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/newOto';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('New Otoco', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return New Otoco result', async () => {
        const options = { workingTimeInForce: TimeInForce.GTC, pendingAbovePrice: 400, pendingBelowType: OrderListAboveBelowType.LIMIT_MAKER, pendingBelowPrice: 395 };
        const spy = jest.spyOn(client, 'newOtoco').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.newOtoco('BNBUSDT', orderListWorkingType.LIMIT, Side.BUY, 400, 1, Side.BUY, 1, OrderListAboveBelowType.LIMIT_MAKER, options);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
