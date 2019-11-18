import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from "rehype-react";
import Img from "gatsby-image";

// Share buttons
import {
	TwitterShareButton,
	TwitterIcon,

	FacebookShareButton,
	FacebookIcon,

	RedditShareButton,
	RedditIcon,

	LinkedinShareButton,
	LinkedinIcon,

	EmailShareButton,
	EmailIcon
} from "react-share";

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
	const slug = data.markdownRemark.fields.slug;
	const title = data.markdownRemark.frontmatter.title;
	const description = data.markdownRemark.frontmatter.description;
	const published = data.markdownRemark.frontmatter.date;
	const readTime = data.markdownRemark.timeToRead;
	const htmlAst = data.markdownRemark.htmlAst;

	const pageUrl = `https://www.chjweb.se/blogg/${slug}`;

	return (
		<Layout>
			<SEO title={title + " | Blogg"} description={description} url={pageUrl} />
			<article className="blog-posting">
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
				<SocialShare title={title} shareUrl={pageUrl} twitterVia="chj_web" size={48} />
				<section className="post-body">
					<div>{renderAst(htmlAst)}</div>
				</section>
				<SocialShare title={title} shareUrl={pageUrl} twitterVia="chj_web" size={48} />
			</article>
		</Layout>
	)
}

function SocialShare({ title, shareUrl, twitterVia, size }){
	return (
		<div className="share-area">
			<TwitterShareButton via={twitterVia} title={title} url={shareUrl}>
				<TwitterIcon 
					iconBgStyle={{fill: "#1da1f2"}} 
					logoFillColor="#f7f7f2" 
					size={size}
				/>
			</TwitterShareButton>

			<FacebookShareButton quote={title} url={shareUrl}>
				<FacebookIcon 
					iconBgStyle={{fill: "#4267B2"}} 
					logoFillColor="#f7f7f2" 
					size={size}
				/>
			</FacebookShareButton>

			<RedditShareButton title={title} url={shareUrl}>
				<RedditIcon 
					iconBgStyle={{fill: "#ff4500"}} 
					logoFillColor="#f7f7f2"  
					size={size}
				/>
			</RedditShareButton>

			<LinkedinShareButton title={title} url={shareUrl}>
				<LinkedinIcon 
					iconBgStyle={{fill: "#2867b2"}} 
					logoFillColor="#f7f7f2"  
					size={size}
				/>
			</LinkedinShareButton>

			<EmailShareButton title={title} url={shareUrl}>
				<EmailIcon 
					iconBgStyle={{fill: "#56535e"}} 
					logoFillColor="#f7f7f2" 
					size={size}
				/>
			</EmailShareButton>
		</div>
	)
}

export const query = graphql`
query PostQuery($slug: String!){
	markdownRemark( fields: { slug: { eq: $slug}} ){
		frontmatter{
			title
			description
			date(formatString: "DD MMM, Y", locale: "sv")
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
		fields {
			slug
		}
	}
}
`
