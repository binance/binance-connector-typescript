import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getMarginAvailableInventory';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Margin Available Inventory', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Margin Available Inventory', async () => {
        const spy = jest.spyOn(client, 'getMarginAvailableInventory').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getMarginAvailableInventory('MARGIN');
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});