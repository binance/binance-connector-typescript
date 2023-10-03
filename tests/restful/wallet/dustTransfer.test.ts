import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/dustTransfer';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Dust Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Dust Transfer', async () => {
        const spy = jest.spyOn(client, 'dustTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.dustTransfer(['ETH', 'XRP']);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
