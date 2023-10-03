import { mockSubscription, mockResponse } from './utils/utils';

describe('#diffBookDepth', () => {
    it('should get diffBookDepth data', () => {
        const symbol = 'BNBUSDT';
        const speed = '1000ms';
        mockSubscription(`/ws/${symbol.toLowerCase()}@depth@${speed}`, mockResponse);
    });
});
