import pdfmake from 'pdfmake'

import { GetInvoiceRequest } from '../../pkg'
import { HEADER_LEFT_MARGIN, INVOICE_STYLES, PRIMARY_LINE_COLOR, SECONDARY_LINE_COLOR } from '../constants'
import { Readable } from 'stream'

const getContent = (data: GetInvoiceRequest): unknown[] => {
    const result: unknown[] = [
        { text: data.vendorName, margin: [HEADER_LEFT_MARGIN, 12, 0, 8], style: ['Heading1'] },
        { text: data.vendorUuid, margin: [HEADER_LEFT_MARGIN, 0, 0, 2], style: ['Text1'] },
    ]

    if (data.vendorAddressLine1) {
        result.push({ text: data.vendorAddressLine1, margin: [HEADER_LEFT_MARGIN, 0, 0, 2], style: ['Text1'] })
    }

    if (data.vendorAddressLine2) {
        result.push({ text: data.vendorAddressLine2, margin: [HEADER_LEFT_MARGIN, 0, 0, 2], style: ['Text1'] })
    }

    if (data.vendorPhone) {
        result.push({ text: data.vendorPhone, margin: [HEADER_LEFT_MARGIN, 0, 0, 2], style: ['Text1'] })
    }

    if (data.vendorEmail) {
        result.push({ text: data.vendorEmail, margin: [HEADER_LEFT_MARGIN, 0, 0, 2], style: ['Text1'] })
    }

    result.push({
        text: '',
        margin: [0, 0, 0, 22],
    })

    result.push({
        svg: `<svg width="494" height="1" viewBox="0 0 494 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="494" y1="0.5" x2="-4.37114e-08" y2="0.499957" stroke="${SECONDARY_LINE_COLOR}"/>
        </svg>`,
        width: 520,
        margin: [0, 0, 0, 22],
    })

    result.push({
        columns: [
            {
                width: HEADER_LEFT_MARGIN,
                stack: [
                    {
                        text: data.titleCustomer,
                        style: ['Heading2'],
                        margin: [0, 0, 0, 20],
                    },
                    {
                        text: data.customerName,
                        style: ['Heading1'],
                        margin: [0, 0, 0, 8],
                    },
                    {
                        text: data.customerUuid,
                        style: ['Text1'],
                        margin: [0, 0, 0, 4],
                    },
                    {
                        text: data.customerAddressLine1,
                        style: ['Text1'],
                        margin: [0, 0, 0, 4],
                    },
                    {
                        text: data.customerAddressLine2,
                        style: ['Text1'],
                        margin: [0, 0, 0, 4],
                    },
                ],
            },
            {
                stack: [
                    {
                        text: data.titleInvoice,
                        style: ['Heading2'],
                        margin: [0, 0, 0, 20],
                    },
                    {
                        columns: [
                            {
                                width: '*',
                                stack: [
                                    {
                                        text: data.titleInvoiceNumber,
                                        style: ['Text2'],
                                        margin: [0, 0, 0, 9],
                                    },
                                    {
                                        text: data.titleInvoiceDate,
                                        style: ['Text2'],
                                        margin: [0, 0, 0, 9],
                                    },
                                    ...(data.invoiceReference
                                        ? [
                                              {
                                                  text: data.titleInvoiceReference,
                                                  style: ['Text2'],
                                                  margin: [0, 0, 0, 9],
                                              },
                                          ]
                                        : []),
                                ],
                            },
                            {
                                width: 'auto',
                                stack: [
                                    {
                                        text: data.invoiceNumber,
                                        style: ['Text2'],
                                        alignment: 'right',
                                        margin: [0, 0, 0, 9],
                                    },
                                    {
                                        text: data.invoiceDate,
                                        style: ['Text2'],
                                        alignment: 'right',
                                        margin: [0, 0, 0, 9],
                                    },
                                    ...(data.invoiceReference
                                        ? [
                                              {
                                                  text: data.invoiceReference,
                                                  style: ['Text2'],
                                                  margin: [0, 0, 0, 9],
                                              },
                                          ]
                                        : []),
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    })

    result.push({
        svg: `<svg width="494" height="1" viewBox="0 0 494 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="494" y1="0.5" x2="-4.37114e-08" y2="0.499957" stroke="${PRIMARY_LINE_COLOR}"/>
        </svg>`,
        width: 520,
        margin: [0, 22, 0, 8],
    })

    result.push({
        columns: [
            {
                width: '60%',
                text: data.titleItems,
                style: ['Text3'],
            },
            {
                text: data.titleItemsQuantity,
                style: ['Text3'],
            },
            {
                text: data.titleItemsPrice,
                style: ['Text3'],
            },
            {
                text: data.titleItemsTax,
                style: ['Text3'],
            },
            {
                width: '*',
                text: data.titleItemsTotal,
                style: ['Text3'],
                alignment: 'right',
            },
        ],
    })

    result.push({
        svg: `<svg width="494" height="1" viewBox="0 0 494 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="494" y1="0.5" x2="-4.37114e-08" y2="0.499957" stroke="${SECONDARY_LINE_COLOR}"/>
        </svg>`,
        width: 520,
        margin: [0, 8, 0, 8],
    })

    for (const item of data.items) {
        result.push({
            margin: [0, 0, 0, 8],
            columns: [
                {
                    width: '60%',
                    text: item.name,
                    style: ['Text4'],
                },
                {
                    text: item.quantity,
                    style: ['Text4'],
                },
                {
                    text: item.price,
                    style: ['Text4'],
                },
                {
                    text: item.tax,
                    style: ['Text4'],
                },
                {
                    width: '*',
                    text: item.total,
                    style: ['Text4'],
                    alignment: 'right',
                },
            ],
        })
    }

    result.push({
        svg: `<svg width="494" height="1" viewBox="0 0 494 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="494" y1="0.5" x2="-4.37114e-08" y2="0.499957" stroke="${PRIMARY_LINE_COLOR}"/>
        </svg>`,
        width: 520,
        margin: [0, 122, 0, 16],
    })

    result.push({
        margin: [HEADER_LEFT_MARGIN, 0, 0, 0],
        columns: [
            {
                width: '*',
                stack: [
                    {
                        text: data.titleTaxBase,
                        style: ['Text5'],
                        margin: [0, 0, 0, 8],
                    },
                    {
                        text: data.titleTaxValue,
                        style: ['Text5'],
                        margin: [0, 0, 0, 8],
                    },
                ],
            },
            {
                width: '*',
                stack: [
                    {
                        text: data.taxBase,
                        style: ['Text4'],
                        alignment: 'right',
                        margin: [0, 0, 0, 8],
                    },
                    {
                        text: data.taxValue,
                        style: ['Text4'],
                        alignment: 'right',
                        margin: [0, 0, 0, 8],
                    },
                ],
            },
        ],
    })

    result.push({
        svg: `<svg width="220" height="1" viewBox="0 0 220 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="220" y1="0.5" x2="4.37114e-08" y2="0.500019" stroke="${PRIMARY_LINE_COLOR}"/>
        </svg>
        `,
        width: 220,
        margin: [HEADER_LEFT_MARGIN, 8, 0, 16],
    })

    result.push({
        margin: [HEADER_LEFT_MARGIN, 0, 0, 0],
        columns: [
            {
                width: '*',
                stack: [
                    {
                        text: data.titleTotal,
                        style: ['Text6'],
                        margin: [0, 0, 0, 8],
                    },
                ],
            },
            {
                width: '*',
                stack: [
                    {
                        text: data.total,
                        style: ['Text7'],
                        alignment: 'right',
                        margin: [0, 0, 0, 8],
                    },
                ],
            },
        ],
    })

    result.push({
        svg: `<svg width="494" height="1" viewBox="0 0 494 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="494" y1="0.5" x2="-4.37114e-08" y2="0.499957" stroke="${SECONDARY_LINE_COLOR}"/>
        </svg>`,
        width: 520,
        margin: [0, 48, 0, 22],
    })

    result.push({
        text: data.titlePaymentMethod,
        style: ['Heading1'],
        margin: [0, 0, 0, 6],
    })

    result.push({
        text: data.paymentMethod,
        style: ['Text8'],
    })

    result.push({
        svg: `<svg width="494" height="1" viewBox="0 0 494 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="494" y1="0.5" x2="-4.37114e-08" y2="0.499957" stroke="${SECONDARY_LINE_COLOR}"/>
        </svg>`,
        width: 520,
        margin: [0, 22, 0, 22],
    })

    result.push({
        text: data.titleNotes,
        style: ['Heading1'],
        margin: [0, 0, 0, 6],
    })

    result.push({
        text: data.notes,
        style: ['Text8'],
    })

    return result
}

export const getInvoiceStream = async (data: GetInvoiceRequest): Promise<Readable> => {
    const content = getContent(data)
    const doc = pdfmake.createPdf({ content, styles: INVOICE_STYLES })
    doc.write('temp/demo.pdf')

    return doc.getStream()
}
