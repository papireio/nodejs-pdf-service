import { Readable } from 'stream'

export const uploadWritableStream = (readableStream: Readable): Promise<string> => {
    return new Promise((resolve) => {
        readableStream.on('data', () => resolve('url://...'))
    })
}
