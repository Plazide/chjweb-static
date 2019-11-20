import React, { useState } from "react";
import { graphql } from "gatsby";
import { useInView } from "react-intersection-observer";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";
import CTA from "../components/CTA";

// Images
import _illustrationUrl, { ReactComponent as Illustration} from "../images/illustrations/create.svg";
import _waveUrl, { ReactComponent as Wave } from "../images/illustrations/wave.svg";
import _arrowUrl, { ReactComponent as Arrow } from "../images/illustrations/arrow.svg";
import _hostingUrl, { ReactComponent as Hosting } from "../images/illustrations/hosting.svg";
import _webbyraUrl, { ReactComponent as Webbyra } from "../images/illustrations/webbyra.svg";
import _cmsUrl, { ReactComponent as CMS } from "../images/illustrations/cms.svg";
import _circles1Url, { ReactComponent as Circles1 } from "../images/illustrations/circles_1.svg";
import _circles2Url, { ReactComponent as Circles2 } from "../images/illustrations/circles_2.svg";
import _workflowUrl, { ReactComponent as Workflow } from "../images/illustrations/workflow.svg";
import _workflowArrowUrl, { ReactComponent as WorkflowArrow } from "../images/illustrations/workflow_arrow.svg";

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Webbutveckling i Mariestad" url="/" />
		<section className="hero frontpage">
			<Wave className="background" />
			<div className="content">
				<div className="copy">
					<a href={`/blogg/${data.allMarkdownRemark.nodes[0].fields.slug}`} className="featured">
						<span>Senaste inlägget: </span>
						<span className="title">{data.allMarkdownRemark.nodes[0].frontmatter.title}</span>
						<Arrow />
					</a>
					<h1>Jag skapar hemsidor</h1>
					<p>Jag skapar hemsidor med hjälp av JAMStack. Det betyder att jag kan utveckla snygga, snabba och säkra hemsidor utan krångel.</p>
					<div className="btns">
						<ButtonLink href="/anlita" variant="filled">Anlita mig</ButtonLink>
						<ButtonLink href="/blogg" variant="outlined">Läs min blogg</ButtonLink>
					</div>
				</div>

				<div className="illustration">
					<Illustration />
				</div>
			</div>
		</section>

		<section className="features">
			<div className="copy intro">
				<h1>Varför är CHJ Webblösningar annorlunda?</h1>
				<p>Det som skiljer CHJ Webblösningar från andra webbyråer är att jag inte använder Wordpress för att skapa hemsidor. Istället bygger jag hemsidor utifrån JAMStack principer. Det betyder att jag utvecklar statiska sidor som är färdiga att serveras vid varje hämtning. Det här innebär att mina hemsidor är snabbare och säkrare än vanliga hemsidor.</p>
			</div>

			<Row 
				illustration={<Hosting />} 
				link="/hosting" 
				align="left"
				title="Gratis hosting utan webbhotell">
				En av fördelarna med hemsidor byggda på JAMStack är att de blir riktigt billiga att driva. Det krävs inget webbhotell för att hålla hemsidan på nätet, istället används en modern och kostnadseffektiv CDN tjänst. Det betyder att mindre hemsidor kan synas på nätet utan någon som helst driftkostnad.
			</Row>

			<Row 
				illustration={<Webbyra />} 
				link="/webbyra" 
				align="right"
				title="Inte en traditionell webbyrå">
				De flesta av dagens webbyråer använder Wordpress för att bygga hemsidor till sina kunder. Det gör inte jag. CHJ Webblösningar bygger hemsidor som är snabbare, säkrare och billigare än vad en Wordpress sida någonsin kan vara.
			</Row>

			<Row 
				illustration={<CMS />} 
				link="/cms" 
				align="left"
				title="Fritt val av CMS">
				Eftersom jag inte använder Wordpress för att bygga hemsidor, har du möjlighet att välja mellan flera olika CMS verktyg för att hantera sidan. Om du vill ha en blogg kan jag integrera Ghost, som har ett fantastiskt redigeringsverktyg. Om du behöver hantera andra typer av innehåll än blogginlägg finns Directus, Strapi eller Contentful.
			</Row>
		</section>

		<section className="about">
			<Row
				illustration={<Circles1 />}
				align="left"
				title="Vad är CHJ Webblösningar?"
				>
				CHJ Webblösningar är ett företag som består av mig, Carl Hallén Jansson. Jag har nästan 10 års erfarenhet av webbutveckling. Jag har gjort allting från dynamiska sidor med PHP till statiska sidor med JAMStack. Sommaren 2019 bestämde jag mig för att starta ett företag i syfte att utveckla hemsidor på fulltid.
			</Row>

			<Row
				illustration={<Circles2 />}
				align="right"
				title="Självlärd webbutvecklare"
				>
				Mina erfarenheter och kunskaper kommer ifrån att jag under många år testat och experimenterat mig fram genom olika projekt. Jag har skapat webbshoppar, köp- och säljsidor och presentationssidor till olika företag innan jag startade mitt företag. Jag har alltså lärt mig genom att skapa verkliga hemsidor som använts av människor. 
			</Row>
		</section>

		<section className="workflow">
			<Row
				illustration={<Workflow />}
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

function ListItem({ children, pos, last = false }){
	const nextArrow = !last ? <WorkflowArrow className="next-arrow" /> : "";

	return (
		<li>
			<div>
				<span className="pos">{pos}</span>
				{nextArrow}
			</div>
			{children}
			
		</li>
	)
}

function Row({ illustration, link, align, title, children, paragraph = true, threshold = 1 }){
	const [ref, inView] = useInView({ threshold, triggerOnce: true });

	const visible = inView;
	const translate = visible ? "0px" : "50%";
	const opacity = visible ? "1" : "0";
	const direction = align === "left" ? "row" : "row-reverse";
	const alignItems = align === "left" ? "flex-start" : "flex-end";
	const alignSelf = align === "left" ? "flex-start" : "flex-end";
	const content = paragraph ? <p>{children}</p> : children;

	const copyStyle = {
		alignItems, 
		textAlign: align, 
		transform: `translate(${align === "left" ? "-" : ""}${translate})`
	}

	const button = link ? <ButtonLink href={link} variant="text" style={{ alignSelf }}>Läs mer</ButtonLink> : "";

	return (
		<section ref={ref} className="row" style={{ flexDirection: direction, opacity }}>
			<div className="copy" style={copyStyle}>
				<h1>{title}</h1>
				{content}
				{button}
			</div>
			<div className="illustration" role="presentation">
				{illustration}
			</div>
		</section>
	)
}

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
}
`

export default IndexPage;
