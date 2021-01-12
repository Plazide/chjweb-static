import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import { useTranslation, Trans, Link } from "gatsby-plugin-react-i18next";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";
import CTA from "../components/CTA";
import Row from "../components/Row";

// Images
/* import { ReactComponent as Illustration } from "../images/illustrations/create.svg"; */
import { ReactComponent as Wave } from "../images/illustrations/wave.svg";
import { ReactComponent as Checkmark } from "../images/icons/checkmark.svg";
import { ReactComponent as Speed } from "../images/illustrations/speed.svg";
import { ReactComponent as Secure } from "../images/illustrations/secure.svg";
import { ReactComponent as Circle } from "../images/illustrations/circles_2.svg";
import hostingUrl from "../images/illustrations/hosting.svg";
import workflowUrl from "../images/illustrations/workflow.svg";
import workflowArrowUrl from "../images/illustrations/workflow_arrow.svg";

const IndexPage = ({ data }) => {
	const{ t } = useTranslation("Start", { useSuspense: false });
	const meta = data.site.siteMetadata;
	const personalImage = data.personalImage.childImageSharp.fluid;
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
				title={t("seo.title")}
				url="/"
				description={t("seo.description")}
				structuredData={structuredData}
			/>
			<section className="hero frontpage">
				<Wave className="background" />
				<div className="content">
					<div className="copy">
						<h1>{t("hero.heading")}</h1>
						<p>{t("hero.paragraph")}</p>
						<div className="btns">
							<ButtonLink href="/kontakt/" variant="filled">{t("hero.contact")}</ButtonLink>
							<ButtonLink href="/blogg/" variant="outlined">{t("hero.blog")}</ButtonLink>
						</div>
					</div>

					<div className="illustration">
						{/* <Illustration /> */}
						<Img fluid={personalImage} alt="Carl Hallén Jansson" />
					</div>
				</div>
			</section>

			<section className="features">
				<div className="copy intro">
					<h1>{t("features.heading")}</h1>
					<p>
						<Trans i18nKey="features.paragraph" t={t}>
							<Link to="/blogg/vad-ar-egentligen-jamstack">JAMstack</Link>
						</Trans>
					</p>
				</div>

				<Row
					illustration={hostingUrl}
					align="left"
					title={t("features.hosting.heading")}>
					{t("features.hosting.content")}
				</Row>

				<Row
					illustration={<Speed />}
					align="right"
					title={t("features.speed.heading")}>
					{t("features.speed.content")}
				</Row>

				<Row
					illustration={<Secure />}
					align="left"
					title={t("features.safe.heading")}>
					{t("features.safe.content")}
				</Row>

			</section>

			<section className="about">
				<Row
					illustration={<Circle />}
					align="left"
					title={t("about.heading")}
					link="/om-mig"
					linkText={t("about.readmore")}
				>
					{t("about.content")}
				</Row>
			</section>

			<section className="workflow">
				<Row
					illustration={workflowUrl}
					align="left"
					title={t("workflow.heading")}
					paragraph={false}
					threshold={0.5}
					animate={false}
				>
					<ol>
						<ListItem pos="1">{t("workflow.1")}</ListItem>
						<ListItem pos="2">{t("workflow.2")}</ListItem>
						<ListItem pos="3">{t("workflow.3")}</ListItem>
						<ListItem pos="4">{t("workflow.4")}</ListItem>
						<ListItem pos="5">{t("workflow.5")}</ListItem>
						<ListItem pos="6" last={true}>{t("workflow.6")}</ListItem>
					</ol>
				</Row>
			</section>

			<CTA
				title={t("cta.heading")}
			>
				{t("cta.content")}
			</CTA>
		</Layout>
	);
};

function ListItem({ children, pos, last = false }){
	const[ref, inView] = useInView({ triggerOnce: true, threshold: 0.3, rootMargin: "80px 0px 80px 0px" });
	const styles = {};
	const arrowStyles = {};

	if(inView){
		styles.transform = "translateX(0)";
		arrowStyles.opacity = "1";
	}

	return(
		<li ref={ref}>
			<div style={styles} className="list-content">
				<div>
					<span className="pos">{last ? <Checkmark className="checkmark" /> : pos}</span>
					{
						!last
							? <img src={workflowArrowUrl} style={arrowStyles} alt="Pil ner" className="next-arrow" />
							: ""
					}
				</div>
				{children}
			</div>
		</li>
	);
}

IndexPage.propTypes = {
	data: PropTypes.object,
	pageContext: PropTypes.object
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
	personalImage: file(relativePath: { eq: "raster/profile.jpg" }){
		childImageSharp{
			fluid(maxWidth: 500){
				...GatsbyImageSharpFluid
			}
		}
	}
}
`;

export default IndexPage;
