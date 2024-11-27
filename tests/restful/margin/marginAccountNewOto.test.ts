import { expect } from '@jest/globals';
import {
    OrderListWorkingType,
    OtoPendingType,
    Side,
    TimeInForce,
    Spot,
    RestMarginTypes
} from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginAccountNewOto';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Account New OTO', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    const options: RestMarginTypes.marginAccountNewOtoOptions = {
        workingTimeInForce: TimeInForce.GTC,
        pendingPrice: 50000,
        pendingTimeInForce: TimeInForce.GTC,
        recvWindow: 5000,
    };
    it('should return Margin Account New OTO Order', async () => {
        const spy = jest.spyOn(client, 'marginAccountNewOto').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginAccountNewOto(
            'BTCUSDT',
            OrderListWorkingType.LIMIT,
            Side.SELL,
            80000,
            0.02,
            OtoPendingType.LIMIT,
            Side.BUY,
            0.02,
            options
        );
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
