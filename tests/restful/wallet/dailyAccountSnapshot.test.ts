import { expect } from '@jest/globals';
import { AccountSnapshotType, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/wallet/dailyAccountSnapshot';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Daily Account Snapshot', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Daily Account Snapshot', async () => {
        const spy = jest.spyOn(client, 'dailyAccountSnapshot').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.dailyAccountSnapshot(AccountSnapshotType.SPOT);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
