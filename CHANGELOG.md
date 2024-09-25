# Changelog

## 0.3.10 - 2024-08-19
### Changed
- Updated dependencies

## 0.3.9 - 2024-07-02

### Added
- `POST /api/v3/orderList/oto`
- `POST /api/v3/orderList/otoco`

### Changed
- Updated dependencies
- Updated `Restful` OCO trade deprecated endpoint `POST /api/v3/order/oco` to `POST /api/v3/orderList/oco`
- Updated `Websocket API` OCO trade deprecated endpoint `orderList.place` to `orderList.place.oco`
- Updated `updateIpRestrictionForSubAccountApiKey` function typo to `addIpRestrictionForSubAccountApiKey`
- Updated following enums:
  - `OCOOrderStatus` to `OrderListOrderStatus`
  - `OCOStatusType` to `OrderListStatusType`

## 0.3.8 - 2024-05-30

### Added
- `Convert`:
  - `GET /sapi/v1/convert/exchangeInfo`
  - `GET /sapi/v1/convert/assetInfo`
  - `POST /sapi/v1/convert/getQuote`
  - `POST /sapi/v1/convert/acceptQuote`
  - `GET /sapi/v1/convert/orderStatus`
  - `POST /sapi/v1/convert/limit/placeOrder`
  - `POST /sapi/v1/convert/limit/cancelOrder`
  - `GET /sapi/v1/convert/limit/queryOpenOrders`
  - `GET /sapi/v1/convert/tradeFlow`

- `Portfolio`:
  - `GET /sapi/v1/portfolio/account`
  - `GET /sapi/v1/portfolio/collateralRate`
  - `GET /sapi/v1/portfolio/pmLoan`
  - `POST /sapi/v1/portfolio/repay`
  - `GET /sapi/v1/portfolio/interest-history`
  - `GET /sapi/v1/portfolio/asset-index-price`
  - `POST /sapi/v1/portfolio/auto-collection`
  - `POST /sapi/v1/portfolio/asset-collection`
  - `POST /sapi/v1/portfolio/bnb-transfer`
  - `POST /sapi/v1/portfolio/repay-futures-switch`
  - `GET /sapi/v1/portfolio/repay-futures-switch`
  - `POST /sapi/v1/portfolio/repay-futures-negative-balance`
  - `GET /sapi/v1/portfolio/margin-asset-leverage`

### Changed
- Update dependencies
- Update `GET /api/v3/exchangeInfo` response type
- Correct `createMarginListenKey`, `renewMarginListenKey` and `closeMarginListenKey` url
- Update combined streams for websocket streams
- Update Websocket Testnet endpoint

## 0.3.7 - 2024-04-04

### Changed
- Update types
- Update dependencies
- Add logger class
- Fix issue #14: Add new `WebsocketStream` type 
- Fix issue #16: Update parameters of `GET /api/v3/ticker/tradingDay`
- Fix issue #18: Multiple websocket streams subscription are now handled

## 0.3.6 - 2024-01-24

### Added
- `POST /sapi/v1/margin/borrow-repay`
- `POST /sapi/v1/margin/manual-liquidation`
- `POST /api/v3/sor/order`
- `POST /api/v3/sor/order/test`
- `GET /sapi/v1/margin/available-inventory`
- `GET /sapi/v1/margin/borrow-repay`
- `GET /sapi/v1/margin/leverageBracket`
- `GET /api/v3/account/commission`
- `GET /api/v3/myPreventedMatches`
- `GET /api/v3/myAllocations`
- `GET /api/v3/ticker/tradingDay`

### Changed
- `GET /api/v3/avgPrice`: response has a new field `closeTime`, indicating the last trade time.
- Upgrade dependencies

### Removed
- `POST /sapi/v1/margin/dust`
- `POST /sapi/v1/margin/isolated/transfer`
- `POST /sapi/v1/margin/loan`
- `POST /sapi/v1/margin/repay`
- `POST /sapi/v1/margin/transfer`
- `GET /sapi/v1/margin/asset`
- `GET /sapi/v1/margin/dribblet`
- `GET /sapi/v1/margin/dust`
- `GET /sapi/v1/margin/isolated/pair`
- `GET /sapi/v1/margin/isolated/transfer`
- `GET /sapi/v1/margin/loan`
- `GET /sapi/v1/margin/pair`
- `GET /sapi/v1/margin/repay`

## 0.3.5 - 2024-01-10
- Add new Enums
- Update Websocket types

## 0.3.4 - 2023-11-18

- Upgrade dependencies
- Fix sentences grammar

## 0.3.3 - 2023-10-20

Upgrade dependencies

## 0.3.2 - 2023-10-20

Fix issue from previous release

## 0.3.1 - 2023-10-09

Update configuration to resolve files exported issue

## 0.3.0 - 2023-10-04

First release
