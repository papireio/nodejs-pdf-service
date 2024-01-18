import dayjs from 'dayjs'

export type Region = 'eu' | 'us' | string

export const enum TimeFormat {
    Eu = 'DD-MMM-YYYY-HH.mm',
    Us = 'MM-DD-YYYY HH-mm-ss',
}

export const getTimeFormat = (region?: Region): TimeFormat => {
    switch (region) {
        case 'us':
            return TimeFormat.Us

        default:
            return TimeFormat.Eu
    }
}

export const getCurrentTimestamp = (): number => dayjs().unix()

export const getCurrentTime = (region?: Region): string => {
    const format = getTimeFormat(region)

    return dayjs().format(format)
}
