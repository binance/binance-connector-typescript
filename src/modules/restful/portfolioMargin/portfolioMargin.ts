import { Constructor } from '../../../setters/types';
import { validateRequiredParameters } from '../../../helpers/utils';
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
import { TransferSide } from '../../enum';
import { PortfolioMarginMethods } from './methods';

export function mixinPortfolioMargin<T extends Constructor>(base: T): Constructor<PortfolioMarginMethods> & T {
    return class extends base {
        /**
        * Get Portfolio Margin Pro Account Info (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Classic-Portfolio-Margin-Account-Info}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async portfolioMarginAccount(options?: portfolioMarginAccountOptions): Promise<portfolioMarginAccountResponse> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/account',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Portfolio Margin Pro Collateral Rate (MARKET_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data/Classic-Portfolio-Margin-Collateral-Rate}
        */
        async portfolioMarginCollateralRate(): Promise<portfolioMarginCollateralRateResponse[]> {
            return await this.makeRequest('GET', '/sapi/v1/portfolio/collateralRate');
        }


        /**
         * Portfolio Margin Pro Tiered Collateral Rate (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data/Portfolio-Margin-Pro-Tiered-Collateral-Rate}
         * 
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async getTieredCollateralRate(options?: getTieredCollateralRateOptions): Promise<getTieredCollateralRateResponse[]> {
            const url = this.prepareSignedPath('/sapi/v2/portfolio/collateralRate',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Portfolio Margin Pro Bankruptcy Loan Amount (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Classic-Portfolio-Margin-Bankruptcy-Loan-Amount}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async portfolioMarginBankruptcyLoanAmount(options?: portfolioMarginBankruptcyLoanAmountOptions): Promise<portfolioMarginBankruptcyLoanAmountResponse> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/pmLoan',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Portfolio Margin Bankruptcy Loan Repay (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Classic-Portfolio-Margin-Bankruptcy-Loan-Repay}
        *
        * @param {object} [options]
        * @param {PortfolioMarginFrom} [options.from] - SPOT or MARGIN，default SPOT
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async portfolioMarginBankruptcyLoanRepay(options?: portfolioMarginBankruptcyLoanRepayOptions): Promise<portfolioMarginBankruptcyLoanRepayResponse> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/repay',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Query Portfolio Margin Pro Negative Balance Interest History (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Query-Classic-Portfolio-Margin-Negative-Balance-Interest-History}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        * @param {number} [options.startTime] - UTC timestamp in ms
        * @param {number} [options.endTime] - UTC timestamp in ms
        * @param {number} [options.size] - Default:10 Max:100
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getClassicPortfolioMarginNegativeBalanceInterestHistory(options?: getClassicPortfolioMarginNegativeBalanceInterestHistoryOptions): Promise<getClassicPortfolioMarginNegativeBalanceInterestHistoryResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/interest-history',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Get Portfolio Margin Pro SPAN Account Info (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Classic-Portfolio-Margin-Account-Info-V2}
         * 
         * @param {object} [options]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async getSpanAccountInfo(options?: getSpanAccountInfoOptions): Promise<getSpanAccountInfoResponse> {
            const url = this.prepareSignedPath('/sapi/v2/portfolio/account',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
         * Get Portfolio Margin Pro Account Balance(USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Classic-Portfolio-Margin-Balance-Info}
         * 
         * @param {object} [options]
         * @param {string} [options.asset]
         * @param {number} [options.recvWindow] - The value cannot be greater than 60000
         */
        async getAccountBalance(options?: getAccountBalanceOptions): Promise<getAccountBalanceResponse[]> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/balance',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Query Portfolio Margin Asset Index Price (MARKET_DATA) {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Index-Price-and-Mark-Price}
        *
        * @param {object} [options]
        * @param {string} [options.asset]
        */
        async getPortfolioMarginAssetIndexPrice(options?: getPortfolioMarginAssetIndexPriceOptions): Promise<getPortfolioMarginAssetIndexPriceResponse[]> {
            const url = this.preparePath('/sapi/v1/portfolio/asset-index-price',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Fund Auto-collection (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Fund-Auto-collection}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async fundAutocollection(options?: fundAutocollectionOptions): Promise<fundAutocollectionResponse> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/auto-collection',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Fund Collection by Asset (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Fund-Collection-by-Asset}
        *
        * @param {string} asset
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async fundCollectionByAsset(asset: string, options?: fundCollectionByAssetOptions): Promise<fundCollectionByAssetResponse> {
            validateRequiredParameters({ asset });
            const url = this.prepareSignedPath('/sapi/v1/portfolio/asset-collection',
                Object.assign(
                    options ? options : {},
                    {
                        asset: asset.toUpperCase()
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * BNB transfer (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/BNB-transfer}
        *
        * @param {number} amount
        * @param {TransferSide} transferSide
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async bnbTransfer(amount: number, transferSide: TransferSide, options?: bnbTransferOptions): Promise<bnbTransferResponse> {
            validateRequiredParameters({ transferSide, amount });
            const url = this.prepareSignedPath('/sapi/v1/portfolio/bnb-transfer',
                Object.assign(
                    options ? options : {},
                    {
                        transferSide: transferSide,
                        amount: amount
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Change Auto-repay-futures Status (TRADE) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Change-Auto-repay-futures-Status}
        *
        * @param {boolean} autoRepay
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async changeAutorepayfuturesStatus(autoRepay: boolean, options?: changeAutorepayfuturesStatusOptions): Promise<changeAutorepayfuturesStatusResponse> {
            validateRequiredParameters({ autoRepay });
            const url = this.prepareSignedPath('/sapi/v1/portfolio/repay-futures-switch',
                Object.assign(
                    options ? options : {},
                    {
                        autoRepay: autoRepay
                    }
                )
            );
            return await this.makeRequest('POST', url);
        }


        /**
        * Get Auto-repay-futures Status (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Auto-repay-futures-Status}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async getAutorepayfuturesStatus(options?: getAutorepayfuturesStatusOptions): Promise<getAutorepayfuturesStatusResponse> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/repay-futures-switch',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }


        /**
        * Repay futures Negative Balance (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Repay-futures-Negative-Balance#http-request}
        *
        * @param {object} [options]
        * @param {number} [options.recvWindow] - The value cannot be greater than 60000
        */
        async repayFuturesNegativeBalance(options?: repayFuturesNegativeBalanceOptions): Promise<repayFuturesNegativeBalanceResponse> {
            const url = this.prepareSignedPath('/sapi/v1/portfolio/repay-futures-negative-balance',
                options ? options : {}
            );
            return await this.makeRequest('POST', url);
        }

        /**
         * Get Portfolio Margin Asset Leverage (USER_DATA) {@link https://developers.binance.com/docs/derivatives/portfolio-margin-pro/market-data/Get-Portfolio-Margin-Asset-Leverage}
         */
        async getPortfolioMarginAssetLeverage(): Promise<getPortfolioMarginAssetLeverageResponse[]> {
            return await this.makeRequest('GET', '/sapi/v1/portfolio/margin-asset-leverage');
        }
    };
}
