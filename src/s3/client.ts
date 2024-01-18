import { S3 } from '@aws-sdk/client-s3'

const client = new S3({
    forcePathStyle: false,
    endpoint: process.env.SPACES_URL,
    region: process.env.SPACES_REGION,
    credentials: {
        accessKeyId: process.env.SPACES_KEY,
        secretAccessKey: process.env.SPACES_SECRET,
    },
})

export default client
