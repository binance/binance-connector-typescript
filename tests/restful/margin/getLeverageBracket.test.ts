import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/margin/getLeverageBracket';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('Get Leverage Bracket', () => {
    const client = new Spot(apiKey, '', { baseURL: baseURL });
    it('should return Leverage Bracket', async () => {
        const spy = jest.spyOn(client, 'getLeverageBracket').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getLeverageBracket();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});