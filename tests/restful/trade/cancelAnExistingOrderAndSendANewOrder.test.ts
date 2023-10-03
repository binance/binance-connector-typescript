import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/cancelAnExistingOrderAndSendANewOrder';
import { Side, OrderType, CancelReplaceMode } from '../../../src/types';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Cancel an Existing Order and Send a New Order', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Cancel an Existing Order and Send a New Order', async () => {
        const spy = jest.spyOn(client, 'cancelAnExistingOrderAndSendANewOrder').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.cancelAnExistingOrderAndSendANewOrder(
            'BNBUSDT',
            Side.SELL,
            OrderType.LIMIT,
            CancelReplaceMode.STOP_ON_FAILURE
        );
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
