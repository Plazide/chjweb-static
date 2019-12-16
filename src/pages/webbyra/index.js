import React from 'react'

// Layout
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Row from "../../components/Row"
import CTA from "../../components/CTA";
import Pros, { Pro } from "../../components/Pros";

// Components
import ButtonLink from "../../components/ButtonLink";

// Images
import seoUrl from "../../images/illustrations/seo.svg";
import webbyraUrl from "../../images/illustrations/webbyra_hero.svg";
import hostingUrl from "../../images/illustrations/hosting.svg";
import shopUrl from "../../images/illustrations/shop.svg";

export default function Utveckling() {
	return (
		<Layout>
			<SEO
				title="Utveckling av hemsidor"
				description="CHJ Webblösningar utvecklar en webbplats som är snabb, snygg och billig att driva."
				url="/webbyra/"
				breadcrumb={[
					{
						name: "Webbyrå",
						url: "/webbyra/"
					}
				]}
			/>
			<Hero
				title="Framtidens hemsidor"
				illustration={webbyraUrl}
				cta={<ButtonLink href="/anlita" variant="filled">Anlita mig</ButtonLink>}
			>
				CHJ Webblösningar utvecklar hemsidor med hjälp av den senaste tekniken. Det här betyder att ni kan få en snabb, snygg och modern hemsida som är billig att driva.
			</Hero>

			<section className="features">
				<Intro
					title="Hemsidor med JAMStack"
				>
					JAMStack är en relativt ny metod för att skapa hemsidor. Själva teknologin bakom hemsidorna är inte speciell, det är den samma som alla andra. Skillnaden är att JAMStack sidor inte kräver kraftfull infrastruktur för att drivas. Till skillnad från traditionella hemsidor, som byggs ihop vid varje hämtning, är JAMStack sidor redan färdiga att serveras när användaren vill hämta dem. Det här betyder att dessa hemsidor är otroligt snabba.
				</Intro>


				<Pros title="Fördelar med JAMStack">
					<Pro title="Naturlig SEO">
					Tack vare JAMStack sidornas hastighet, har de ofta bättre sökranking än andra sidor.
					</Pro>

					<Pro title="Mycket snabbt">
					JAMStack sidor är otroligt snabba eftersom de alltid är färdiga att serveras.
					</Pro>

					<Pro title="Billigare att driva">
					Eftersom JAMStack inte kräver någon avancerad infrastruktur, är sidorna billigare att driva.
					</Pro>

					<Pro title="Flera val av CMS">
					Det finns många olika CMS:er att välja mellan, från bloggverktyg till skräddarsytt innehåll.
					</Pro>

					<Pro title="Säkrare hemsidor">
					Eftersom det inte finns någon bakomliggande server finns det ingenting att attackera.	
					</Pro>

					<Pro title="Hanterar hög trafik">
					När din hemsida får oväntat mycket trafik kommer den fortfarande fungera som vanligt, utan att du behöver öka dina resurser.
					</Pro>
				</Pros>

				<Row
					illustration={seoUrl}
					threshold={.4}
					title="Sökmotoroptimering"
					align="left"
					link="/webbyra/seo/">
					Det blir allt viktigare för dagens företag att synas på nätet. Ett effektivt sätt för att göra det är genom sökmotoroptimering (SEO). När jag bygger er hemsida kommer jag ta stor hänsyn till sökmotoroptimering, samtidigt som metoden jag använder för att bygga hemsidor ger en naturlig fördel i sökresultaten.
				</Row>

				<Row
					illustration={hostingUrl}
					title="Gratis hosting utan webbhotell"
					align="right"
					link="/webbyra/hosting/">
					En av fördelarna med hemsidor byggda på JAMStack är att de blir riktigt billiga att driva. Det krävs inget webbhotell för att hålla hemsidan på nätet, istället används en modern och kostnadseffektiv CDN tjänst. Det betyder att mindre hemsidor kan synas på nätet utan någon som helst driftkostnad.
				</Row>

				<Row 
					illustration={shopUrl} 
					link="/webbyra/webbshop/" 
					align="left"
					title="En snabbare webbshop">
					Öka försäljningen och minska era serverkostnader med en webbshop byggd på JAMStack. Snabba webbshoppar säljer mer, och det blir inte snabbare än JAMStack. Det är inte heller nödvändigt att investera i dyra servrar för att webbshopen ska vara snabb.
				</Row>
			</section>

			<CTA title="Låt mig bygga er hemsida">
				Låt mig bygga en modern hemsida åt ert företag
			</CTA>
		</Layout>
	)
}
