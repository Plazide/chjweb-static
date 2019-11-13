import React from 'react'
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

// CSS
import "../styles/blog.css";

export default function blogg({ data }) {
	const posts = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<section className="blog">
				<div className="content">
					<div className="copy">
						<h1>Följ CHJ Webblösningar i livet som företagare</h1>
						<p>Mitt namn Carl och jag är egenföretagare och webbutvecklare. Följ mitt arbete och ta del av mina erfarenheter i den här bloggen.</p>
					</div>

					<ul className="posts">
						{posts.map( (item, index) => {
							const post = item.node;
							const featured = index === 0;

							const slug = post.fields.slug;
							const imageFixed = post.frontmatter.image.childImageSharp.fixed;
							const imageFluid = post.frontmatter.image.childImageSharp.fluid;

							const image = featured ? imageFluid : imageFixed;

							return(
								<Post
									key={slug}
									image={image}
									featured={featured}
									slug={slug}
									title={post.frontmatter.title}
									description={post.frontmatter.description}
									published={post.frontmatter.date}
									readTime={post.timeToRead}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</Layout>
	)
}

function Post({ title, description, published, readTime, image, slug, featured }){
	const Image = featured ? <Img fluid={image} /> : <Img fixed={image} />;

	return (
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
	allMarkdownRemark {
		edges {
			node {
				frontmatter {
					title
					date(locale: "sv", formatString: "DD MMM, Y")
					description
					image {
						childImageSharp {
							fixed(width: 560, height: 345, quality: 70) {
								...GatsbyImageSharpFixed
							}
							fluid(maxWidth: 870, maxHeight: 380, quality: 70) {
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
}`;