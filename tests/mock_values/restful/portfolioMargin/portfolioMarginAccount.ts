import { PortfolioAccountStatus, PortfolioAccountType, RestPortfolioMarginTypes } from '../../../../src/index';

export const mockResponse: RestPortfolioMarginTypes.portfolioMarginAccountResponse = {
    'uniMMR': '5167.92171923',
    'accountEquity': '122607.35137903',
    'actualEquity': '142607.35137903',
    'accountMaintMargin': '23.72469206',
    'accountStatus': PortfolioAccountStatus.NORMAL,
    'accountType': PortfolioAccountType.PM_1
};
