import { WebsocketAPI } from '../../../websocketAPI';
import WebSocketClient from 'ws';

export interface websocketBaseMethods {
    isConnected(): boolean;
    initConnect(url: string): void;
    disconnect(): void;
    pingServer(): void;
    send(payload: BufferLike): void;
}

export type BufferLike =
    | string
    | Buffer
    | DataView
    | number
    | ArrayBufferView
    | Uint8Array
    | ArrayBuffer
    | SharedArrayBuffer
    | ReadonlyArray<string>
    | ReadonlyArray<number>
    | { valueOf(): ArrayBuffer }
    | { valueOf(): SharedArrayBuffer }
    | { valueOf(): Uint8Array }
    | { valueOf(): ReadonlyArray<number> }
    | { valueOf(): string }
    | { [Symbol.toPrimitive](hint: string): string };

export interface WebsocketCallbacks {
    open?: (client: WebsocketAPI) => void;
    close?: () => void;
    ping?: (data?: object) => void;
    pong?: () => void;
    error?: () => void;
    message?: (data: string) => void;
}

export interface WebsocketConnection {
    ws?: WebSocketClient;
    closeInitiated?: boolean;
}

export interface WebsocketOptions {
    reconnectDelay?: number;
    callbacks?: WebsocketCallbacks;
}
