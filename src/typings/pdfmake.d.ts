declare module 'pdfmake' {
    import * as stream from 'stream'
    export type Font = Record<string, string>
    export type Fonts = Record<string, Font>

    export type Alignment = 'right' | 'left' | 'center' | 'justify'
    export type Decoration = 'underline' | 'lineThrough' | 'overline'
    export type DecorationStyle = 'dashed' | 'dotted' | 'double' | 'wavy'

    export type StylesProps = {
        font?: string
        fontSize?: number
        fontFeatures?: string[]
        lineHeight?: number
        bold?: boolean
        italics?: boolean
        alignment?: Alignment
        characterSpacing?: number
        color?: string
        background?: string
        markerColor?: string
        decoration?: Decoration | Decoration[]
        decorationStyle?: DecorationStyle
        decorationColor?: string
    }

    export type DocDefinition = {
        content: unknown[]
        styles?: Record<string, StylesProps>
    }

    export type PDFInstance = {
        getStream: () => Promise<stream.Readable>
        write: (filename: string) => Promise<void>
    }

    export type Options = {
        fontLayoutCache?: boolean
        bufferPages?: boolean
    }

    export function addFonts(fonts: Fonts): void
    export function createPdf(definition: DocDefinition): PDFInstance
}
