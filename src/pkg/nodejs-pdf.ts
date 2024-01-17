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

export interface InvoiceItem {
    name: string
    quantity: string
    price: string
    tax: string
    total: string
}

export interface GetInvoiceRequest {
    vendorName: string
    vendorUuid: string
    vendorAddressLine1?: string | undefined
    vendorAddressLine2?: string | undefined
    vendorPhone?: string | undefined
    vendorEmail?: string | undefined
    customerName: string
    customerUuid: string
    customerAddressLine1?: string | undefined
    customerAddressLine2?: string | undefined
    invoiceNumber: string
    invoiceDate: string
    invoiceReference?: string | undefined
    taxBase?: string | undefined
    taxValue?: string | undefined
    total: string
    paymentMethod?: string | undefined
    notes?: string | undefined
    items: InvoiceItem[]
    titleCustomer: string
    titleInvoice: string
    titleInvoiceNumber: string
    titleInvoiceDate: string
    titleInvoiceReference: string
    titleItems: string
    titleItemsQuantity: string
    titleItemsPrice: string
    titleItemsTax: string
    titleItemsTotal: string
    titleTaxBase: string
    titleTaxValue: string
    titleTotal: string
    titlePaymentMethod: string
    titleNotes: string
}

export interface GetInvoiceResponse {
    url: string
    createdAt: number
    updatedAt: number
    size: number
}

function createBaseInvoiceItem(): InvoiceItem {
    return { name: '', quantity: '', price: '', tax: '', total: '' }
}

export const InvoiceItem = {
    encode(message: InvoiceItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name)
        }
        if (message.quantity !== '') {
            writer.uint32(18).string(message.quantity)
        }
        if (message.price !== '') {
            writer.uint32(26).string(message.price)
        }
        if (message.tax !== '') {
            writer.uint32(34).string(message.tax)
        }
        if (message.total !== '') {
            writer.uint32(42).string(message.total)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InvoiceItem {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseInvoiceItem()
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break
                    }

                    message.name = reader.string()
                    continue
                case 2:
                    if (tag !== 18) {
                        break
                    }

                    message.quantity = reader.string()
                    continue
                case 3:
                    if (tag !== 26) {
                        break
                    }

                    message.price = reader.string()
                    continue
                case 4:
                    if (tag !== 34) {
                        break
                    }

                    message.tax = reader.string()
                    continue
                case 5:
                    if (tag !== 42) {
                        break
                    }

                    message.total = reader.string()
                    continue
            }
            if ((tag & 7) === 4 || tag === 0) {
                break
            }
            reader.skipType(tag & 7)
        }
        return message
    },

    fromJSON(object: any): InvoiceItem {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            quantity: isSet(object.quantity) ? globalThis.String(object.quantity) : '',
            price: isSet(object.price) ? globalThis.String(object.price) : '',
            tax: isSet(object.tax) ? globalThis.String(object.tax) : '',
            total: isSet(object.total) ? globalThis.String(object.total) : '',
        }
    },

    toJSON(message: InvoiceItem): unknown {
        const obj: any = {}
        if (message.name !== '') {
            obj.name = message.name
        }
        if (message.quantity !== '') {
            obj.quantity = message.quantity
        }
        if (message.price !== '') {
            obj.price = message.price
        }
        if (message.tax !== '') {
            obj.tax = message.tax
        }
        if (message.total !== '') {
            obj.total = message.total
        }
        return obj
    },

    create<I extends Exact<DeepPartial<InvoiceItem>, I>>(base?: I): InvoiceItem {
        return InvoiceItem.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<InvoiceItem>, I>>(object: I): InvoiceItem {
        const message = createBaseInvoiceItem()
        message.name = object.name ?? ''
        message.quantity = object.quantity ?? ''
        message.price = object.price ?? ''
        message.tax = object.tax ?? ''
        message.total = object.total ?? ''
        return message
    },
}

function createBaseGetInvoiceRequest(): GetInvoiceRequest {
    return {
        vendorName: '',
        vendorUuid: '',
        vendorAddressLine1: undefined,
        vendorAddressLine2: undefined,
        vendorPhone: undefined,
        vendorEmail: undefined,
        customerName: '',
        customerUuid: '',
        customerAddressLine1: undefined,
        customerAddressLine2: undefined,
        invoiceNumber: '',
        invoiceDate: '',
        invoiceReference: undefined,
        taxBase: undefined,
        taxValue: undefined,
        total: '',
        paymentMethod: undefined,
        notes: undefined,
        items: [],
        titleCustomer: '',
        titleInvoice: '',
        titleInvoiceNumber: '',
        titleInvoiceDate: '',
        titleInvoiceReference: '',
        titleItems: '',
        titleItemsQuantity: '',
        titleItemsPrice: '',
        titleItemsTax: '',
        titleItemsTotal: '',
        titleTaxBase: '',
        titleTaxValue: '',
        titleTotal: '',
        titlePaymentMethod: '',
        titleNotes: '',
    }
}

export const GetInvoiceRequest = {
    encode(message: GetInvoiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.vendorName !== '') {
            writer.uint32(10).string(message.vendorName)
        }
        if (message.vendorUuid !== '') {
            writer.uint32(18).string(message.vendorUuid)
        }
        if (message.vendorAddressLine1 !== undefined) {
            writer.uint32(26).string(message.vendorAddressLine1)
        }
        if (message.vendorAddressLine2 !== undefined) {
            writer.uint32(34).string(message.vendorAddressLine2)
        }
        if (message.vendorPhone !== undefined) {
            writer.uint32(42).string(message.vendorPhone)
        }
        if (message.vendorEmail !== undefined) {
            writer.uint32(50).string(message.vendorEmail)
        }
        if (message.customerName !== '') {
            writer.uint32(58).string(message.customerName)
        }
        if (message.customerUuid !== '') {
            writer.uint32(66).string(message.customerUuid)
        }
        if (message.customerAddressLine1 !== undefined) {
            writer.uint32(74).string(message.customerAddressLine1)
        }
        if (message.customerAddressLine2 !== undefined) {
            writer.uint32(82).string(message.customerAddressLine2)
        }
        if (message.invoiceNumber !== '') {
            writer.uint32(90).string(message.invoiceNumber)
        }
        if (message.invoiceDate !== '') {
            writer.uint32(98).string(message.invoiceDate)
        }
        if (message.invoiceReference !== undefined) {
            writer.uint32(106).string(message.invoiceReference)
        }
        if (message.taxBase !== undefined) {
            writer.uint32(114).string(message.taxBase)
        }
        if (message.taxValue !== undefined) {
            writer.uint32(122).string(message.taxValue)
        }
        if (message.total !== '') {
            writer.uint32(130).string(message.total)
        }
        if (message.paymentMethod !== undefined) {
            writer.uint32(138).string(message.paymentMethod)
        }
        if (message.notes !== undefined) {
            writer.uint32(146).string(message.notes)
        }
        for (const v of message.items) {
            InvoiceItem.encode(v!, writer.uint32(154).fork()).ldelim()
        }
        if (message.titleCustomer !== '') {
            writer.uint32(162).string(message.titleCustomer)
        }
        if (message.titleInvoice !== '') {
            writer.uint32(170).string(message.titleInvoice)
        }
        if (message.titleInvoiceNumber !== '') {
            writer.uint32(178).string(message.titleInvoiceNumber)
        }
        if (message.titleInvoiceDate !== '') {
            writer.uint32(186).string(message.titleInvoiceDate)
        }
        if (message.titleInvoiceReference !== '') {
            writer.uint32(194).string(message.titleInvoiceReference)
        }
        if (message.titleItems !== '') {
            writer.uint32(202).string(message.titleItems)
        }
        if (message.titleItemsQuantity !== '') {
            writer.uint32(210).string(message.titleItemsQuantity)
        }
        if (message.titleItemsPrice !== '') {
            writer.uint32(218).string(message.titleItemsPrice)
        }
        if (message.titleItemsTax !== '') {
            writer.uint32(226).string(message.titleItemsTax)
        }
        if (message.titleItemsTotal !== '') {
            writer.uint32(234).string(message.titleItemsTotal)
        }
        if (message.titleTaxBase !== '') {
            writer.uint32(242).string(message.titleTaxBase)
        }
        if (message.titleTaxValue !== '') {
            writer.uint32(250).string(message.titleTaxValue)
        }
        if (message.titleTotal !== '') {
            writer.uint32(258).string(message.titleTotal)
        }
        if (message.titlePaymentMethod !== '') {
            writer.uint32(266).string(message.titlePaymentMethod)
        }
        if (message.titleNotes !== '') {
            writer.uint32(274).string(message.titleNotes)
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

                    message.vendorName = reader.string()
                    continue
                case 2:
                    if (tag !== 18) {
                        break
                    }

                    message.vendorUuid = reader.string()
                    continue
                case 3:
                    if (tag !== 26) {
                        break
                    }

                    message.vendorAddressLine1 = reader.string()
                    continue
                case 4:
                    if (tag !== 34) {
                        break
                    }

                    message.vendorAddressLine2 = reader.string()
                    continue
                case 5:
                    if (tag !== 42) {
                        break
                    }

                    message.vendorPhone = reader.string()
                    continue
                case 6:
                    if (tag !== 50) {
                        break
                    }

                    message.vendorEmail = reader.string()
                    continue
                case 7:
                    if (tag !== 58) {
                        break
                    }

                    message.customerName = reader.string()
                    continue
                case 8:
                    if (tag !== 66) {
                        break
                    }

                    message.customerUuid = reader.string()
                    continue
                case 9:
                    if (tag !== 74) {
                        break
                    }

                    message.customerAddressLine1 = reader.string()
                    continue
                case 10:
                    if (tag !== 82) {
                        break
                    }

                    message.customerAddressLine2 = reader.string()
                    continue
                case 11:
                    if (tag !== 90) {
                        break
                    }

                    message.invoiceNumber = reader.string()
                    continue
                case 12:
                    if (tag !== 98) {
                        break
                    }

                    message.invoiceDate = reader.string()
                    continue
                case 13:
                    if (tag !== 106) {
                        break
                    }

                    message.invoiceReference = reader.string()
                    continue
                case 14:
                    if (tag !== 114) {
                        break
                    }

                    message.taxBase = reader.string()
                    continue
                case 15:
                    if (tag !== 122) {
                        break
                    }

                    message.taxValue = reader.string()
                    continue
                case 16:
                    if (tag !== 130) {
                        break
                    }

                    message.total = reader.string()
                    continue
                case 17:
                    if (tag !== 138) {
                        break
                    }

                    message.paymentMethod = reader.string()
                    continue
                case 18:
                    if (tag !== 146) {
                        break
                    }

                    message.notes = reader.string()
                    continue
                case 19:
                    if (tag !== 154) {
                        break
                    }

                    message.items.push(InvoiceItem.decode(reader, reader.uint32()))
                    continue
                case 20:
                    if (tag !== 162) {
                        break
                    }

                    message.titleCustomer = reader.string()
                    continue
                case 21:
                    if (tag !== 170) {
                        break
                    }

                    message.titleInvoice = reader.string()
                    continue
                case 22:
                    if (tag !== 178) {
                        break
                    }

                    message.titleInvoiceNumber = reader.string()
                    continue
                case 23:
                    if (tag !== 186) {
                        break
                    }

                    message.titleInvoiceDate = reader.string()
                    continue
                case 24:
                    if (tag !== 194) {
                        break
                    }

                    message.titleInvoiceReference = reader.string()
                    continue
                case 25:
                    if (tag !== 202) {
                        break
                    }

                    message.titleItems = reader.string()
                    continue
                case 26:
                    if (tag !== 210) {
                        break
                    }

                    message.titleItemsQuantity = reader.string()
                    continue
                case 27:
                    if (tag !== 218) {
                        break
                    }

                    message.titleItemsPrice = reader.string()
                    continue
                case 28:
                    if (tag !== 226) {
                        break
                    }

                    message.titleItemsTax = reader.string()
                    continue
                case 29:
                    if (tag !== 234) {
                        break
                    }

                    message.titleItemsTotal = reader.string()
                    continue
                case 30:
                    if (tag !== 242) {
                        break
                    }

                    message.titleTaxBase = reader.string()
                    continue
                case 31:
                    if (tag !== 250) {
                        break
                    }

                    message.titleTaxValue = reader.string()
                    continue
                case 32:
                    if (tag !== 258) {
                        break
                    }

                    message.titleTotal = reader.string()
                    continue
                case 33:
                    if (tag !== 266) {
                        break
                    }

                    message.titlePaymentMethod = reader.string()
                    continue
                case 34:
                    if (tag !== 274) {
                        break
                    }

                    message.titleNotes = reader.string()
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
        return {
            vendorName: isSet(object.vendorName) ? globalThis.String(object.vendorName) : '',
            vendorUuid: isSet(object.vendorUuid) ? globalThis.String(object.vendorUuid) : '',
            vendorAddressLine1: isSet(object.vendorAddressLine1)
                ? globalThis.String(object.vendorAddressLine1)
                : undefined,
            vendorAddressLine2: isSet(object.vendorAddressLine2)
                ? globalThis.String(object.vendorAddressLine2)
                : undefined,
            vendorPhone: isSet(object.vendorPhone) ? globalThis.String(object.vendorPhone) : undefined,
            vendorEmail: isSet(object.vendorEmail) ? globalThis.String(object.vendorEmail) : undefined,
            customerName: isSet(object.customerName) ? globalThis.String(object.customerName) : '',
            customerUuid: isSet(object.customerUuid) ? globalThis.String(object.customerUuid) : '',
            customerAddressLine1: isSet(object.customerAddressLine1)
                ? globalThis.String(object.customerAddressLine1)
                : undefined,
            customerAddressLine2: isSet(object.customerAddressLine2)
                ? globalThis.String(object.customerAddressLine2)
                : undefined,
            invoiceNumber: isSet(object.invoiceNumber) ? globalThis.String(object.invoiceNumber) : '',
            invoiceDate: isSet(object.invoiceDate) ? globalThis.String(object.invoiceDate) : '',
            invoiceReference: isSet(object.invoiceReference) ? globalThis.String(object.invoiceReference) : undefined,
            taxBase: isSet(object.taxBase) ? globalThis.String(object.taxBase) : undefined,
            taxValue: isSet(object.taxValue) ? globalThis.String(object.taxValue) : undefined,
            total: isSet(object.total) ? globalThis.String(object.total) : '',
            paymentMethod: isSet(object.paymentMethod) ? globalThis.String(object.paymentMethod) : undefined,
            notes: isSet(object.notes) ? globalThis.String(object.notes) : undefined,
            items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => InvoiceItem.fromJSON(e)) : [],
            titleCustomer: isSet(object.titleCustomer) ? globalThis.String(object.titleCustomer) : '',
            titleInvoice: isSet(object.titleInvoice) ? globalThis.String(object.titleInvoice) : '',
            titleInvoiceNumber: isSet(object.titleInvoiceNumber) ? globalThis.String(object.titleInvoiceNumber) : '',
            titleInvoiceDate: isSet(object.titleInvoiceDate) ? globalThis.String(object.titleInvoiceDate) : '',
            titleInvoiceReference: isSet(object.titleInvoiceReference)
                ? globalThis.String(object.titleInvoiceReference)
                : '',
            titleItems: isSet(object.titleItems) ? globalThis.String(object.titleItems) : '',
            titleItemsQuantity: isSet(object.titleItemsQuantity) ? globalThis.String(object.titleItemsQuantity) : '',
            titleItemsPrice: isSet(object.titleItemsPrice) ? globalThis.String(object.titleItemsPrice) : '',
            titleItemsTax: isSet(object.titleItemsTax) ? globalThis.String(object.titleItemsTax) : '',
            titleItemsTotal: isSet(object.titleItemsTotal) ? globalThis.String(object.titleItemsTotal) : '',
            titleTaxBase: isSet(object.titleTaxBase) ? globalThis.String(object.titleTaxBase) : '',
            titleTaxValue: isSet(object.titleTaxValue) ? globalThis.String(object.titleTaxValue) : '',
            titleTotal: isSet(object.titleTotal) ? globalThis.String(object.titleTotal) : '',
            titlePaymentMethod: isSet(object.titlePaymentMethod) ? globalThis.String(object.titlePaymentMethod) : '',
            titleNotes: isSet(object.titleNotes) ? globalThis.String(object.titleNotes) : '',
        }
    },

    toJSON(message: GetInvoiceRequest): unknown {
        const obj: any = {}
        if (message.vendorName !== '') {
            obj.vendorName = message.vendorName
        }
        if (message.vendorUuid !== '') {
            obj.vendorUuid = message.vendorUuid
        }
        if (message.vendorAddressLine1 !== undefined) {
            obj.vendorAddressLine1 = message.vendorAddressLine1
        }
        if (message.vendorAddressLine2 !== undefined) {
            obj.vendorAddressLine2 = message.vendorAddressLine2
        }
        if (message.vendorPhone !== undefined) {
            obj.vendorPhone = message.vendorPhone
        }
        if (message.vendorEmail !== undefined) {
            obj.vendorEmail = message.vendorEmail
        }
        if (message.customerName !== '') {
            obj.customerName = message.customerName
        }
        if (message.customerUuid !== '') {
            obj.customerUuid = message.customerUuid
        }
        if (message.customerAddressLine1 !== undefined) {
            obj.customerAddressLine1 = message.customerAddressLine1
        }
        if (message.customerAddressLine2 !== undefined) {
            obj.customerAddressLine2 = message.customerAddressLine2
        }
        if (message.invoiceNumber !== '') {
            obj.invoiceNumber = message.invoiceNumber
        }
        if (message.invoiceDate !== '') {
            obj.invoiceDate = message.invoiceDate
        }
        if (message.invoiceReference !== undefined) {
            obj.invoiceReference = message.invoiceReference
        }
        if (message.taxBase !== undefined) {
            obj.taxBase = message.taxBase
        }
        if (message.taxValue !== undefined) {
            obj.taxValue = message.taxValue
        }
        if (message.total !== '') {
            obj.total = message.total
        }
        if (message.paymentMethod !== undefined) {
            obj.paymentMethod = message.paymentMethod
        }
        if (message.notes !== undefined) {
            obj.notes = message.notes
        }
        if (message.items?.length) {
            obj.items = message.items.map((e) => InvoiceItem.toJSON(e))
        }
        if (message.titleCustomer !== '') {
            obj.titleCustomer = message.titleCustomer
        }
        if (message.titleInvoice !== '') {
            obj.titleInvoice = message.titleInvoice
        }
        if (message.titleInvoiceNumber !== '') {
            obj.titleInvoiceNumber = message.titleInvoiceNumber
        }
        if (message.titleInvoiceDate !== '') {
            obj.titleInvoiceDate = message.titleInvoiceDate
        }
        if (message.titleInvoiceReference !== '') {
            obj.titleInvoiceReference = message.titleInvoiceReference
        }
        if (message.titleItems !== '') {
            obj.titleItems = message.titleItems
        }
        if (message.titleItemsQuantity !== '') {
            obj.titleItemsQuantity = message.titleItemsQuantity
        }
        if (message.titleItemsPrice !== '') {
            obj.titleItemsPrice = message.titleItemsPrice
        }
        if (message.titleItemsTax !== '') {
            obj.titleItemsTax = message.titleItemsTax
        }
        if (message.titleItemsTotal !== '') {
            obj.titleItemsTotal = message.titleItemsTotal
        }
        if (message.titleTaxBase !== '') {
            obj.titleTaxBase = message.titleTaxBase
        }
        if (message.titleTaxValue !== '') {
            obj.titleTaxValue = message.titleTaxValue
        }
        if (message.titleTotal !== '') {
            obj.titleTotal = message.titleTotal
        }
        if (message.titlePaymentMethod !== '') {
            obj.titlePaymentMethod = message.titlePaymentMethod
        }
        if (message.titleNotes !== '') {
            obj.titleNotes = message.titleNotes
        }
        return obj
    },

    create<I extends Exact<DeepPartial<GetInvoiceRequest>, I>>(base?: I): GetInvoiceRequest {
        return GetInvoiceRequest.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<GetInvoiceRequest>, I>>(object: I): GetInvoiceRequest {
        const message = createBaseGetInvoiceRequest()
        message.vendorName = object.vendorName ?? ''
        message.vendorUuid = object.vendorUuid ?? ''
        message.vendorAddressLine1 = object.vendorAddressLine1 ?? undefined
        message.vendorAddressLine2 = object.vendorAddressLine2 ?? undefined
        message.vendorPhone = object.vendorPhone ?? undefined
        message.vendorEmail = object.vendorEmail ?? undefined
        message.customerName = object.customerName ?? ''
        message.customerUuid = object.customerUuid ?? ''
        message.customerAddressLine1 = object.customerAddressLine1 ?? undefined
        message.customerAddressLine2 = object.customerAddressLine2 ?? undefined
        message.invoiceNumber = object.invoiceNumber ?? ''
        message.invoiceDate = object.invoiceDate ?? ''
        message.invoiceReference = object.invoiceReference ?? undefined
        message.taxBase = object.taxBase ?? undefined
        message.taxValue = object.taxValue ?? undefined
        message.total = object.total ?? ''
        message.paymentMethod = object.paymentMethod ?? undefined
        message.notes = object.notes ?? undefined
        message.items = object.items?.map((e) => InvoiceItem.fromPartial(e)) || []
        message.titleCustomer = object.titleCustomer ?? ''
        message.titleInvoice = object.titleInvoice ?? ''
        message.titleInvoiceNumber = object.titleInvoiceNumber ?? ''
        message.titleInvoiceDate = object.titleInvoiceDate ?? ''
        message.titleInvoiceReference = object.titleInvoiceReference ?? ''
        message.titleItems = object.titleItems ?? ''
        message.titleItemsQuantity = object.titleItemsQuantity ?? ''
        message.titleItemsPrice = object.titleItemsPrice ?? ''
        message.titleItemsTax = object.titleItemsTax ?? ''
        message.titleItemsTotal = object.titleItemsTotal ?? ''
        message.titleTaxBase = object.titleTaxBase ?? ''
        message.titleTaxValue = object.titleTaxValue ?? ''
        message.titleTotal = object.titleTotal ?? ''
        message.titlePaymentMethod = object.titlePaymentMethod ?? ''
        message.titleNotes = object.titleNotes ?? ''
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
