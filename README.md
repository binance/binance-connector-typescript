# Binance connector in Typescript - DEPRECATED

[![npm version](https://badge.fury.io/js/@binance%2Fconnector-typescript.svg)](https://badge.fury.io/js/@binance%2Fconnector-typescript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**This repository is deprecated. Please use the new repository: [binance-connector-js](https://github.com/binance/binance-connector-js)**

This library is an easy, simple and clean connector to the [Binance public API](https://github.com/binance/binance-spot-api-docs). It is divided into three distinct endpoints:
- [RESTful API](./src/spot.ts)
- [Websocket API](./src/websocketAPI.ts)
- [Websocket Stream](./src/websocketStream.ts)


- Supported APIs:
    - `/api/*`
    - `/sapi/*`
- Inclusion of test cases and examples
- Request and response types

## Installation

```bash
npm install @binance/connector-typescript
```

## Documentation

### RESTful APIs

All REST API endpoints are linked to a unique module called [`Spot`](./src/spot.ts#L4).
To start working with the REST API, you will need to import and create the client. Keep in mind that some of the endpoints require authentication with your API credentials keys:
```typescript
import { Spot } from '@binance/connector-typescript';

const API_KEY = '';
const API_SECRET = '';
const BASE_URL = 'https://api.binance.com';

const client = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });
client.exchangeInformation().then((res) => {
    console.log(res);
}).catch(err => { console.log(err) });
```
Please look at [`examples/restful`](./examples/restful/) folder to check for more endpoints.

#### Testnet

While `/sapi/*` endpoints don't have testnet environment yet, `/api/*` endpoints can be tested in
[Spot Testnet](https://testnet.binance.vision/). You can use it by changing the base URL:

```typescript
// provide the testnet base url
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision'})
```
If base_url is not provided, it defaults to api.binance.com.

### Websockets

#### Websocket API Client

All websocket are available with the [`WebsocketAPI`](./src/websocketAPI.ts#L6) module.
To work with the websocket API, you will need to import the client and generate a callBack function to handle the messages:
```typescript
import { WebsocketAPI } from '@binance/connector-typescript';

const API_KEY = '';
const API_SECRET = '';

const callbacks = {
    open: (client: WebsocketAPI) => client.exchangeInfo(),
    close: () => console.debug('Disconnected from WebSocket server'),
    message: (data: string) => console.info(JSON.parse(data))
}
const websocketAPIClient = new WebsocketAPI(API_KEY, API_SECRET, { callbacks });
setTimeout(() => websocketAPIClient.disconnect(), 20000);
```
Please look at [`examples/websocketAPI`](./examples/websocketAPI/) folder to check for more endpoints.

#### Websocket Stream Client

All websocket streams are available with the [`WebsocketStream`](./src/websocketStream.ts#L4) module.
To work with the websocket API, you will need to import the client and generate a callBack function to handle the messages:
```typescript
import { WebsocketStream } from '@binance/connector-typescript';

const callbacks = {
  open: () => console.debug('Connected to WebSocket server'),
  close: () => console.debug('Disconnected from WebSocket server'),
  message: (data: string) => console.info(data)
}

const websocketStreamClient = new WebsocketStream({ callbacks });
websocketStreamClient.aggTrade('bnbusdt');
setTimeout(() => websocketStreamClient.disconnect(), 6000);
```
Please look at [`examples/websocketStream`](./examples/websocketStream/) folder to check for more endpoints.

## Test

```bash
npm install

npm run test
```

## Limitation

Futures and European Options APIs are not supported:

  - `/fapi/*`
  - `/dapi/*`
  - `/eapi/*`
  -  Associated Websocket Market and User Data Streams

## License
MIT
