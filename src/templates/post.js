import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import rehypeReact from "rehype-react";

import BackgroundImage from "gatsby-background-image";

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

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
	createElement: React.createElement
}).Compiler;

export default function post({ data }){
	useEffect( () => {
		if(!data.markdownRemark)
			navigate("/blogg");
	}, [data.markdownRemark]);

	if(!data.markdownRemark) return"";

	const featuredImage = data.markdownRemark.frontmatter.image.childImageSharp.fluid;
	const slug = data.markdownRemark.fields.slug;
	const title = data.markdownRemark.frontmatter.title;
	const description = data.markdownRemark.frontmatter.description;
	const published = data.markdownRemark.frontmatter.date;
	const updated = data.markdownRemark.frontmatter.updated;
	const readTime = data.markdownRemark.timeToRead;
	const htmlAst = data.markdownRemark.htmlAst;
	const logoUrl = data.imageSharp.fixed.src;

	const formattedPublishDate = new Intl.DateTimeFormat("sv-SE", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	}).format(new Date(published));
	const pageUrl = `https://chjweb.se/blogg/${slug}`;

	const structuredData = {
		"@context": "http://schema.org",
		"@type": "BlogPosting",
		"@id": pageUrl,
		"headline": title,
		"description": description,
		"datePublished": published,
		"dateModified": updated,
		"image": featuredImage.src,
		"mainEntityOfPage": pageUrl,
		"author": "Carl Hallén Jansson",
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

	return(
		<Layout>
			<SEO
				title={title + " | Blogg"}
				description={description}
				url={`/blogg/${slug}`}
				structuredData={structuredData}
				breadcrumb={[
					{ name: "Blogg", url: "/blogg" },
					{ name: title, url: `/blogg/${slug}` }
				]}
				image={featuredImage.src}
			/>
			<article className="blog-posting">
				<div className="post-heading">
					{/* <Img fluid={featuredImage} className="featured-image" /> */}
					<BackgroundImage
						className="featured-image"
						fluid={featuredImage}
					>
						<div className="title">
							<h1>{title}</h1>
						</div>
					</BackgroundImage>
					<div className="meta">
						<span>{formattedPublishDate}</span>
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
	);
}

function SocialShare({ title, shareUrl, twitterVia, size }){
	return(
		<div className="share-area">
			<TwitterShareButton via={twitterVia} title={title} url={shareUrl}>
				<TwitterIcon
					iconBgStyle={{ fill: "#1da1f2" }}
					logoFillColor="#f7f7f2"
					size={size}
				/>
			</TwitterShareButton>

			<FacebookShareButton quote={title} url={shareUrl}>
				<FacebookIcon
					iconBgStyle={{ fill: "#4267B2" }}
					logoFillColor="#f7f7f2"
					size={size}
				/>
			</FacebookShareButton>

			<RedditShareButton title={title} url={shareUrl}>
				<RedditIcon
					iconBgStyle={{ fill: "#ff4500" }}
					logoFillColor="#f7f7f2"
					size={size}
				/>
			</RedditShareButton>

			<LinkedinShareButton title={title} url={shareUrl}>
				<LinkedinIcon
					iconBgStyle={{ fill: "#2867b2" }}
					logoFillColor="#f7f7f2"
					size={size}
				/>
			</LinkedinShareButton>

			<EmailShareButton title={title} url={shareUrl}>
				<EmailIcon
					iconBgStyle={{ fill: "#56535e" }}
					logoFillColor="#f7f7f2"
					size={size}
				/>
			</EmailShareButton>
		</div>
	);
}

export const query = graphql`
query PostQuery($slug: String!){
	markdownRemark( fields: { slug: { eq: $slug}}, frontmatter: { published: { eq: true } } ){
		frontmatter{
			title
			description
			date(formatString: "YYYY-MM-DD")
			updated(formatString: "YYYY-MM-DD")
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
	imageSharp( fixed: { originalName: { eq: "logotyp.png" } } ){
		fixed(width: 265){
			src
		}
	}
}
`;

post.propTypes = {
	data: PropTypes.object
};

SocialShare.propTypes = {
	title: PropTypes.string,
	shareUrl: PropTypes.string,
	twitterVia: PropTypes.string,
	size: PropTypes.number
};
