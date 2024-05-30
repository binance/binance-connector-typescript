import { ConvertOrderStatus, RestConvertTypes } from '../../../../src/index';

export const mockResponse: RestConvertTypes.queryLimitOpenOrdersResponse = {
    'list': [
        {
            'quoteId': '18sdf87kh9df', 
            'orderId': 1150901289839, 
            'orderStatus': ConvertOrderStatus.SUCCESS, 
            'fromAsset': 'BNB', 
            'fromAmount': '10', 
            'toAsset': 'USDT', 
            'toAmount': '2317.89', 
            'ratio': '231.789', 
            'inverseRatio': '0.00431427', 
            'createTime': 1614089498000,
            'expiredTimestamp': 1614099498000
        }
    ]
};
