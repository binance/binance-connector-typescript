export interface TradeMethods {
    startUserDataStream(): void;
    pingUserDataStream(listenKey: string): void;
    stopUserDataStream(listenKey: string): void;
}
