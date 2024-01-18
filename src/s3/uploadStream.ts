import { ObjectCannedACL } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'

import client from './client'
import { UploadStreamPayload } from './types'
import { Readable } from 'stream'

export const uploadStream = async (
    Body: Readable,
    Key: string,
    ACL: ObjectCannedACL = 'public-read',
): Promise<UploadStreamPayload> => {
    let size = 0

    const upload = new Upload({
        client,
        params: {
            Key,
            ACL,
            Body,
            Bucket: process.env.SPACES_BUCKED,
        },
    })

    return new Promise(async (resolve, reject) => {
        upload.on('httpUploadProgress', (progress) => {
            size = size + progress.loaded
        })

        try {
            await upload.done()
            const url = `${process.env.SPACES_CDN_URL}/${Key}`
            resolve({ url, size })
        } catch (e) {
            reject(e)
        }
    })
}
