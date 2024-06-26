import { RestConvertTypes } from '../../../../src/index';

export const mockResponse: RestConvertTypes.listAllConvertPairsResponse[] = [
    {
        'fromAsset':'BTC',
        'toAsset':'USDT',
        'fromAssetMinAmount':'0.0004',
        'fromAssetMaxAmount':'50',
        'toAssetMinAmount':'20',
        'toAssetMaxAmount':'2500000'
    }
];
