import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Project from "../components/Project";
import SEO from "../components/seo";

// Illustrations
import { ReactComponent as HeroImage } from "../images/illustrations/cms.svg";

import "../styles/referenser.css";
import CTA from "../components/CTA";

export default function referenser({ data }){
	const projects = data.projects.nodes.map( node => node.frontmatter);
	const technologies = data.tech.nodes.map( node => node.frontmatter);

	return(
		<Layout>
			<SEO
				title="Mina referenser"
				url="/referenser"
				description="Jag har utvecklat enkla presentationssidor och avancerade webbapplikationer. Här kan du se några av de projekten."
				breadcrumb={[
					{
						name: "Mina referenser",
						url: "/referenser/"
					}
				]}
			/>
			<section className="hero">
				<div className="content">
					<div className="copy">
						<h1>Utvalda referenser</h1>
						<p>Här kan du se utvalda projekt som jag har arbetat på. Vissa projekt gjorde jag både utveckling och design för, och andra hade redan en färdig design där jag stod för den tekniska delen.</p>
					</div>

					<div className="illustration">
						<HeroImage />
					</div>
				</div>
			</section>

			<div className="content projects">
				{
					projects.map( project => {
						const projectTech = project.tech.map( tech => tech.tech);
						const tech = technologies.filter( tech => {
							return projectTech.includes(tech.title);
						});

						return(
							<Project
								title={project.title}
								url={project.url}
								body={project.description}
								image={project.image.childImageSharp.fluid}
								postUrl={project.post_url}
								tech={tech}
								key={project.title}
							/>
						);
					})
				}
			</div>

			<CTA
				title="Har du några frågor?"
			>
				Har du några frågorna gällande projekten ovan?
			</CTA>
		</Layout>
	);
}

export const pageQuery = graphql`
	query{
		projects: allMarkdownRemark(
			filter: {
				frontmatter: {
					type: { eq: "project" }
				}
			}
		){
			nodes{
				frontmatter{
					title
					description
					url
					post_url
					tech{
						tech
					}
					image{
						childImageSharp{
							fluid(maxWidth: 300, quality: 100){
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
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
					description
					url
					logo{
						childImageSharp{
							fluid(maxWidth: 150){
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;
