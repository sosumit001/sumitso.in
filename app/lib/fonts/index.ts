import localFont from 'next/font/local'
import { Lato, Imprima } from "next/font/google"

const imprima = Imprima({
	subsets: ['latin'],
	display: 'swap',
	weight: '400'
})

const amstelvar = localFont({
	src: '../../fonts/Amstelvar-Roman[wdth,wght,opsz].ttf',
	weight: '400',
	display: 'swap',
})

const amstelvar400 = localFont({
	src: '../../fonts/Amstelvar-Roman[wdth,wght,opsz].ttf',
	weight: '800',
	display: 'swap'
})

const lato = Lato({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap'
})

const canela = localFont({
	src: '../../fonts/CanelaText-Bold-Trial.otf',
	weight: '800',
	display: 'swap'
})

const canela_m = localFont({
	src: '../../fonts/CanelaText-Medium-Trial.otf',
	weight: '800',
	display: 'swap'
})

const canela_regu = localFont({
	src: '../../fonts/CanelaText-Regular-Trial.otf',
	weight: '800',
	display: 'swap'
})

const canela_th = localFont({
	src: '../../fonts/CanelaText-Thin-Trial.otf',
	weight: '800',
	display: 'swap'
})

const canela_sub = localFont({
	src: '../../fonts/CanelaDeck-Thin-Trial.otf',
	weight: '800',
	display: 'swap'
})


export {
	imprima,
	amstelvar,
	lato,
	amstelvar400,
	canela,
	canela_m,
	canela_th,
	canela_regu,
	canela_sub
}