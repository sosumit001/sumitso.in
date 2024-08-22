import Article from "@/components/article"
import { Metadata } from "next"
import { canela_sub, canela_th } from "@/lib/fonts"


export const metadata: Metadata = {
	title: 'Explora +'
  }

const Page = () => {
	return (
		<>
			<Article heroHeaderText="Explora">
				<p className={`${canela_sub.className} text-4xl leading-[1] mt-0 text-grey`}>
				Honest takes on tech I’m still figuring out, one step at a time.
				</p>
				<p className={`${canela_th.className} text-grey py-0`}>
				This page is a reflection of the time and effort I’ve invested in understanding tech more deeply. I’ve poured countless hours into learning these topics, and I’m committed to preserving and sharing that knowledge. Here, you’ll find insights on the areas I’ve dedicated myself to mastering.
				</p>
			</Article>
		</>
	)
}

export default Page