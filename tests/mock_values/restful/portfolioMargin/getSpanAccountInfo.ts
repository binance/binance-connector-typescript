import { RestPortfolioMarginTypes } from '../../../../src/index';

export const mockResponse: RestPortfolioMarginTypes.getSpanAccountInfoResponse = {
    'uniMMR': '5167.92171923',        
    'accountEquity': '122607.35137903',
    'actualEquity': '142607.35137903',
    'accountMaintMargin': '23.72469206',
    'riskUnitMMList':[
        {
            'asset': 'BTC',
            'uniMaintainUsd': '23.72469206'
        }
    ],
    'marginMM': '0.00000000', 
    'otherMM': '0.00000000', 
    'accountStatus': 'NORMAL',
    'accountType': 'PM_3'
};
