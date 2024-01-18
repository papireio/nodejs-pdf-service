import { v4 as uuid } from 'uuid'

export type FileExtension = 'pdf'

export const getRandomFileName = (prefix: string, time: string, extension: FileExtension): string => {
    const rnd = uuid().slice(0, 8)

    return `${prefix}-${time}-${rnd}.${extension}`
}
