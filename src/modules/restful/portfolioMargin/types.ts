import { PortfolioAccountStatus, PortfolioAccountType, PortfolioMarginFrom } from '../../enum';

export interface portfolioMarginAccountOptions {
    recvWindow?: number;
}

export interface portfolioMarginAccountResponse {
    uniMMR: string;
    accountEquity: string;
    actualEquity: string;
    accountMaintMargin: string;
    accountStatus: PortfolioAccountStatus;
    accountType: PortfolioAccountType;
}

export interface portfolioMarginCollateralRateResponse {
    asset: string;
    collateralRate: string;
}

export interface portfolioMarginBankruptcyLoanAmountOptions {
    recvWindow?: number;
}

export interface portfolioMarginBankruptcyLoanAmountResponse {
    asset: string;
    amount: string;
}

export interface portfolioMarginBankruptcyLoanRepayOptions {
    from?: PortfolioMarginFrom;
    recvWindow?: number;
}

export interface portfolioMarginBankruptcyLoanRepayResponse {
    tranId: number;
}

export interface getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions {
    asset?: string;
    startTime?: number;
    endTime?: number;
    size?: number;
    recvWindow?: number;
}

export interface getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse {
    asset: string;
    interest: string;
    interestAccruedTime: number;
    interestRate: string;
    principal: string;
}

export interface getPortfolioMarginAssetIndexPriceOptions{
    asset: string;
}

export interface getPortfolioMarginAssetIndexPriceResponse {
    asset: string;
    assetIndexPrice: string;
    time: number;
}

export interface fundAutocollectionOptions {
    recvWindow?: number;
}

export interface fundAutocollectionResponse {
    msg: string;
}

export interface fundCollectionByAssetOptions {
    recvWindow?: number;
}

export interface fundCollectionByAssetResponse {
    msg: string;
}

export interface bnbTransferOptions {
    recvWindow?: number;
}

export interface bnbTransferResponse {
    tranId: number;
}

export interface changeAutorepayfuturesStatusOptions {
    recvWindow?: number;
}

export interface changeAutorepayfuturesStatusResponse {
    msg: string;
}

export interface getAutorepayfuturesStatusOptions {
    recvWindow?: number;
}

export interface getAutorepayfuturesStatusResponse {
    autoRepay: boolean;
}

export interface repayFuturesNegativeBalanceOptions {
    recvWindow?: number;
}

export interface repayFuturesNegativeBalanceResponse {
    msg: string;
}

export interface getPortfolioMarginAssetLeverageResponse {
    asset: string;
    leverage: number;
}
