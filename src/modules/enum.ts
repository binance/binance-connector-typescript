export enum AccountSnapshotType {
    SPOT = 'SPOT',
    MARGIN = 'MARGIN',
    FUTURES = 'FUTURES',
}

export enum AccountType {
    MAIN = 'MAIN',
    CARD = 'CARD',
}

export enum AddLiquidityPreviewType {
    SINGLE = 'SINGLE',
    COMBINATION = 'COMBINATION',
}

export enum BusdStableCoinsConversion {
    USDC = 'USDC',
    USDP = 'USDP',
    TUSD = 'TUSD',
}

export enum CancelReplaceMode {
    ALLOW_FAILURE = 'ALLOW_FAILURE',
    STOP_ON_FAILURE = 'STOP_ON_FAILURE',
}

export enum CancelResult {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}

export enum CancelRestrictions {
    ONLY_NEW = 'ONLY_NEW',
    ONLY_PARTIALLY_FILLED = 'ONLY_PARTIALLY_FILLED'
}

export enum ConvertExpiredType {
    One_Day = '1_D',
    Three_Day = '3_D',
    Seven_Day = '7_D',
    Thirty_Day = '30_D',
}

export enum ConvertOrderStatus {
    PROCESS = 'PROCESS',
    ACCEPT_SUCCESS = 'ACCEPT_SUCCESS',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
}

export enum ConvertSide {
    BUY = 'BUY',
    SELL = 'SELL',
}

export enum CrossMarginAccountTransferType {
    TransferFromMainAccountToMarginAccount = 1,
    TransferFromMarginAccountToMainAccount = 2,
}

export enum CrossMarginAccountType {
    Margin_1 = 'Margin_1',
    Margin_2 = 'Margin_2',
}

export enum CrossMarginTrans {
    SPOT = 'SPOT',
    FUTURES = 'FUTURES',
    FIAT = 'FIAT',
    DELIVERY = 'DELIVERY',
    MINING = 'MINING',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
    FUNDING = 'FUNDING',
    MOTHER_SPOT = 'MOTHER_SPOT',
    OPTION = 'OPTION',
    SUB_SPOT = 'SUB_SPOT',
    SUB_MARGIN = 'SUB_MARGIN',
    CROSS_MARGIN = 'CROSS_MARGIN',
}

export enum DepositHistory {
    Pending = 0,
    CreditedButCannotWithdraw = 6,
    Success = 1,
}

export enum Direction {
    ADDITIONAL = 'ADDITIONAL',
    REDUCED = 'REDUCED',
}

export enum Featured {
    ALL = 'ALL',
    TRUE = 'TRUE',
}

export enum FixedAndActivityProductType {
    ACTIVITY = 'ACTIVITY',
    CUSTOMIZED_FIXED = 'CUSTOMIZED_FIXED',
}

export enum FlexibleProductStatus {
    ALL = 'ALL',
    SUBSCRIBABLE = 'SUBSCRIBABLE',
    UNSUBSCRIBABLE = 'UNSUBSCRIBABLE',
}

export enum FlexibleProductType {
    FAST = 'FAST',
    NORMAL = 'NORMAL',
}

export enum FromAccountType {
    SPOT = 'SPOT',
    USDT_FUTURE = 'USDT_FUTURE',
    COIN_FUTURE = 'COIN_FUTURE',
    MARGIN = 'MARGIN',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum FuturesType {
    USDTMarginedFutures = 1,
    COINMarginedFutures = 2,
}

export enum FuturesTransferType {
    TransferFromSubaccountSpotAccountToItsUSDT = 1,
    TransferFromSubaccountUSDT = 2,
    TransferFromSubaccountSpotAccountToItsCOIN = 3,
    TransferFromSubaccountCOIN = 4,
}

export enum DustAccountType {
    SPOT = 'SPOT',
    MARGIN = 'MARGIN',
}

export enum GetCrossMargingTransferHistoryType {
    ROLL_IN = 'ROLL_IN',
    ROLL_OUT = 'ROLL_OUT',
}

export enum HisrecStatus {
    Pending = 0,
    CreditedButCannotWithdraw = 6,
    Success = 1,
}

export enum HistoryStatus {
    EmailSent = 0,
    Cancelled = 1,
    AwaitingApproval = 2,
    Rejected = 3,
    Processing = 4,
    Failure = 5,
    Completed = 6,
}

export enum IncomeType {
    borrowIn = 'borrowIn',
    collateralSpent = 'collateralSpent',
    repayAmount = 'repayAmount',
    collateralReturn = 'collateralReturn',
    addCollateral = 'addCollateral',
    removeCollateral = 'removeCollateral',
    collateralReturnAfterLiquidation = 'collateralReturnAfterLiquidation',
}

export enum InterestBNBBurn {
    true = 'true',
    false = 'false',
}

export enum Interval {
    '1s' = '1s',
    '1m' = '1m',
    '3m' = '3m',
    '5m' = '5m',
    '15m' = '15m',
    '30m' = '30m',
    '1h' = '1h',
    '2h' = '2h',
    '4h' = '4h',
    '6h' = '6h',
    '8h' = '8h',
    '12h' = '12h',
    '1d' = '1d',
    '3d' = '3d',
    '1w' = '1w',
    '1M' = '1M',
}

export enum IsFreeze {
    true = 'true',
    false = 'false',
}

export enum IsIsolatedMargin {
    TRUE = 'TRUE',
    FALSE = 'FALSE',
}

export enum LendingType {
    DAILY = 'DAILY',
    ACTIVITY = 'ACTIVITY',
    CUSTOMIZED_FIXED = 'CUSTOMIZED_FIXED',
}

export enum LiquidityAddType {
    SINGLE = 'SINGLE',
    COMBINATION = 'COMBINATION',
}

export enum LiquidityRemoveType {
    SINGLE = 'SINGLE',
    COMBINATION = 'COMBINATION',
}

export enum LogLevel {
    NONE = '',
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error'
}

export enum MarginBorrowRepayType {
    BORROW = 'BORROW',
    REPAY = 'REPAY',
}

export enum MargintransferType {
    TransferFromMainAccountToMarginAccount = 1,
    TransferFromMarginAccountToMainAccount = 2,
}

export enum MarginTransferType {
    ROLL_IN = 'ROLL_IN',
    ROLL_OUT = 'ROLL_OUT',
}

export enum MarginStatus {
    CONFIRMED = 'CONFIRMED',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
}

export enum MarginInterestHistory {
    PERIODIC = 'PERIODIC',
    ON_BORROW = 'ON_BORROW',
    PERIODIC_CONVERTED = 'PERIODIC_CONVERTED',
    ON_BORROW_CONVERTED = 'ON_BORROW_CONVERTED',
    PORTFOLIO = 'PORTFOLIO',
}

export enum MarginArchive {
    true = 'true',
    false = 'false',
}

export enum MarginLevelStatus {
    EXCESSIVE = 'EXCESSIVE',
    NORMAL = 'NORMAL',
    MARGIN_CALL = 'MARGIN_CALL',
    PRE_LIQUIDATION = 'PRE_LIQUIDATION',
    FORCE_LIQUIDATION = 'FORCE_LIQUIDATION'
}

export enum MarginSubAccountTransferType {
    TransferFromSubaccountSpotAccountToMarginAccount = 1,
    TransferFromSubaccountMarginAccountToItsSpotAccount = 2,
}

export enum NeedBtcValuation {
    true = 'true',
    false = 'false',
}

export enum NewOrderRespType {
    ACK = 'ACK',
    RESULT = 'RESULT',
    FULL = 'FULL',
}

export enum NewOrderResult {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
    NOT_ATTEMPTED = 'NOT_ATTEMPTED'
}

export enum OrderListOrderStatus {
    EXECUTING = 'EXECUTING',
    ALL_DONE = 'ALL_DONE',
    REJECT = 'REJECT',
}

export enum OrderListAboveBelowType {
    STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',
    STOP_LOSS = 'STOP_LOSS',
    LIMIT_MAKER = 'LIMIT_MAKER'
}

export enum OcoNewOrderRespType {
    ACK = 'ACK',
    RESULT = 'RESULT',
    FULL = 'FULL',
}

export enum OrderListStatusType {
    RESPONSE = 'RESPONSE',
    EXEC_STARTED = 'EXEC_STARTED',
    ALL_DONE = 'ALL_DONE',
}

export enum Operation {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

export enum OptionalFixedAndActivityProductStatus {
    ALL = 'ALL',
    SUBSCRIBABLE = 'SUBSCRIBABLE',
    UNSUBSCRIBABLE = 'UNSUBSCRIBABLE',
}

export enum OptionalFlexibleProductStatus {
    ALL = 'ALL',
    SUBSCRIBABLE = 'SUBSCRIBABLE',
    UNSUBSCRIBABLE = 'UNSUBSCRIBABLE',
}

export enum OptionalSide {
    SELL = 'SELL',
    BUY = 'BUY',
}

export enum OptionalTransFrom {
    SPOT = 'SPOT',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum OptionalTransTo {
    SPOT = 'SPOT',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum OrderStatus {
    NEW = 'NEW',
    PENDING_NEW = 'PENDING_NEW',
    PARTIALLY_FILLED = 'PARTIALLY_FILLED',
    FILLED = 'FILLED',
    CANCELED = 'CANCELED',
    PENDING_CANCEL = 'PENDING_CANCEL',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
    EXPIRED_IN_MATCH = 'EXPIRED_IN_MATCH'
}

export enum OrderType {
    LIMIT = 'LIMIT',
    MARKET = 'MARKET',
    STOP_LOSS = 'STOP_LOSS',
    STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',
    TAKE_PROFIT = 'TAKE_PROFIT',
    TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',
    LIMIT_MAKER = 'LIMIT_MAKER',
}

export enum OtoPendingType {
    LIMIT = 'LIMIT',
    STOP_LOSS = 'STOP_LOSS',
    TAKE_PROFIT = 'TAKE_PROFIT',
    STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',
    TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',
}

export enum orderListWorkingType {
    LIMIT = 'LIMIT',
    LIMIT_MAKER = 'LIMIT_MAKER',
}

export enum Permissions {
    SPOT = 'SPOT',
    MARGIN = 'MARGIN',
    LEVERAGED = 'LEVERAGED',
    TRD_GRP_002 = 'TRD_GRP_002',
    TRD_GRP_003 = 'TRD_GRP_003',
    TRD_GRP_004 = 'TRD_GRP_004',
    TRD_GRP_005 = 'TRD_GRP_005',
    TRD_GRP_006 = 'TRD_GRP_006',
    TRD_GRP_007 = 'TRD_GRP_007',
    TRD_GRP_008 = 'TRD_GRP_008',
    TRD_GRP_009 = 'TRD_GRP_009',
    TRD_GRP_010 = 'TRD_GRP_010',
    TRD_GRP_011 = 'TRD_GRP_011',
    TRD_GRP_012 = 'TRD_GRP_012',
    TRD_GRP_013 = 'TRD_GRP_013',
}

export enum PortfolioAccountStatus {
    NORMAL = 'NORMAL',
    MARGIN_CALL = 'MARGIN_CALL',
    SUPPLY_MARGIN = 'SUPPLY_MARGIN',
    REDUCE_ONLY = 'REDUCE_ONLY',
    ACTIVE_LIQUIDATION = 'ACTIVE_LIQUIDATION',
    FORCE_LIQUIDATION = 'FORCE_LIQUIDATION',
    BANKRUPTED = 'BANKRUPTED',
}

export enum PortfolioAccountType {
    PM_1 = 'PM_1',
    PM_2 = 'PM_2',
    PM_3 = 'PM_3',
}

export enum PortfolioMarginFrom {
    SPOT = 'SPOT',
    MARGIN = 'MARGIN',
}

export enum PositionSide {
    BOTH = 'BOTH',
    LONG = 'LONG',
    SHORT = 'SHORT',
}

export enum PositionStatus {
    HOLDING = 'HOLDING',
    REDEEMED = 'REDEEMED',
}

export enum QueryConvertTransfer {
    MAIN = 'MAIN',
    CARD = 'CARD',
}

export enum QuerySubAccountList {
    true = 'true',
    false = 'false',
}

export enum RemoveLiquidityPreviewType {
    SINGLE = 'SINGLE',
    COMBINATION = 'COMBINATION',
}

export enum RedeemDestAccount {
    SPOT = 'SPOT',
    FUND = 'FUND',
    ALL = 'ALL'
}

export enum SelfTradePreventionMode {
    EXPIRE_TAKER = 'EXPIRE_TAKER',
    EXPIRE_MAKER = 'EXPIRE_MAKER',
    EXPIRE_BOTH = 'EXPIRE_BOTH',
    NONE = 'NONE'
}

export enum Side {
    SELL = 'SELL',
    BUY = 'BUY',
}

export enum SideEffectType {
    NO_SIDE_EFFECT = 'NO_SIDE_EFFECT',
    MARGIN_BUY = 'MARGIN_BUY',
    AUTO_REPAY = 'AUTO_REPAY',
    AUTO_BORROW_REPAY = 'AUTO_BORROW_REPAY',
}

export enum SimpleEarnDestAccount {
    SPOT = 'SPOT',
    FUNDING = 'FUNDING'
}

export enum SimpleEarnFlexibleRewards {
    BONUS = 'BONUS',
    REALTIME = 'REALTIME',
    REWARDS = 'REWARDS'
}

export enum SimpleEarnLockedRedemption {
    MATURE = 'MATURE',
    NEW_TRANSFERRED = 'NEW_TRANSFERRED',
    AHEAD = 'AHEAD'
}

export enum SimpleEarnSourceAccount {
    SPOT = 'SPOT',
    FUNDING = 'FUNDING',
    SPOTANDFUNDING = 'SPOTANDFUNDING'
}

export enum SimpleEarnStatus {
    SUCCESS = 'SUCCESS',
    PURCHASING = 'PURCHASING',
    FAILED = 'FAILED'
}

export enum SimpleEarnType {
    AUTO = 'AUTO',
    NORMAL ='NORMAL',
    CONVERT ='CONVERT',
    LOAN = 'LOAN',
    AI = 'AI',
    TRANSFER = 'TRANSFER'
}

export enum SortBy {
    START_TIME = 'START_TIME',
    LOT_SIZE = 'LOT_SIZE',
    INTEREST_RATE = 'INTEREST_RATE',
    DURATION = 'DURATION',
}

export enum SpotBNBBurn {
    true = 'true',
    false = 'false',
}

export enum StopLimitTimeInForce {
    GTC = 'GTC',
    FOK = 'FOK',
    IOC = 'IOC',
}

export enum SubAccountStatus {
    SUCCESS = 'SUCCESS',
    PROCESS = 'PROCESS',
    FAILURE = 'FAILURE',
}

export enum SubAccountTransferLog {
    SPOT = 'SPOT',
    USDT_FUTURE = 'USDT_FUTURE',
    COIN_FUTURE = 'COIN_FUTURE',
    MARGIN = 'MARGIN',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum SubscribeSourceAccount {
    SPOT = 'SPOT',
    FUND = 'FUND',
    ALL = 'ALL'
}

export enum SubUserHistoryType {
    TransferIn = 1,
    TransferOut = 2,
}

export enum SwapStatus {
    PendingForSwap = 0,
    Success = 1,
    Failed = 2,
}

export enum TimeInForce {
    GTC = 'GTC',
    IOC = 'IOC',
    FOK = 'FOK',
}

export enum ToAccountType {
    SPOT = 'SPOT',
    USDT_FUTURE = 'USDT_FUTURE',
    COIN_FUTURE = 'COIN_FUTURE',
    MARGIN = 'MARGIN',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum TradeType {
    BUY = 'BUY',
    SELL = 'SELL',
}

export enum TransFrom {
    SPOT = 'SPOT',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum TransferSide {
    TO_UM = 'TO_UM',
    FROM_UM = 'FROM_UM',
}

export enum TransTo {
    SPOT = 'SPOT',
    ISOLATED_MARGIN = 'ISOLATED_MARGIN',
}

export enum TransactionType {
    Deposit = '0',
    Withdraw = '1',
}

export enum UnivStatus {
    CONFIRMED = 'CONFIRMED',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
}

export enum UnivTransferType {
    MAIN_MARGIN = 'MAIN_MARGIN',
    CMFUTURE_MAIN = 'CMFUTURE_MAIN',
    MARGIN_MAIN = 'MARGIN_MAIN',
    ISOLATEDMARGIN_MARGIN = 'ISOLATEDMARGIN_MARGIN',
    MARGIN_ISOLATEDMARGIN = 'MARGIN_ISOLATEDMARGIN',
    ISOLATEDMARGIN_ISOLATEDMARGIN = 'ISOLATEDMARGIN_ISOLATEDMARGIN',
    MARGIN_FUNDING = 'MARGIN_FUNDING',
    FUNDING_MARGIN = 'FUNDING_MARGIN',
    OPTION_MAIN = 'OPTION_MAIN',
    MARGIN_OPTION = 'MARGIN_OPTION',
    OPTION_MARGIN = 'OPTION_MARGIN',
    FUNDING_OPTION = 'FUNDING_OPTION',
    OPTION_FUNDING = 'OPTION_FUNDING',
    MAIN_PORTFOLIO_MARGIN = 'MAIN_PORTFOLIO_MARGIN',
    PORTFOLIO_MARGIN_MAIN = 'PORTFOLIO_MARGIN_MAIN',
    MAIN_ISOLATED_MARGIN = 'MAIN_ISOLATED_MARGIN',
    ISOLATED_MARGIN_MAIN = 'ISOLATED_MARGIN_MAIN',
    MAIN_FUNDING = 'MAIN_FUNDING',
    FUNDING_MAIN = 'FUNDING_MAIN',
}

export enum Urgency {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

export enum ValidTime {
    '10s' = '10s',
    '30s' = '30s',
    '1m' = '1m',
    '2m' = '2m',
}

export enum WalletType {
    SPOT = 'SPOT',
    FUNDING = 'FUNDING',
}

export enum WithdrawHistory {
    EmailSent = 0,
    Cancelled = 1,
    AwaitingApproval = 2,
    Rejected = 3,
    Processing = 4,
    Failure = 5,
    Completed = 6,
}

export enum WorkingFloor {
    EXCHANGE = 'EXCHANGE',
    SOR = 'SOR',
}
