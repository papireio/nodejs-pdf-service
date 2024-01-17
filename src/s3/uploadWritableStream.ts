import * as stream from 'stream'

export const uploadWritableStream = (readableStream: stream.Readable): Promise<string> => {
    return new Promise((resolve) => {
        readableStream.on('data', () => resolve('url://...'))
    })
}
