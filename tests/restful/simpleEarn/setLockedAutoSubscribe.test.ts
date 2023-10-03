
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/setLockedAutoSubscribe';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Set Locked Auto Subscribe', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should set locked auto subscribe', async () => {
        const spy = jest.spyOn(client, 'setLockedAutoSubscribe').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.setLockedAutoSubscribe('1', true);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

