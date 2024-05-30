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
    getAutorepayfuturesStatusOptions,
    getAutorepayfuturesStatusResponse,
    getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions,
    getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse,
    getPortfolioMarginAssetIndexPriceOptions,
    getPortfolioMarginAssetIndexPriceResponse,
    getPortfolioMarginAssetLeverageResponse,
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
    portfolioMarginBankruptcyLoanAmount(options?: portfolioMarginBankruptcyLoanAmountOptions): Promise<portfolioMarginBankruptcyLoanAmountResponse>;
    portfolioMarginBankruptcyLoanRepay(options?: portfolioMarginBankruptcyLoanRepayOptions): Promise<portfolioMarginBankruptcyLoanRepayResponse>;
    getClassicPortfolioMarginNegativeBalanceInterestHistory(options?: getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions): Promise<getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse[]>;
    getPortfolioMarginAssetIndexPrice(options?: getPortfolioMarginAssetIndexPriceOptions): Promise<getPortfolioMarginAssetIndexPriceResponse[]>;
    fundAutocollection(options?: fundAutocollectionOptions): Promise<fundAutocollectionResponse>;
    fundCollectionByAsset(asset: string, options?: fundCollectionByAssetOptions): Promise<fundCollectionByAssetResponse>;
    bnbTransfer(amount: number, transferSide: TransferSide, options?: bnbTransferOptions): Promise<bnbTransferResponse>;
    changeAutorepayfuturesStatus(autoRepay: boolean, options?: changeAutorepayfuturesStatusOptions): Promise<changeAutorepayfuturesStatusResponse>;
    getAutorepayfuturesStatus(options?: getAutorepayfuturesStatusOptions): Promise<getAutorepayfuturesStatusResponse>;
    repayFuturesNegativeBalance(options?: repayFuturesNegativeBalanceOptions): Promise<repayFuturesNegativeBalanceResponse>;
    getPortfolioMarginAssetLeverage(): Promise<getPortfolioMarginAssetLeverageResponse[]>;
}
