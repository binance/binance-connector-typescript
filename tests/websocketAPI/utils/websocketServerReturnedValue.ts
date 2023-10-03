
import { mockAccountInfo } from '../../mock_values/websocket/account/account';
import { mockAccountAllocation } from '../../mock_values/websocket/account/accountAllocation';
import { mockMyTrades } from '../../mock_values/websocket/account/myTrades';
import { mockOcoOrderHistory } from '../../mock_values/websocket/account/ocoOrderHistory';
import { mockPreventedMatches } from '../../mock_values/websocket/account/preventedMatches';
import { mockOrderHistory } from '../../mock_values/websocket/account/orderHistory';
import { mockOrderLimit } from '../../mock_values/websocket/account/orderLimit';
import { mockAggTrades } from '../../mock_values/websocket/market/aggTrades';
import { mockAvgPrice } from '../../mock_values/websocket/market/avgPrice';
import { mockExchangeInformation } from '../../mock_values/websocket/market/exchangeInfo';
import { mockHistoricalTrades } from '../../mock_values/websocket/market/historicalTrades';
import { mockKlines } from '../../mock_values/websocket/market/klines';
import { mockOrderbook } from '../../mock_values/websocket/market/orderbook';
import { mockTicker } from '../../mock_values/websocket/market/ticker';
import { mockTicker24hr } from '../../mock_values/websocket/market/ticker24hr';
import { mockTickerBook } from '../../mock_values/websocket/market/tickerBook';
import { mockTickerPrice } from '../../mock_values/websocket/market/tickerPrice';
import { mockTime } from '../../mock_values/websocket/market/time';
import { mockTrades } from '../../mock_values/websocket/market/trades';
import { mockUiKlines } from '../../mock_values/websocket/market/uiKlines';
import { mockCancelOCOOrder } from '../../mock_values/websocket/trades/cancelOCOOrder';
import { mockCancelOpenOrders } from '../../mock_values/websocket/trades/cancelOpenOrders';
import { mockCancelOrder } from '../../mock_values/websocket/trades/cancelOrder';
import { mockCancelReplaceOrder } from '../../mock_values/websocket/trades/cancelReplaceOrder';
import { mockGetOCOOpenOrders } from '../../mock_values/websocket/trades/getOCOOpenOrders';
import { mockGetOCOOrder } from '../../mock_values/websocket/trades/getOCOOrder';
import { mockGetOrder } from '../../mock_values/websocket/trades/getOrder';
import { mockNewOCOOrder } from '../../mock_values/websocket/trades/newOCOOrder';
import { mockNewOrder }  from '../../mock_values/websocket/trades/newOrder';
import { mockOpenOrders }  from '../../mock_values/websocket/trades/openOrders';
import { mockStartUserDataStream }  from '../../mock_values/websocket/userData/startUserDataStream';
import { websocketRes } from './webSocketTestUtils';

export function websocketServerReturnedValue(message: object, result: websocketRes):  websocketRes {
    const data = JSON.parse(message.toString());
    switch (data.method) {
    case 'account.status':
        result.data = mockAccountInfo;
        return result;
    case 'myPreventedMatches':
        result.data = mockPreventedMatches;
        return result;
    case 'myTrades':
        result.data = mockMyTrades;
        return result;
    case 'allOrderLists':
        result.data = mockOcoOrderHistory;
        return result;
    case 'allOrders':
        result.data = mockOrderHistory;
        return result;
    case 'account.rateLimits.orders':
        result.data = mockOrderLimit;
        return result;
    case 'myAllocations':
        result.data = mockAccountAllocation;
        return result;
    case 'trades.aggregate':
        result.data = mockAggTrades;
        return result;
    case 'avgPrice':
        result.data = mockAvgPrice;
        return result;
    case 'exchangeInfo':
        result.data = mockExchangeInformation;
        return result;
    case 'trades.historical':
        result.data = mockHistoricalTrades;
        return result;
    case 'klines':
        result.data = mockKlines;
        return result;
    case 'depth':
        result.data = mockOrderbook;
        return result;
    case 'ticker':
        result.data = mockTicker;
        return result;
    case 'ticker.24hr':
        result.data = mockTicker24hr;
        return result;
    case 'ticker.book':
        result.data = mockTickerBook;
        return result;
    case 'ticker.price':
        result.data = mockTickerPrice;
        return result;
    case 'time':
        result.data = mockTime;
        return result;
    case 'trades.recent':
        result.data = mockTrades;
        return result;
    case 'uiKlines':
        result.data = mockUiKlines;
        return result;
    case 'orderList.cancel':
        result.data = mockCancelOCOOrder;
        return result;
    case 'openOrders.cancelAll':
        result.data = mockCancelOpenOrders;
        return result;
    case 'order.cancel':
        result.data = mockCancelOrder;
        return result;
    case 'order.cancelReplace':
        result.data = mockCancelReplaceOrder;
        return result;
    case 'openOrderLists.status':
        result.data = mockGetOCOOpenOrders;
        return result;
    case 'orderList.status':
        result.data = mockGetOCOOrder;
        return result;
    case 'order.status':
        result.data = mockGetOrder;
        return result;
    case 'orderList.place':
        result.data = mockNewOCOOrder;
        return result;
    case 'order.place':
        result.data = mockNewOrder;
        return result;
    case 'openOrders.status':
        result.data = mockOpenOrders;
        return result;
    case 'userDataStream.start':
        result.data = mockStartUserDataStream;
        return result;
    default:
        result.data = {};
        return result;
    }
}