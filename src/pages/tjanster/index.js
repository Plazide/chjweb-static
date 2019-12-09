import React from 'react'

// Layout
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import Row from "../../components/Row";

// Images
import heroIllustrationUrl from "../../images/illustrations/tjanster.svg";
import granskningIllustrationUrl from "../../images/illustrations/granskning.svg";
import fixaUrl from "../../images/illustrations/fixa.svg";
import emailUrl from "../../images/illustrations/email.svg";

export default function Tjanster() {
	return (
		<Layout>
			<SEO
				title="Tjänster"
				description="CHJ Webblösningar utvecklar en webbplats som är snabb, snygg och billig att driva."
				url="/tjanster/"
				breadcrumb={[
					{
						name: "Tjänster",
						url: "/tjanster/"
					}
				]}
			/>
			<Hero
				title="Jag hjälper er hemsida att må bra"
				illustration={heroIllustrationUrl}
			>
				Utöver att utveckla nya hemsidor, erbjuder jag även att granska er nuvarande hemsida för att hitta fel gällande prestanda, tillgänglighet och SEO. Sedan hjälper jag er att fixa det.
			</Hero>

			<section className="features">
				<Intro
				title="Mina tjänster">
					Misstänker ni att er hemsida inte presterar som den ska? Vare sig det gäller sökmotoroptimering eller prestanda så kan jag hjälpa er att identifiera problemen. Självklart hjälper jag er även att fixa de problem som jag hittar.
				</Intro>

				<Row
					illustration={granskningIllustrationUrl}
					threshold={.5}
					align="left"
					title="Kostnadsfri granskning"
					link="/tjanster/granskning">
					Det är inte roligt när man lagt både tid och pengar på en hemsida, och sedan fungerar den inte som förväntat. Därför erbjuder jag att göra en kostnadsfri granskning av er webbplats. Jag kontrollerar prestanda, tillgänglighet, sökmotoroptimering och allmän struktur på hemsidan och rapporterar alla problem som jag hittar.
				</Row>

				<Row
					illustration={fixaUrl}
					threshold={.5}
					align="right"
					title="Moderna hemsidor"
					link="/webbyra">
					Jag utvecklar moderna hemsidor som är snabba, säkra och sökmotoroptimerade. Genom att använda den senaste tekniken inom webbutveckling kan jag erbjuda hemsidor som presterar över förväntan, både när det gäller hastighet och SEO.
				</Row>

				<Row
					illustration={emailUrl}
					threshold={.5}
					align="left"
					title="E-post hosting"
					link="tjanster/email-hosting">
					Eftersom jag bygger hemsidor som inte kräver något webbhotell, så får man billigare hosting. Detta betyder dock att man går miste om e-post hosting som de flesta webbhotell har. Det gör dock ingenting, för jag erbjuder att hantera er epost genom en tredje-part.
				</Row>
			</section>
		</Layout>
	)
}
