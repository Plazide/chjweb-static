import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Layout
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

// Images
import heroIllustrationUrl from "../images/illustrations/webbyra.svg";
import Service from "../components/Service";
import CTA from "../components/CTA";

export default function Tjanster({ data }){
	const tech = data.tech.nodes.map( node => node.frontmatter);
	console.log(tech);

	return(
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
				title="Jag utvecklar billiga och snabba webbplatser"
				illustration={heroIllustrationUrl}
			>
				Det viktigaste för en webbplats, utöver en bra design, är dess prestanda. Den bidrar till bättre placeringar i sökresultaten och förbättrar användarnas upplevelse. Prestanda kommer dock ofta med ett högt pris, men inte om jag skapar din webbplats.
			</Hero>

			<section className="features">
				<Intro
					title="Mina tjänster"
				>
					Jag utvecklar hemsidor med bra prestanda som kan drivas till ett billigt pris. För att uppnå detta använder jag mig av ett par olika verktyg och tekniker.
				</Intro>

				<div className="services" style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					flexWrap: "wrap",
					paddingBottom: "100px"
				}}>
					{
						tech.map( tech => (
							<Service
								key={tech.title}
								title={tech.title}
								body={tech.description}
								url={tech.url}
								image={tech.logo.childImageSharp.fluid}
							/>
						))
					}
				</div>
			</section>

			<CTA title="Häng med i tiden">
				Jag är stolt över att använda moderna och effektiva tekniker för att skapa moderna och effektiva lösningar. Låter det intressant?
			</CTA>
		</Layout>
	);
}

export const pageQuery = graphql`
 query{
	tech: allMarkdownRemark(
		filter: {
			frontmatter: {
				type: { eq: "tech" }
			}
		}
	){
		nodes{
			frontmatter{
				title
				logo{
					childImageSharp{
						fluid(maxHeight: 150){
							...GatsbyImageSharpFluid
						}
					}
				}
				description
				url
			}
		}
	}
 }
`;

Tjanster.propTypes = {
	data: PropTypes.object
};
