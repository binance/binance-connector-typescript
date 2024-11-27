import { RestWalletTypes } from '../../../../src/index';

export const mockResponse: RestWalletTypes.getSymbolsDelistScheduleResponse[] = [
    {
        'delistTime': 1686161202000,
        'symbols': [
            'ADAUSDT',
            'BNBUSDT'
        ]
    },
    {
        'delistTime': 1686222232000,
        'symbols': [
            'ETHUSDT'
        ]
    }
];
