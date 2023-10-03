import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/stream/createListenkey';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Create a ListenKey', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });

    it('should return Create a ListenKey', async () => {
        const spy = jest.spyOn(client, 'createListenKey').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.createListenKey();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
