import { StylesProps } from 'pdfmake'

export const PRIMARY_TEXT_COLOR = '#000000'
export const SECONDARY_TEXT_COLOR = '#464646'
export const TERTIARY_TEXT_COLOR = '#7B7B7B'

export const PRIMARY_LINE_COLOR = '#7B7B7B'
export const SECONDARY_LINE_COLOR = '#F5F5F5'

export const HEADER_LEFT_MARGIN = 300

export const INVOICE_STYLES: Record<string, StylesProps> = {
    Heading1: {
        font: 'Inter',
        color: PRIMARY_TEXT_COLOR,
        fontSize: 10,
        italics: true,
    },
    Heading2: {
        font: 'Inter',
        color: TERTIARY_TEXT_COLOR,
        fontSize: 8,
        italics: true,
    },
    Text1: {
        font: 'Inter',
        color: SECONDARY_TEXT_COLOR,
        fontSize: 8,
    },
    Text2: {
        font: 'Inter',
        color: SECONDARY_TEXT_COLOR,
        fontSize: 10,
        bold: true,
    },
}
