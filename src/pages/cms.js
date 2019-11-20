import React from "react";

// Layout
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import MoreInfo, { Info } from "../components/MoreInfo";
import CTA from "../components/CTA";

// Images
import _cmsUrl, { ReactComponent as CMSIllustration } from "../images/illustrations/cms_hero.svg";

export default function CMS(){
	return (
		<Layout>
			<SEO 
				title="Valfri CMS" 
				description="CHJ Webblösningar låter er välja den CMS som passar er bäst." 
				url="/cms"
			/>

			<Hero
				title="Välj den CMS som passar er bäst"
				illustration={<CMSIllustration />}
			>
			Det finns ett flertal olika CMS verktyg att välja emellan för att redigera statiska sidor, tillsammans hittar vi det, eller dem, som passar just er hemsida och situation bäst.
			</Hero>

			<section className="features">
				<Intro
					title="Varför inte Wordpress?"
				>
				Om du känner dig bekväm med Wordpress som CMS verktyg är det faktiskt möjligt för dig att fortsätta använda det. Tack vare de bakomliggande metoderna för hur mina hemsidor byggs, kan innehållet på sidorna komma från nästan vilken källa som helst, inklusive Wordpress.
				</Intro>

				<MoreInfo>
					<Info
						title="Hur mycket kostar ett CMS?"
					>
					Det finns ett stort antal verktyg tillgängliga för att redigera innehåll på statiska sidor. Vissa är gratis med öppenkällkod, och vissa kommer med en månadsavgift. Beroende på er budget kan vi hitta det verktyg som passar er bäst. 
					</Info>

					<Info
						title="Många alternativ"
					>
					Som sagt finns det ett stort antal CMS verktyg tillgängliga, dessa inkluderar traditionella CMS:er som Wordpress, Joomla och Drupal. Men även många så kallade headless CMS:er som Strapi, Contentful och Ghost. Om inget alternativ passar, kan jag alltid bygga ett skräddarsytt CMS till er.
					</Info>
				</MoreInfo>
			</section>

			{/* CTA creates its own section */}
			<CTA title="Vill ni använda en CMS som passar er?">
			Låt mig skapa er hemsida så att ni kan hitta den CMS som passar er bäst.
			</CTA>
		</Layout>
	)
}