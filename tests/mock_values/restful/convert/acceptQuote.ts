import { ConvertOrderStatus, RestConvertTypes } from '../../../../src/index';

export const mockResponse: RestConvertTypes.acceptQuoteResponse = {
    'orderId':'933256278426274426',
    'createTime':1623381330472,
    'orderStatus':ConvertOrderStatus.PROCESS
};
