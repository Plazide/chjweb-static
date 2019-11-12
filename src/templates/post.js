import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from "rehype-react";
import Img from "gatsby-image";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

// CSS
import "../styles/blog.css";

const renderAst = new rehypeReact({
	createElement: React.createElement
}).Compiler;

export default function post({ data }) {
	const featuredImage = data.markdownRemark.frontmatter.image.childImageSharp.fluid;
	const title = data.markdownRemark.frontmatter.title;
	const description = data.markdownRemark.frontmatter.description;
	const published = data.markdownRemark.frontmatter.publish_date;
	const readTime = data.markdownRemark.timeToRead;
	const htmlAst = data.markdownRemark.htmlAst;

	return (
		<Layout>
			<SEO title={title + " | Blogg"} description={description} />
			<article>
				<div className="post-heading">
					<Img fluid={featuredImage} className="featured-image" />
					<div className="title">
						<h1>{title}</h1>
					</div>
					<div className="meta">
						<span>{published}</span>
						<span>{readTime} minuter</span>
					</div>
				</div>
				
				<section className="post-body">
					<div>{renderAst(htmlAst)}</div>
				</section>
			</article>
		</Layout>
	)
}

export const query = graphql`
query PostQuery($slug: String!){
	markdownRemark( fields: { slug: { eq: $slug}} ){
		frontmatter{
			title
			description
			publish_date(formatString: "DD MMM, Y", locale: "sv")
			image {
				childImageSharp {
					fluid(maxWidth: 2080, maxHeight: 564){
						...GatsbyImageSharpFluid
					}
				}
			}
		}
		timeToRead
		htmlAst
	}
}
`
