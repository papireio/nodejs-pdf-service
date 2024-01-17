import pdfmake from 'pdfmake'

import * as stream from 'stream'

export const getInvoiceStream = (): Promise<stream.Readable> => {
    return pdfmake.createPdf({ content: [] }).getStream()
}
