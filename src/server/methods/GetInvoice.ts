import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

import { getInvoiceStream } from '../../pdf'
import { GetInvoiceRequest, GetInvoiceResponse } from '../../pkg'
import { uploadStream } from '../../s3'
import { getCurrentTime, getCurrentTimestamp, getRandomFileName } from '../../utils'

export const GetInvoice = async (
    { request }: ServerUnaryCall<GetInvoiceRequest, GetInvoiceResponse>,
    callback: sendUnaryData<GetInvoiceResponse>,
) => {
    try {
        const timestamp = getCurrentTimestamp()
        const time = getCurrentTime(request.metadataClientRegion)

        const filename = getRandomFileName('Invoice', time, 'pdf')

        const stream = await getInvoiceStream(request)
        const { url, size } = await uploadStream(stream, `${request.metadataClientUuid}/${filename}`)

        callback(null, { url, createdAt: timestamp, updatedAt: timestamp, size })
    } catch (error) {
        callback(error, null)
    }
}
