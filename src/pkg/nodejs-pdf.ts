/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from '@grpc/grpc-js'
import type {
    CallOptions,
    ClientOptions,
    ClientUnaryCall,
    handleUnaryCall,
    ServiceError,
    UntypedServiceImplementation,
} from '@grpc/grpc-js'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nodejs.pdf'

export interface GetInvoiceRequest {
    message: string
}

export interface GetInvoiceResponse {
    url: string
    createdAt: number
    updatedAt: number
    size: number
}

function createBaseGetInvoiceRequest(): GetInvoiceRequest {
    return { message: '' }
}

export const GetInvoiceRequest = {
    encode(message: GetInvoiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetInvoiceRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseGetInvoiceRequest()
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break
                    }

                    message.message = reader.string()
                    continue
            }
            if ((tag & 7) === 4 || tag === 0) {
                break
            }
            reader.skipType(tag & 7)
        }
        return message
    },

    fromJSON(object: any): GetInvoiceRequest {
        return { message: isSet(object.message) ? globalThis.String(object.message) : '' }
    },

    toJSON(message: GetInvoiceRequest): unknown {
        const obj: any = {}
        if (message.message !== '') {
            obj.message = message.message
        }
        return obj
    },

    create<I extends Exact<DeepPartial<GetInvoiceRequest>, I>>(base?: I): GetInvoiceRequest {
        return GetInvoiceRequest.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<GetInvoiceRequest>, I>>(object: I): GetInvoiceRequest {
        const message = createBaseGetInvoiceRequest()
        message.message = object.message ?? ''
        return message
    },
}

function createBaseGetInvoiceResponse(): GetInvoiceResponse {
    return { url: '', createdAt: 0, updatedAt: 0, size: 0 }
}

export const GetInvoiceResponse = {
    encode(message: GetInvoiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url)
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint32(message.createdAt)
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint32(message.updatedAt)
        }
        if (message.size !== 0) {
            writer.uint32(32).uint32(message.size)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetInvoiceResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseGetInvoiceResponse()
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break
                    }

                    message.url = reader.string()
                    continue
                case 2:
                    if (tag !== 16) {
                        break
                    }

                    message.createdAt = reader.uint32()
                    continue
                case 3:
                    if (tag !== 24) {
                        break
                    }

                    message.updatedAt = reader.uint32()
                    continue
                case 4:
                    if (tag !== 32) {
                        break
                    }

                    message.size = reader.uint32()
                    continue
            }
            if ((tag & 7) === 4 || tag === 0) {
                break
            }
            reader.skipType(tag & 7)
        }
        return message
    },

    fromJSON(object: any): GetInvoiceResponse {
        return {
            url: isSet(object.url) ? globalThis.String(object.url) : '',
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            size: isSet(object.size) ? globalThis.Number(object.size) : 0,
        }
    },

    toJSON(message: GetInvoiceResponse): unknown {
        const obj: any = {}
        if (message.url !== '') {
            obj.url = message.url
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt)
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt)
        }
        if (message.size !== 0) {
            obj.size = Math.round(message.size)
        }
        return obj
    },

    create<I extends Exact<DeepPartial<GetInvoiceResponse>, I>>(base?: I): GetInvoiceResponse {
        return GetInvoiceResponse.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<GetInvoiceResponse>, I>>(object: I): GetInvoiceResponse {
        const message = createBaseGetInvoiceResponse()
        message.url = object.url ?? ''
        message.createdAt = object.createdAt ?? 0
        message.updatedAt = object.updatedAt ?? 0
        message.size = object.size ?? 0
        return message
    },
}

export type NodePDFService = typeof NodePDFService
export const NodePDFService = {
    getInvoice: {
        path: '/nodejs.pdf.NodePDF/GetInvoice',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetInvoiceRequest) => Buffer.from(GetInvoiceRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetInvoiceRequest.decode(value),
        responseSerialize: (value: GetInvoiceResponse) => Buffer.from(GetInvoiceResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => GetInvoiceResponse.decode(value),
    },
} as const

export interface NodePDFServer extends UntypedServiceImplementation {
    getInvoice: handleUnaryCall<GetInvoiceRequest, GetInvoiceResponse>
}

export interface NodePDFClient extends Client {
    getInvoice(
        request: GetInvoiceRequest,
        callback: (error: ServiceError | null, response: GetInvoiceResponse) => void,
    ): ClientUnaryCall
    getInvoice(
        request: GetInvoiceRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: GetInvoiceResponse) => void,
    ): ClientUnaryCall
    getInvoice(
        request: GetInvoiceRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: GetInvoiceResponse) => void,
    ): ClientUnaryCall
}

export const NodePDFClient = makeGenericClientConstructor(NodePDFService, 'nodejs.pdf.NodePDF') as unknown as {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NodePDFClient
    service: typeof NodePDFService
    serviceName: string
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never }

function isSet(value: any): boolean {
    return value !== null && value !== undefined
}
