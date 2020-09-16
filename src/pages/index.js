import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

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
import hostingUrl from "../images/illustrations/hosting.svg";
import granskningUrl from "../images/illustrations/granskning_front.svg";
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
						<h1>Jag är en frilansande webbutvecklare som hjälper småföretag att spara pengar</h1>
						<p>Kompromissa inte mellan prestanda och kostnad, få istället en supersnabb och säker webbplats som inte kräver ett dyrt webbhotell för att drivas.</p>
						<div className="btns">
							<ButtonLink href="/kontakt/" variant="filled">Kontakta mig</ButtonLink>
							<ButtonLink href="/blogg/" variant="outlined">Läs min blogg</ButtonLink>
						</div>
					</div>

					<div className="illustration">
						<Illustration />
					</div>
				</div>
			</section>

			<section className="features">
				<div className="copy intro">
					<h1>Billigare, säkrare, snabbare!</h1>
					<p>Jag utvecklar webbplatser med <Link to="/blogg/vad-ar-egentligen-jamstack">JAMstack</Link>. Det har ett antal fördelar för dig som kund.</p>
				</div>

				<Row
					illustration={hostingUrl}
					link="/webbyra"
					align="left"
					title="Spara pengar på driften">
					Det kan kosta att driva en webbplats, speciellt om du får många besökare. Tack vare JAMStack är detta inte längre ett problem. Du kan driva webbplatsen nästan helt gratis, oavsett hur många besökare du får.
				</Row>

				<Row
					illustration={granskningUrl}
					link="/tjanster/granskning#cta"
					align="right"
					title="Så snabbt som det går">
					Dina besökare förväntar sig att webbplatsen laddar på under 2 sekunder, annars går dem någon annanstans. Detta är inget problem för JAMStack sidor. Tack vare att varje sida redan är färdig vid varje hämtning och att filerna ligger på ett CDN, laddas webbplatsen supersnabbt.
				</Row>

				<Row
					illustration={hostingUrl}
					link="/webbyra/hosting"
					align="left"
					title="Undvik att bli hackad">
					Du behöver inte längre oroa dig för att webbplatsen ska bli hackad. På en JAMStack sida finns ingen webbserver eller databas bakom webbplatsen. Det betyder att det finns färre sårbara områden som en hackare kan använda för att ställa till det.
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
	allMarkdownRemark(
		limit: 1,
		sort: {
			order: DESC, 
			fields: [frontmatter___date]
			}, 
			filter: {
				frontmatter: {
					published: { eq: true }
				}
			}){
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
