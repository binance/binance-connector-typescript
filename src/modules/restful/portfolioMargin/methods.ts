import { TransferSide } from '../../enum';
import {
    bnbTransferOptions,
    bnbTransferResponse,
    changeAutorepayfuturesStatusOptions,
    changeAutorepayfuturesStatusResponse,
    fundAutocollectionOptions,
    fundAutocollectionResponse,
    fundCollectionByAssetOptions,
    fundCollectionByAssetResponse,
    getAccountBalanceOptions,
    getAccountBalanceResponse,
    getAutorepayfuturesStatusOptions,
    getAutorepayfuturesStatusResponse,
    getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions,
    getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse,
    getPortfolioMarginAssetIndexPriceOptions,
    getPortfolioMarginAssetIndexPriceResponse,
    getPortfolioMarginAssetLeverageResponse,
    getSpanAccountInfoOptions,
    getSpanAccountInfoResponse,
    getTieredCollateralRateOptions,
    getTieredCollateralRateResponse,
    portfolioMarginAccountOptions,
    portfolioMarginAccountResponse,
    portfolioMarginBankruptcyLoanAmountOptions,
    portfolioMarginBankruptcyLoanAmountResponse,
    portfolioMarginBankruptcyLoanRepayOptions,
    portfolioMarginBankruptcyLoanRepayResponse,
    portfolioMarginCollateralRateResponse,
    repayFuturesNegativeBalanceOptions,
    repayFuturesNegativeBalanceResponse
} from './types';

export interface PortfolioMarginMethods {
    portfolioMarginAccount(options?: portfolioMarginAccountOptions): Promise<portfolioMarginAccountResponse>;
    portfolioMarginCollateralRate(): Promise<portfolioMarginCollateralRateResponse[]>;
    getTieredCollateralRate(options?: getTieredCollateralRateOptions): Promise<getTieredCollateralRateResponse[]>;
    portfolioMarginBankruptcyLoanAmount(options?: portfolioMarginBankruptcyLoanAmountOptions): Promise<portfolioMarginBankruptcyLoanAmountResponse>;
    portfolioMarginBankruptcyLoanRepay(options?: portfolioMarginBankruptcyLoanRepayOptions): Promise<portfolioMarginBankruptcyLoanRepayResponse>;
    getClassicPortfolioMarginNegativeBalanceInterestHistory(options?: getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions): Promise<getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse[]>;
    getSpanAccountInfo(options?: getSpanAccountInfoOptions): Promise<getSpanAccountInfoResponse>;
    getAccountBalance(options?: getAccountBalanceOptions): Promise<getAccountBalanceResponse[]>;
    getPortfolioMarginAssetIndexPrice(options?: getPortfolioMarginAssetIndexPriceOptions): Promise<getPortfolioMarginAssetIndexPriceResponse[]>;
    fundAutocollection(options?: fundAutocollectionOptions): Promise<fundAutocollectionResponse>;
    fundCollectionByAsset(asset: string, options?: fundCollectionByAssetOptions): Promise<fundCollectionByAssetResponse>;
    bnbTransfer(amount: number, transferSide: TransferSide, options?: bnbTransferOptions): Promise<bnbTransferResponse>;
    changeAutorepayfuturesStatus(autoRepay: boolean, options?: changeAutorepayfuturesStatusOptions): Promise<changeAutorepayfuturesStatusResponse>;
    getAutorepayfuturesStatus(options?: getAutorepayfuturesStatusOptions): Promise<getAutorepayfuturesStatusResponse>;
    repayFuturesNegativeBalance(options?: repayFuturesNegativeBalanceOptions): Promise<repayFuturesNegativeBalanceResponse>;
    getPortfolioMarginAssetLeverage(): Promise<getPortfolioMarginAssetLeverageResponse[]>;
}
