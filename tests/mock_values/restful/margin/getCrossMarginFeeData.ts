import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getCrossMarginFeeDataResponse[] = [
    {
        'vipLevel': 0,
        'coin': 'BTC',
        'transferIn': true,
        'borrowable': true,
        'dailyInterest': '0.00026125',
        'yearlyInterest': '0.0953',
        'borrowLimit': '180',
        'marginablePairs': ['']
    }
];
