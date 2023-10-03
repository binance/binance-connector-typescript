import { mockSubscription, mockResponse } from './utils/utils';

describe('#userData', () => {
    it('should get user data', () => {
        const listenKey = 'xSa9qUKlvgWqL4p1UxeDIkEn74s8IzEnasvtdrH7thyLjIeNdXmYHPfTRiar';
        mockSubscription(`/ws/${listenKey}`, mockResponse);
    });
});
