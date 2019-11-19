import React from "react";

// Layout
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import MoreInfo, {Info} from "../components/MoreInfo";
import CTA from "../components/CTA";

// Images
import _webbyraUrl, { ReactComponent as WebbyraIllustration } from "../images/illustrations/webbyra_hero.svg";

export default function Webbyra(){
	return (
		<Layout>
			<SEO 
				title="Inte en traditionell webbyrå" 
				description="CHJ Webblösningar är inte en traditionell webbyrå, eftersom jag inte använder Wordpress för att bygga hemsidor och erbjuder fler val CMS:er."
				url="/webbyra"
			/>

			{/* Page content */}
			<Hero
				title="Inte en vanlig webbyrå"
				illustration={<WebbyraIllustration />}
			>
			CHJ Webblösningar är inte en vanlig webbyrå, för det första är jag ensam, vilket per definition betyder att jag inte är en byrå. För det andra så använder jag mig av andra tekniker än de flesta webbyråer, jag använder inte Wordpress, jag bygger statiska sidor som är billiga att hosta på nätet.
			</Hero>

			<section className="features">
				<Intro
					title="Varför är jag annorlunda?"
				>
				Jag bygger hemsidor utifrån kundens behov. Behöver du en blogg? Det fixar jag! Behöver du en webbshop? Det fixar jag! Behöver du en kontrollpanel? Det fixar jag också, men jag bygger sidor som är billigare, snabbare och säkrare än sidorna som traditionella webbyråer bygger med Wordpress.
				</Intro>

				<MoreInfo>
					<Info title="Vad gör sidorna bättre?">
					Jag bygger statiska sidor som serveras utan en traditionell webserver. Istället ligger sidorna på en modern CDN tjänst. Att sidorna är statiska betyder dock inte att innehållet är statiskt, det kan vara lika dynamiskt som vilken annan sida som helst. Det är dock säkrare att inte använda en webserver, snabbare att inte bygga sidorna vid varje hämtning och billigare att hosta statiska sidor.
					</Info>

					<Info title="Kan jag ändra sidorna själv?">
					En av de största fördelarna med Wordpress är att det inte krävs någon programmeringskunskap för att ändra hemsidan. Men det krävs inte för att ändra mina sidor heller. Det finns en uppsjö av olika CMS verktyg att använda, och tillsammans kan vi hitta ett, eller en kombination, som passar just dina behov.
					</Info>
				</MoreInfo>
			</section>

			{/* CTA creates its own section */}
			<CTA title="Ska jag bygga er hemsida?">
			Låt mig skapa en sida som får era besökare att lyfta på ögonbrynen.
			</CTA>
		</Layout>
	)
}