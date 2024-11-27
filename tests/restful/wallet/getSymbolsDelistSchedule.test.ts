import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/getSymbolsDelistSchedule';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Symbols Delist Schedule for Spot', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return symbols delist schedule for spot', async () => {
        const spy = jest.spyOn(client, 'getSymbolsDelistSchedule').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getSymbolsDelistSchedule();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
