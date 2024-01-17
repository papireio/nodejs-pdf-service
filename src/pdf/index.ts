import pdfmake from 'pdfmake'

import * as path from 'path'

pdfmake.addFonts({
    Inter: {
        normal: path.resolve(__dirname, '../../fonts/Inter/static/Inter-Regular.ttf'),
        bold: path.resolve(__dirname, '../../fonts/Inter/static/Inter-Medium.ttf'),
        italics: path.resolve(__dirname, '../../fonts/Inter/static/Inter-SemiBold.ttf'),
        bolditalics: path.resolve(__dirname, '../../fonts/Inter/static/Inter-Bold.ttf'),
    },
    Roboto: {
        normal: path.resolve(__dirname, '../../fonts/Roboto/Roboto-Regular.ttf'),
        bold: path.resolve(__dirname, '../../fonts/Roboto/Roboto-Medium.ttf'),
        italics: path.resolve(__dirname, '../../fonts/Roboto/Roboto-Italic.ttf'),
        bolditalics: path.resolve(__dirname, '../../fonts/Roboto/Roboto-MediumItalic.ttf'),
    },
})

export * from './Invoice'
