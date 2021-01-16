import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useTranslation, Trans, Link } from "gatsby-plugin-react-i18next";

// Layout
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

// Images
import heroIllustrationUrl from "../images/illustrations/webbyra.svg";
import Service from "../components/Service";
import ContactForm from "../components/ContactForm";

export default function Tjanster({ data, pageContext: { language } }){
	const{ t } = useTranslation("Services", { useSuspense: false });
	const tech = data.tech.nodes.map( node => node.frontmatter);

	return(
		<Layout>
			<SEO
				title={t("seo.title")}
				description={t("seo.description")}
				url="/tjanster/"
				breadcrumb={[
					{
						name: t("seo.title"),
						url: "/tjanster/"
					}
				]}
			/>
			<Hero
				title={t("hero.heading")}
				illustration={heroIllustrationUrl}
			>
				{t("hero.content")}
			</Hero>

			<section className="features">
				<Intro
					title={t("features.heading")}
				>
					<Trans i18nKey="features.content" t={t}>
						<Link to="/kontakt">kontakta mig</Link>
					</Trans>
				</Intro>

				<div className="services" style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					flexWrap: "wrap",
					paddingBottom: "100px",
					maxWidth: 1400,
					margin: "auto"
				}}>
					{
						tech.map( tech => (
							<Service
								key={tech.title}
								title={tech.title}
								body={tech.info[language]}
								url={tech.url}
								image={tech.logo.childImageSharp.fluid}
							/>
						))
					}
				</div>
			</section>

			<ContactForm
				heading={t("cta.heading")}
				paragraph={t("cta.content")}
			/>
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
						fluid(maxHeight: 200){
							...GatsbyImageSharpFluid
						}
					}
				}
				info{
					sv
					en
				}
				url
			}
		}
	}
 }
`;

Tjanster.propTypes = {
	data: PropTypes.object,
	pageContext: PropTypes.object
};
