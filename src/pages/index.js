import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";
import CTA from "../components/CTA";
import Row from "../components/Row";

// Images
import { ReactComponent as Illustration } from "../images/illustrations/create.svg";
import { ReactComponent as Wave } from "../images/illustrations/wave.svg";
import { ReactComponent as Arrow } from "../images/illustrations/arrow.svg";
import hostingUrl from "../images/illustrations/hosting.svg";
import granskningUrl from "../images/illustrations/granskning_front.svg";
import webbyraUrl from "../images/illustrations/webbyra.svg";
import circles1Url from "../images/illustrations/circles_1.svg";
import circles2Url from "../images/illustrations/circles_2.svg";
import workflowUrl from "../images/illustrations/workflow.svg";
import workflowArrowUrl from "../images/illustrations/workflow_arrow.svg";

const IndexPage = ({ data }) => {
	const meta = data.site.siteMetadata;
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"url": "https://chjweb.se/"
		},
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"@id": "https://chjweb.se/",
			"url": meta.siteUrl,
			"address": {
				"@type": "PostalAddress",
				"streetAddress": meta.streetAddress,
				"addressLocality": meta.city,
				"postalCode": meta.zipCode,
				"addressCountry": "SE"
			},
			"name": "CHJ Webblösningar"
		}
	];

	return(
		<Layout>
			<SEO
				title="Webbutveckling i Mariestad"
				url="/"
				description="En utvecklare med bas i Mariestad som skapar hemsidor åt mindre företag med hjälp av JAMStack."
				structuredData={structuredData}
			/>
			<section className="hero frontpage">
				<Wave className="background" />
				<div className="content">
					<div className="copy">
						<a
							href={`/blogg/${data.allMarkdownRemark.nodes[0].fields.slug}`}
							title={data.allMarkdownRemark.nodes[0].frontmatter.title} className="featured">
							<span>Senaste inlägget: </span>
							<span className="title">{data.allMarkdownRemark.nodes[0].frontmatter.title}</span>
							<Arrow />
						</a>
						<h1>Jag skapar hemsidor</h1>
						<p>Jag är en webbutvecklare från Mariestad som skapar hemsidor med JAMStack. Det betyder att jag kan designa och utveckla snygga, snabba och säkra hemsidor utan krångel.</p>
						<div className="btns">
							<ButtonLink href="/offert/" variant="filled">Få Offert</ButtonLink>
							<ButtonLink href="/tjanster/granskning#cta" variant="outlined">Granska hemsida</ButtonLink>
						</div>
					</div>

					<div className="illustration">
						<Illustration />
					</div>
				</div>
			</section>

			<section className="features">
				<div className="copy intro">
					<h1>Snabbare hemsidor</h1>
					<p>Hemsidor måste vara snabba, annars förlorar man besökarna. Snabbhet är en av de största tekniska fördelarna med att välja mig som webbutvecklare. Oavsett om ditt företag behöver en presentationssida eller webbshop, så kan jag göra en hemsida som skapar nöjda kunder.</p>
				</div>

				<Row
					illustration={webbyraUrl}
					link="/webbyra"
					align="left"
					title="Inte en traditionell webbyrå">
					De flesta av dagens webbyråer använder Wordpress för att bygga hemsidor till sina kunder. Det gör inte jag. CHJ Webblösningar bygger hemsidor som är snabbare, säkrare och billigare än vad en Wordpress sida någonsin kan vara.
				</Row>

				<Row
					illustration={granskningUrl}
					link="/tjanster/granskning#cta"
					align="right"
					title="Gratis granskning">
					För att ni ska veta hur er hemsida mår och fungerar, erbjuder jag att granska hemsidan kostnadsfritt. Det här betyder att ni får veta vilka problem som finns med just er hemsida, och hur de problemen kan lösas. När ni sedan vet vad som är fel kan ni välja att fixa det själva, ignorera problemen eller anlita mig för att laga er hemsida.
				</Row>

				<Row
					illustration={hostingUrl}
					link="/webbyra/hosting"
					align="left"
					title="Billigare än ett webbhotell">
					Om jag bygger er hemsida är det möjligt att den kan drivas utan kostnad. Eftersom jag bygger hemsidor som inte kräver ett webbhotell, kan jag sänka era kostnader när det kommer till hosting. Ni kan alltså få en hemsida som är snabbare och billigare än vanliga hemsidor.
				</Row>

			</section>

			<section className="about">
				<Row
					illustration={circles1Url}
					align="left"
					title="Bakom CHJ Webblösningar"
				>
					CHJ Webblösningar är en enskild firma som drivs av Carl Hallén Jansson. Jag har nästan 10 års erfarenhet av att skapa hemsidor. Det började med enkla HTML sidor med en släng av CSS. Sedan hittade jag PHP och började skapa dynamiska hemsidor. Nu har jag hittat JAMStack och utvecklar snabbare och säkrare hemsidor än någonsin.
				</Row>

				<Row
					illustration={circles2Url}
					align="right"
					title="Självlärd webbutvecklare"
				>
					Mina erfarenheter och kunskaper kommer ifrån att jag under många år testat och experimenterat mig fram genom olika projekt. Jag har skapat webbshoppar, köp- och säljsidor och presentationssidor till olika företag innan jag startade mitt företag. Jag har alltså lärt mig webbutveckling genom att skapa verkliga hemsidor som använts av riktiga människor.
				</Row>
			</section>

			<section className="workflow">
				<Row
					illustration={workflowUrl}
					align="left"
					title="Hur går det till?"
					paragraph={false}
					threshold={0.5}>
					<ol>
						<ListItem pos="1">Vi diskuterar hemsidans innehåll, funktioner och design</ListItem>
						<ListItem pos="2">Jag återkommer med design förslag som ni sedan ger synpunkter på</ListItem>
						<ListItem pos="3">Jag redigerar designförslaget</ListItem>
						<ListItem pos="4">Jag börjar bygga er hemsida utifrån det innehåll och de funktioner som vi diskuterat</ListItem>
						<ListItem pos="5">Vi stämmer av för att se om det finns ytterligare funktioner eller innehåll som ska läggas till</ListItem>
						<ListItem pos="6" last={true}>Jag lanserar hemsidan och skickar en faktura</ListItem>
					</ol>
				</Row>
			</section>

			<CTA
				title="Låter det bra?"
			>
			Låt mig skapa en snabb, säker och modern hemsida som inte kostar något att driva.
			</CTA>
		</Layout>
	);
};

function ListItem ({ children, pos, last = false }){
	const nextArrow = !last ? <img src={workflowArrowUrl} alt="Pil ner" className="next-arrow" /> : "";

	return(
		<li>
			<div>
				<span className="pos">{pos}</span>
				{nextArrow}
			</div>
			{children}

		</li>
	);
}

IndexPage.propTypes = {
	data: PropTypes.object
};

ListItem.propTypes = {
	children: PropTypes.node,
	pos: PropTypes.string,
	last: PropTypes.bool
};

export const pageQuery = graphql`
query FeaturedQuery {
	allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}){
		nodes {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
	site{
		siteMetadata{
			siteUrl
			streetAddress
			city
			zipCode
			phone
			email
		}
	}
}
`;

export default IndexPage;
