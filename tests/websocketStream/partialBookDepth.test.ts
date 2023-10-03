import { mockSubscription, mockResponse } from './utils/utils';

describe('#partialBookDepth', () => {
    it('should get partialBookDepth data', () => {
        const symbol = 'BNBUSDT';
        const levels = 5;
        const speed = '1000ms';
        mockSubscription(`/ws/${symbol.toLowerCase()}@depth${levels}@${speed}`, mockResponse);
    });
});
