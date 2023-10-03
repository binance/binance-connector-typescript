import { mockSubscription, mockResponse } from './utils/utils';

describe('#aggTrade', () => {
    it('should get aggregate trade data', () => {
        const symbol = 'BNBUSDT';
        mockSubscription(`/ws/${symbol.toLowerCase()}@aggTrade`, mockResponse);
    });
});