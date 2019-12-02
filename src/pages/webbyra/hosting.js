import React from "react";

// Layout
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import MoreInfo, {Info} from "../../components/MoreInfo";
import CTA from "../../components/CTA";

// Images
import _hostingUrl, { ReactComponent as HostingIllustration } from "../../images/illustrations/hosting_hero.svg";

export default function Hosting(){
	return (
		<Layout>
			<SEO 
				title="Gratis hosting" 
				description="CHJ Webblösningar bygger hemsidor som kan vara online utan ett traditionellt webbhotell."
				url="/hosting"
				breadcrumb={[
					{
						name: "Webbyrå",
						url: "/webbyra"
					},
					{
						name: "Hosting",
						url: "/webbyra/hosting"
					}
				]}
			/>


			{/* Page content */}
			<Hero 
				title="Ta bort webbhotellet, spara pengar"
				illustration={<HostingIllustration />}
			>
			Ja, det är sant! Det är faktiskt möjligt att ha din hemsida på nätet utan att använda traditionella webbhotell. Det krävs bara att man bygger hemsidan på rätt sätt.
			</Hero>

			<section className="features">
				<Intro
					title="Hur fungerar det?"
				>
				Att hosta en hemsida utan webbhotell är ganska enkelt, det är bara att använda rätt tjänster och bygga hemsidan på rätt sätt. Istället för att gå till ett traditionellt webbhotell och lägga sin hemsida där, använder man en modern CDN som serverar statiska sidor, alltså sådana som jag bygger.
				</Intro>

				<MoreInfo>
					<Info title="Mindre resurser">
					Anledningen till att den här metoden är billigare grundar sig i att det krävs mindre serverresurser för att servera varje sida. Det betyder att du kan betala betydligt mindre för att hålla hemsidan online. Små hemsidor kan faktiskt hostas helt gratis.
					</Info>

					<Info title="Snabbare servering">
					Eftersom att alla sidor redan är färdigbyggda vid tidpunkten då en användare ska hämta de, går det mycket snabbare att servera dem. Traditionella dynamiska sidor bygger ihop sidan vid varje hämtning, detta ökar tiden det tar att servera sidan.
					</Info>
				</MoreInfo>
			</section>

			{/* CTA creates its own section */}
			<CTA title="Vill ni minska era avgifter?">
			Låt mig skapa en hemsida som är gratis att driva.
			</CTA>
			
		</Layout>
	)
}