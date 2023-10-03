
import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/simpleEarn/getCollateralRecord';


jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Collateral Record', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

    it('should return collateral record', async () => {
        const spy = jest.spyOn(client, 'getCollateralRecord').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCollateralRecord();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});

