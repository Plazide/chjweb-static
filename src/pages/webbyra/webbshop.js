import React from 'react'

// Layout
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import CTA from "../../components/CTA";
import MoreInfo, { Info } from "../../components/MoreInfo";
import Pros, { Pro } from "../../components/Pros";

// Images
import webbshopUrl from "../../images/illustrations/webbshop.svg";

export default function webbshop() {
	return (
		<Layout>
			<SEO 
				title="Skaffa webbshop"
				description="Jag bygger er webbshop eller flyttar över er befintliga webbshop till JAMStack för ökad hastighet och konvertering."
				url="/webbyra/webbshop/"
				breadcrumb={[
					{ name: "Webbyrå", url: "/webbyra/" },
					{ name: "Webbshop", url: "/webbyra/webbshop/" }
				]}
			/>
			<Hero
				title="Webbshop med JAMStack"
				illustration={webbshopUrl}>
				Med en webbshop byggd på JAMStack kommer ert företag att blomstra. En snabb webbshop betyder fler köp, och det blir inte mycket snabbare än JAMStack.
			</Hero>
			<section className="features">
				<Intro
					title="Mer försäljning med JAMStack">
					Hastigheten på en webbshop är starkt sammankopplad med hur många köp som görs på webbshopen. Ju snabbare hemsidan är, desto fler köp gör kunderna. Eftersom det inte blir mycket snabbare än JAMStack, så är det den perfekta metoden för att bygga e-handelslösningar.
				</Intro>
				<Pros
				title="JAMStack för e-handel">
					<Pro title="Fler köp">
					Tack vare JAMStack är hemsidan snabb. Ju snabbare webbshopen är, desto mer köper kunderna.
					</Pro>

					<Pro title="Väx utan problem">
					Om er webbshop skulle växa i popularitet, kommer hemsidan klara av detta utan extra resurser.
					</Pro>

					<Pro title="Perfekt för Black Friday">
					När trafiken ökar temporärt, som på Black Friday, behöver ni inte öka serverresurserna, JAMStack sidor klarar detta utan problem.
					</Pro>

					<Pro title="Bättre SEO">
					Snabba hemsidor rankar högre än långsamma. En webbshop på JAMStack kommer alltså ha ett övertag i sökresultaten.
					</Pro>

					<Pro title="Smidigare upplevelse">
					Kunder kommer uppleva webbshopen som smidig och snabb, vilket i sig betyder nöjdare kunder och fler köp.
					</Pro>

					<Pro title="Billigare att driva">
					Webbshopen kräver ingen kraftfull server eller stor databas, och kommer därför vara billigare att driva.
					</Pro>
				</Pros>

				<MoreInfo>
					<Info
						title="Flytta till JAMStack">
						Har ni en befintlig webbshop på en e-handelsplattform som Textalk eller Shopify? Då kan det vara möjligt för er att fortsätta använda deras verktyg och tjänster, men ha en separat hemsida som är snabbare och effektivare.
					</Info>

					<Info
						title="Starta webbshop">
						Funderar ni på att starta webbshop? Då kan jag hjälpa er att bygga en snabb och användarvänlig webbshop som ger resultat. Det finns flera olika verktyg i olika prisklasser som kan underlätta både utveckling och drivandet av en webbshop. Tillsammans kan vi hitta det som passar er bäst. Om vi inte hittar något, då kan bygga en helt skräddarsydd lösning efter era behov.	
					</Info>
				</MoreInfo>
			</section>

			<CTA
				title="Vill ni ha en snabb webbshop?">
				Om ni letar efter en snabb webbshop som ger resultat, då har ni hittat rätt.
			</CTA>
		</Layout>
	)
}
