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
			CHJ Webblösningar bygger inte hemsidor bundna till ett enda CMS verktyg. Genom att använda den allra senaste tekniken inom webbutveckling kan jag erbjuda snabbare och säkrare hemsidor än vad gårdagens CMS plattformar kan göra.
			</Hero>

			<section className="features">
				<Intro
					title="Varför är jag annorlunda?"
				>
				Jag bygger hemsidor utifrån kundens behov. Behöver du en blogg? Det fixar jag! Behöver du en webbshop? Det fixar jag! Behöver du en kontrollpanel? Det fixar jag också, men jag bygger sidor som är billigare, snabbare och säkrare än sidorna som traditionella webbyråer bygger med Wordpress.
				</Intro>

				<MoreInfo>
					<Info title="Statiskt, men ändå dynamiskt">
					Jag bygger statiska sidor som serveras utan en traditionell webserver. Istället ligger sidorna på en modern CDN tjänst. Att sidorna är statiska betyder dock inte att innehållet är statiskt, det kan vara lika dynamiskt som vilken annan sida som helst. Det är dock säkrare att inte använda en webserver, snabbare att inte bygga sidorna vid varje hämtning och billigare att hosta statiska sidor.
					</Info>

					<Info title="Ändra sidorna som du vill">
					När en webbyrå bygger hemsidor med Wordpress kan man lugnt lämna över sidan till kunden och veta att de kan ändra text och innehåll själva. Det kan mina kunder också göra, men de har större valmöjligheter när det kommer till CMS verktyg.
					</Info>
				</MoreInfo>
			</section>

			{/* CTA creates its own section */}
			<CTA title="Ska jag bygga er hemsida?">
			Låt mig skapa en modern hemsida med den senaste tekniken.
			</CTA>
		</Layout>
	)
}