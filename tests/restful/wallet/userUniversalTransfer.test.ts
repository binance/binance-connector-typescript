import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/userUniversalTransfer';
import { UnivTransferType } from '../../../src/types';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('User Universal Transfer', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return User Universal Transfer', async () => {
        const spy = jest.spyOn(client, 'userUniversalTransfer').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.userUniversalTransfer(UnivTransferType.MAIN_MARGIN, 'BNB', 0.01);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
