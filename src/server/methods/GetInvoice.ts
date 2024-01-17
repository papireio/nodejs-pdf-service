import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

import { getInvoiceStream } from '../../pdf'
import { GetInvoiceRequest, GetInvoiceResponse } from '../../pkg'
import { uploadWritableStream } from '../../s3'

export const GetInvoice = async (
    call: ServerUnaryCall<GetInvoiceRequest, GetInvoiceResponse>,
    callback: sendUnaryData<GetInvoiceResponse>,
) => {
    const pdfStream = await getInvoiceStream()
    const url = await uploadWritableStream(pdfStream)

    callback(null, { url, createdAt: 0, updatedAt: 0, size: 0 })
}
