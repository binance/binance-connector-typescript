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
import { TransferSide } from '../../enum';
import { PortfolioMarginMethods } from './methods';

export function mixinPortfolioMargin<T extends Constructor>(base: T): Constructor<PortfolioMarginMethods> & T {
    return class extends base {
        /**
        * Get Portfolio Margin Pro Account Info (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-portfolio-margin-pro-account-info-user_data}
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
        * Portfolio Margin Pro Collateral Rate (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#portfolio-margin-pro-collateral-rate-market_data}
        */
        async portfolioMarginCollateralRate(): Promise<portfolioMarginCollateralRateResponse[]> {
            return await this.makeRequest('GET', '/sapi/v1/portfolio/collateralRate');
        }


        /**
        * Query Portfolio Margin Pro Bankruptcy Loan Amount (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-portfolio-margin-pro-bankruptcy-loan-amount-user_data}
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
        * Portfolio Margin Bankruptcy Loan Repay (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#portfolio-margin-pro-bankruptcy-loan-repay}
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
        * Query Portfolio Margin Pro Negative Balance Interest History (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-portfolio-margin-pro-negative-balance-interest-history-user_data}
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
        * Query Portfolio Margin Asset Index Price (MARKET_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#query-portfolio-margin-asset-index-price-market_data}
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
        * Fund Auto-collection (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#fund-auto-collection-user_data}
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
        * Fund Collection by Asset (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#fund-collection-by-asset-user_data}
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
        * BNB transfer (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#bnb-transfer-user_data}
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
        * Change Auto-repay-futures Status (TRADE) {@link https://binance-docs.github.io/apidocs/spot/en/#change-auto-repay-futures-status-trade}
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
        * Get Auto-repay-futures Status (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-auto-repay-futures-status-user_data}
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
        * Repay futures Negative Balance (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#repay-futures-negative-balance-user_data}
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
         * Get Portfolio Margin Asset Leverage (USER_DATA) {@link https://binance-docs.github.io/apidocs/spot/en/#get-portfolio-margin-asset-leverage-user_data}
         */
        async getPortfolioMarginAssetLeverage(): Promise<getPortfolioMarginAssetLeverageResponse[]> {
            return await this.makeRequest('GET', '/sapi/v1/portfolio/margin-asset-leverage');
        }
    };
}
