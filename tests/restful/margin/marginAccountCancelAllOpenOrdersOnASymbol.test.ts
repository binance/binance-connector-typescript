import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginAccountCancelAllOpenOrdersOnASymbol';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Account Cancel all Open Orders on a Symbol', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Account Cancel all Open Orders on a Symbol', async () => {
        const spy = jest.spyOn(client, 'marginAccountCancelAllOpenOrdersOnASymbol').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginAccountCancelAllOpenOrdersOnASymbol('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
