import { mockSubscription, mockResponse } from './utils/utils';

describe('#trade', () => {
    it('should get trade data', () => {
        const symbol = 'BNBUSDT';
        mockSubscription(`/ws/${symbol.toLowerCase()}@trade`, mockResponse);
    });
});
