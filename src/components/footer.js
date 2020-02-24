import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

// css
import "./styles/footer.css";

// Images
import FacebookIcon from "../images/social/facebook.svg";
import TwitterIcon from "../images/social/twitter.svg";

// Utils
import parseNumber from "../utils/parseNumber";

export default function Footer (){
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
					<h1>Bläddra</h1>
					<nav>
						<Link to="/">Hem</Link>
						<Link to="tjanster">Tjänster</Link>
						<Link to="/webbyra">Webbyrå</Link>
						<Link to="/blogg">Blogg</Link>
					</nav>
				</section>

				<section className="contact">
					<h1>Kontakt</h1>
					<address>
						<span>{site.siteMetadata.streetAddress}</span>
						<span>{site.siteMetadata.zipCode}, {site.siteMetadata.city}</span>
						<span><a href={`mailto:${site.siteMetadata.email}`}>{site.siteMetadata.email}</a></span>
						<span><a href={`tel:${parseNumber(site.siteMetadata.phone)}`}>{site.siteMetadata.phone}</a></span>
					</address>
				</section>

				<section className="posts">
					<h1>Senaste blogginläggen</h1>
					{posts.map( item => {
						const post = item.node;

						return(
							<div className="post" key={post.fields.slug}>
								<a href={`/blogg/${post.fields.slug}`} className="title">{post.frontmatter.title}</a>
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
					<a href="/integritetspolicy" className="privacy">Integritetspolicy</a>
				</section>
			</div>
		</footer>
	);
}

function SocialLink ({ icon, title, url }){
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
