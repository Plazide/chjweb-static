import React from 'react'

// Layout
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import MoreInfo, { Info } from "../../components/MoreInfo";
import CTA from "../../components/CTA";

// Images
import seoHeroUrl from "../../images/illustrations/seo_hero.svg";

export default function SEOPage() {
	return (
		<Layout>
			<SEO 
				title="Sökmotoroptimering"
				description="Jag bygger naturligt sökmotoroptimerade hemsidor. Tack vare hastigheten som JAMStack för med sig, rankar sidorna bättre i sökresultat."
				url="/webbyra/seo/"
				breadcrumb={[
					{
						name: "Webbyrå",
						url: "/webbyra/"
					},
					{
						name: "SEO",
						url: "/webbyra/seo/"
					}
				]}
			/>
			<Hero
				title="Snabbhet = SEO"
				illustration={seoHeroUrl}
			>
				Hur snabbt en sida laddar är en viktig ranking faktor idag, och sidorna som jag bygger är otroligt snabba.
			</Hero>
			<section className="features">
				<Intro
				title="Ett övertag i ranking">
					När jag bygger sidor lägger jag alltid stor vikt på sökmotoroptimering. Jag bygger sidor som är lätta för sökrobotar att förstå, och som betonar era viktigaste sökord. Tack vare JAMStack får mina sidor även en boost i ranking då dem är otroligt snabba. Det här betyder att mina hemsidor har ett övertag över sidor som andra webbyråer bygger.
				</Intro>

				<MoreInfo>
					<Info
					title="Strukturerad data">
						Utöver mina hemsidors hastighet, vidtar jag flera olika åtgärder för att er sida ska prestera så bra som möjligt i sökresultaten. En av dessa åtgärder är användandet av strukturerad data. Strukturerad data hjälper din hemsida att sticka ut i sökresultaten, och som en konsekvens får den mer klick.
					</Info>

					<Info
					title="Hittar rätt nyckelord">
						Att använda rätt nyckelord är otroligt viktigt för att din hemsida ska ranka bra i sökmotorer. Att använda vanliga nyckelord kanske inte fungerar, eftersom konkurrensen är för stor. Det går inte heller att använda för ovanliga nyckelord, för det är ingen som söker på dem. Det gäller att göra efterforskningar och hitta rätt ord. Det gör jag åt er.
					</Info>
				</MoreInfo>
			</section>
			<CTA
			title="Låt mig bygga en sökmotoroptimerad hemsida">
				Låt mig bygga en sökmotoroptimerad hemsida som ger riktiga resultat
			</CTA>
		</Layout>
	)
}
