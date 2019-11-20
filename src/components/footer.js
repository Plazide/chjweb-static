import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

// Components
import Navigation from "./navigation";

// css
import "./styles/footer.css";

// Images
import FacebookIcon from "../images/social/facebook.svg";
import TwitterIcon from "../images/social/twitter.svg";



export default function Footer() {
	const { site, allMarkdownRemark } = useStaticQuery(
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
			allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}){
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

	return (
		<footer>
			<div className="content">
				<section className="nav">
					<h1>Bläddra</h1>
					<Navigation />
				</section>

				<section className="contact">
					<h1>Kontakt</h1>
					<address>
						<span>{site.siteMetadata.streetAddress}</span>
						<span>{site.siteMetadata.zipCode}, {site.siteMetadata.city}</span>
						<span><a href={`mailto:${site.siteMetadata.email}`}>{site.siteMetadata.email}</a></span>
						<span><a href={`tel:${strip(site.siteMetadata.phone)}`}>{site.siteMetadata.phone}</a></span>
					</address>
				</section>

				<section className="posts">
					<h1>Senaste blogginläggen</h1>
					{posts.map( item => {
						const post = item.node;

						return (
							<div className="post" key={post.fields.slug}>
								<a href={`/blogg/${post.fields.slug}`} className="title">{post.frontmatter.title}</a>
							</div>
						)
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
	)
}

function strip(str){
	const regex = /[-\s]/gm;
	const stripped = str.replace(regex, "");

	return stripped;
}

function SocialLink ({icon, title, url}){
	return (
		<a href={url} title={title}>
			<img src={icon} alt={title} className="icon" />
		</a>
	)
}
