import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

// css
import "./styles/footer.css";

// Images
import FacebookIcon from "../images/social/facebook.svg";
import TwitterIcon from "../images/social/twitter.svg";

// Utils
import parseNumber from "../utils/parseNumber";

export default function Footer(){
	const{ t } = useTranslation(["Footer", "Nav"], { useSuspense: false });
	const{ site, allMarkdownRemark } = useStaticQuery(
		graphql`
		query {
			site {
				siteMetadata{
					streetAddress
					zipCode
					city
					email
					phone
				}
			}
			allMarkdownRemark(
				limit: 3, 
				sort: {
					fields: frontmatter___date, 
					order: DESC
				}, 
				filter: {
					frontmatter: {
						published: { eq: true }
					}
				}
				){
				edges {
					node{
						frontmatter{
							title
						}
						fields{
							slug
						}
					}
				}
			}
		}
		`
	);

	const posts = allMarkdownRemark.edges;

	return(
		<footer>
			<div className="content">
				<section className="nav">
					<h1>{t("Footer:browse")}</h1>
					<nav>
						<Link to="/tjanster">{t("Nav:services")}</Link>
						<Link to="/referenser">{t("Nav:projects")}</Link>
						<Link to="/priser">{t("Nav:pricing")}</Link>
						<Link to="/blogg">{t("Nav:blog")}</Link>
					</nav>
				</section>

				<section className="contact">
					<h1>{t("Footer:contact")}</h1>
					<address>
						<span>{site.siteMetadata.streetAddress}</span>
						<span>{site.siteMetadata.zipCode}, {site.siteMetadata.city}</span>
						<span><a href={`mailto:${site.siteMetadata.email}`}>{site.siteMetadata.email}</a></span>
						<span><a href={`tel:${parseNumber(site.siteMetadata.phone)}`}>{site.siteMetadata.phone}</a></span>
					</address>
				</section>

				<section className="posts">
					<h1>{t("Footer:posts")}</h1>
					{posts.map( item => {
						const post = item.node;

						return(
							<div className="post" key={post.fields.slug}>
								<Link to={`/blogg/${post.fields.slug}`} className="title">{post.frontmatter.title}</Link>
							</div>
						);
					})}
				</section>

				<section className="misc">
					<div className="social">
						<SocialLink
							icon={FacebookIcon}
							title="Facebook"
							url="https://www.facebook.com/chjweb"
						/>
						<SocialLink
							icon={TwitterIcon}
							title="Twitter"
							url="https://twitter.com/chj_web"
						/>
					</div>
					<Link to="/integritetspolicy" className="privacy">{t("privacy")}</Link>
				</section>
			</div>
		</footer>
	);
}

function SocialLink({ icon, title, url }){
	return(
		<a href={url} title={title}>
			<img src={icon} alt={title} className="icon" />
		</a>
	);
}

SocialLink.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string
};
