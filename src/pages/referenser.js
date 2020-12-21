import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Project from "../components/Project";
import SEO from "../components/seo";
import { useTranslation } from "gatsby-plugin-react-i18next";

// Illustrations
import { ReactComponent as HeroImage } from "../images/illustrations/cms.svg";

import "../styles/referenser.css";
import CTA from "../components/CTA";

export default function referenser({ data, pageContext: { language } }){
	const{ t } = useTranslation("Projects", { useSuspense: false });
	const projects = data.projects.nodes.map( node => node.frontmatter);
	const technologies = data.tech.nodes.map( node => node.frontmatter);

	return(
		<Layout>
			<SEO
				title={t("seo.title")}
				url="/referenser"
				description={t("seo.description")}
				breadcrumb={[
					{
						name: t("seo.title"),
						url: "/referenser/"
					}
				]}
			/>
			<section className="hero">
				<div className="content">
					<div className="copy">
						<h1>{t("hero.heading")}</h1>
						<p>{t("hero.content")}</p>
					</div>

					<div className="illustration">
						<HeroImage />
					</div>
				</div>
			</section>

			<div className="content projects">
				{
					projects.map( project => {
						const projectTech = project.tech;
						const tech = technologies.filter( tech => {
							return projectTech.includes(tech.title);
						});

						return(
							<Project
								title={project.title}
								url={project.url}
								body={project.info[language]}
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
				title={t("cta.heading")}
			>
				{t("cta.content")}
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
					info{
						en
						sv
					}
					url
					post_url
					tech
					image{
						childImageSharp{
							fluid(maxHeight: 200, quality: 100){
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
			},
			sort: {
				fields: frontmatter___title
			}
		){
			nodes{
				frontmatter{
					title
					info{
						en
						sv
					}
					url
					logo{
						childImageSharp{
							fluid(maxWidth: 50){
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;
