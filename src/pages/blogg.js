import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

// CSS
import "../styles/blog.css";

export default function blogg ({ data }){
	const posts = data.allMarkdownRemark.edges;
	const siteUrl = data.allSite.edges[0].node.siteMetadata.siteUrl;
	const structuredData = {
		"@context": "http://schema.org",
		"@type": "ItemList",
		"url": siteUrl,
		"numberOfItems": posts.length,
		"itemListElement": posts.map( (item, index) => {
			const logoUrl = data.imageSharp.fixed.src;
			const post = item.node;
			const pos = index + 1;
			const image = post.frontmatter.image.childImageSharp.fixed ||
							post.frontmatter.image.childImageSharp.fluid;

			return{
				"@type": "BlogPosting",
				"image": {
					"@type": "ImageObject",
					"url": image.src
				},
				"url": siteUrl + "/" + post.fields.slug,
				"name": post.frontmatter.title,
				"position": pos,
				"headline": post.frontmatter.title,
				"author": "Carl Hallén Jansson",
				"datePublished": post.frontmatter.date,
				"dateModified": post.frontmatter.updated,
				"publisher": {
					"@type": "Organization",
					"@id": "https://chjweb.se",
					"name": "CHJ Webblösningar",
					"logo": {
						"@type": "ImageObject",
						"url": logoUrl
					}
				}
			};
		})

	};

	return(
		<Layout>
			<SEO
				title="Blogg"
				description="I min blogg skriver jag om hur det är att driva företag, olika projekt som jag gör och andra saker som har med företagande eller webbutveckling att göra."
				url="/blogg/"
				structuredData={structuredData}
				breadcrumb={[
					{ name: "Blogg", url: "/blogg/" }
				]}
			/>
			<section className="blog">
				<div className="content">
					<div className="copy">
						<h1>Följ CHJ Webblösningar i livet som företagare</h1>
						<p>Mitt namn är Carl och jag är egenföretagare och webbutvecklare. Följ mitt arbete och ta del av mina erfarenheter i den här bloggen.</p>
					</div>

					<ul className="posts">
						{posts.map( (item, index) => {
							const post = item.node;
							const featured = index === 0;
							const slug = post.fields.slug;
							const image = post.frontmatter.image.childImageSharp.fluid;

							const publishDate = new Intl.DateTimeFormat("sv-SE", {
								day: "2-digit",
								month: "short",
								year: "numeric"
							}).format(new Date(post.frontmatter.date));

							return(
								<Post
									key={slug}
									image={image}
									featured={featured}
									slug={slug}
									title={post.frontmatter.title}
									description={post.frontmatter.description}
									published={publishDate}
									readTime={post.timeToRead}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</Layout>
	);
}

function Post ({ title, description, published, readTime, image, slug, featured }){
	const Image = <Img fluid={image} />;

	return(
		<li className={`post ${featured ? "featured" : ""}`}>
			<Link to={`/blogg/${slug}`}>
				{Image}
				<div className="meta">
					<span className="published">{published}</span>
					<span className="read-time">{readTime} minuter</span>
				</div>
				<h2>{title}</h2>
				<p>{description}</p>
			</Link>
		</li>
	);
}

export const pageQuery = graphql`
query BloggQuery{
	allMarkdownRemark( 
		sort: {
			order: DESC,
			fields: [frontmatter___date] 
		}, 
		filter: {
			frontmatter: {
				published: { eq: true }
			}
		}) {
		edges {
			node {
				frontmatter {
					title
					date(formatString: "YYYY-MM-DD")
					updated(formatString: "YYYY-MM-DD")
					description
					image {
						childImageSharp {
							fluid(maxWidth: 870, maxHeight: 380, quality: 100) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				timeToRead
				fields {
					slug
				}
			}
		}
	}
	allSite{
		edges{
			node{
				siteMetadata{
					siteUrl
				}
			}
		}
	}
	imageSharp( fixed: { originalName: { eq: "logotyp.png" } } ){
		fixed(width: 265){
			src
		}
	}
}`;
