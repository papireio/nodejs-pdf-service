import { GetInvoice } from './methods'
import { NodePDFServer } from '../pkg'

export const serverImplementation: NodePDFServer = {
    getInvoice: GetInvoice,
}
