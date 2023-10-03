import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/stream/createListenkey';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Create an Isolated Margin ListenKey', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });

    it('should return Create an Isolated Margin ListenKey', async () => {
        const spy = jest.spyOn(client, 'createIsolatedMarginListenKey').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.createIsolatedMarginListenKey('BNBUSDT');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
