# Changelog

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
