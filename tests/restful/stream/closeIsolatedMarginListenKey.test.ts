import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/stream/closeListenkey';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Close an Isolated Margin ListenKey', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });

    it('should return Close an Isolated Margin ListenKey', async () => {
        const spy = jest.spyOn(client, 'closeIsolatedMarginListenKey').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.closeIsolatedMarginListenKey('BNBUSDT', 'T3ee22BIYuWqmvne0HNq2A2WsFlEtLhvWCtItw6ffhhdmjifQ2tRbuKkTHhr');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
