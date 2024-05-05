import localFont from 'next/font/local'
import { Lato, Imprima } from "next/font/google"

const imprima = Imprima({
	subsets: ['latin'],
	display: 'swap',
	weight: '400'
})

const amstelvar = localFont({
	src: '../../fonts/Amstelvar-Roman[wdth,wght,opsz].ttf',
	weight: '900',
	display: 'swap',
})

const amstelvar400 = localFont({
	src: '../../fonts/Amstelvar-Roman[wdth,wght,opsz].ttf',
	weight: '400',
	display: 'swap'
})

const lato = Lato({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap'
})

export {
	imprima,
	amstelvar,
	lato,
	amstelvar400
}