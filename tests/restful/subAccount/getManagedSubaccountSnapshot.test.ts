import { expect } from '@jest/globals';
import { AccountSnapshotType, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/subAccount/getManagedSubaccountSnapshot';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Query Managed Sub-account Snapshot', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return Query Managed Sub-account Snapshot', async () => {
        const spy = jest.spyOn(client, 'getManagedSubAccountSnapshot').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getManagedSubAccountSnapshot('alice@test.com', AccountSnapshotType.SPOT);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
