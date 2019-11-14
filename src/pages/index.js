import React, { useState } from "react";
import { graphql } from "gatsby";
import { useInView } from "react-intersection-observer";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";

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
		<SEO title="Webbutveckling i Mariestad" />
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
					<p>Jag skapar snygga, snabba och unika hemsidor med hjälp av den senaste tekniken inom webbutveckling.</p>
					<div className="btns">
						<ButtonLink href="#" variant="filled">Anlita mig</ButtonLink>
						<ButtonLink href="#" variant="outlined">Kontakta mig</ButtonLink>
					</div>
				</div>

				<div className="illustration">
					<Illustration />
				</div>
			</div>
		</section>

		<section className="features">
			<Row 
				illustration={<Hosting />} 
				link="/hosting" 
				align="left"
				title="Gratis hosting utan webbhotell">
				Jag bygger hemsidor som kan vara online utan något webbhotell. Istället ligger hemsidan på en CDN (Content Delivery Network) som serverar hemsidan riktigt snabbt, oberoende av var användarna befinner sig i världen. Detta betyder att hemsidan är otroligt snabb samtidigt som den kan vara online avgiftsfritt.
			</Row>

			<Row 
				illustration={<Webbyra />} 
				link="/webbyra" 
				align="right"
				title="Inte en traditionell webbyrå">
				CHJ Webblösningar drivs ensamt av mig, Carl Hallén Jansson, och jag är alltid ute efter att hänga med i utvecklingen av webben. Därför använder jag mig inte av Wordpress eller liknande CMS verktyg. Istället använder jag mig av JAMStack principer, vilket betyder att jag kan erbjuda snabba, säkra och unika hemsidor till ett billigt pris.
			</Row>

			<Row 
				illustration={<CMS />} 
				link="/cms" 
				align="left"
				title="Fritt val av CMS">
				Eftersom jag inte använder Wordpress för att bygga hemsidor, har du möjlighet att välja mellan flera olika CMS verktyg för att hantera sidan. Om du vill har en blogg kan jag integrera Ghost, som har en mycket bra redigeringsupplevelse. Om du behöver hantera andra typer av innehåll än blogginlägg finns Directus, Strapi eller Contentful.
			</Row>
		</section>

		<section className="about">
			<Row
				illustration={<Circles1 />}
				align="left"
				title="Vad är CHJ Webblösningar?"
				>
				CHJ Webblösningar är ett företag som endast består av mig, Carl Hallén Jansson. Jag har hållit på med webbutveckling i över 6 år nu och bestämde mig sommaren 2019 för att starta ett eget företag i syfte att skapa hemsidor till mindre företag. Det finns en glädje i att skapa saker som är menat för andra personer att använda, och jag tror att den här glädjen är vad som får mig att brinna för webbutveckling.  
			</Row>

			<Row
				illustration={<Circles2 />}
				align="right"
				title="Fokuserad på webbutveckling"
				>
				Till skillnad från andra webbyråer är jag inte fokuserad på marknadsföring, utan på utveckling av unika hemsidor. Jag sökmotoroptimerar självklart varje sida jag skapar, men utöver den marknadsföringsåtgärden erbjuder jag inga reklamtjänster. Detta betyder också att jag kan erbjuda mina tjänster till ett billigare pris än andra webbyråer kan göra.
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

	const button = link ? <ButtonLink href={link} variant="outlined" style={{ alignSelf }}>Läs mer</ButtonLink> : "";

	return (
		<div ref={ref} className="row" style={{ flexDirection: direction, opacity }}>
			<div className="copy" style={copyStyle}>
				<h2>{title}</h2>
				{content}
				{button}
			</div>
			<div className="illustration">
				{illustration}
			</div>
		</div>
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
