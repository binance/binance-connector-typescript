import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/marginAccountNewOco';
import { Side } from '../../../src/types';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Margin Account New OCO', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Margin Account New OCO', async () => {
        const spy = jest.spyOn(client, 'marginAccountNewOco').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.marginAccountNewOco('BNBUSDT', Side.SELL, 1, 218, 220);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
