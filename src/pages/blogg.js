import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import SEO from "../components/seo";

// CSS
import "../styles/blog.css";

export default function blogg({ data }){
	const{ t } = useTranslation("Blog", { useSuspense: false });
	const posts = data.allMarkdownRemark.edges;
	const hashnodePosts = data.allHashnode.edges.map( edge => edge.node);
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
				title={t("seo.title")}
				description={t("seo.description")}
				url="/blogg/"
				structuredData={structuredData}
				breadcrumb={[
					{ name: t("seo.title"), url: "/blogg/" }
				]}
			/>
			<section className="blog">
				<div className="content">
					<ul className="posts">
						{posts.map( (item, index) => {
							const post = item.node;
							const featured = index === 0;
							const slug = post.fields.slug;
							const image = post.frontmatter.image.childImageSharp.fluid;
							const publishDate = formatDate(post.frontmatter.date);

							return(
								<Post
									key={slug}
									image={image}
									featured={featured}
									url={`/blogg/${slug}`}
									title={post.frontmatter.title}
									description={post.frontmatter.description}
									published={publishDate}
									readTime={post.timeToRead}
								/>
							);
						})}
					</ul>

					<hr style={{ marginBottom: 100 }} />

					<h2 className="heading">{t("technical.heading")}</h2>
					<ul className="posts hashnode">
						{hashnodePosts.map( post => {
							const{ slug, title, brief, dateAdded, coverImage, readTime } = post;

							return(
								<Post
									key={slug}
									image={coverImage.childImageSharp.fluid}
									featured={false}
									url={`https://blog.chjweb.se/${slug}`}
									title={title}
									description={brief}
									published={formatDate(dateAdded)}
									readTime={readTime}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</Layout>
	);
}

function Post({ title, description, published, readTime, image, url, featured }){
	const content = <>
		<Img fluid={image} />
		<div className="meta">
			<span className="published">{published}</span>
			<span className="read-time">{readTime} minuter</span>
		</div>
		<h2>{title}</h2>
		<p>{description}</p>
	</>;

	if(url.startsWith("http"))
		return(
			<li className={`post ${featured ? "featured" : ""}`}>
				<a href={url}>
					{content}
				</a>
			</li>
		);

	return(
		<li className={`post ${featured ? "featured" : ""}`}>
			<Link to={url}>
				{content}
			</Link>
		</li>
	);
}

function formatDate(date){
	return new Intl.DateTimeFormat("sv-SE", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	}).format(new Date(date));
}

export const pageQuery = graphql`
query BloggQuery{
	allHashnode{
		edges{
			node{
				title
				slug
				brief
				readTime
				dateAdded
				dateUpdated
				coverImage{
					childImageSharp{
						fluid(maxWidth: 870, maxHeight: 380, quality: 100){
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}		
	}
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

blogg.propTypes = {
	data: PropTypes.object
};

Post.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	published: PropTypes.string,
	readTime: PropTypes.timeToRead,
	image: PropTypes.object,
	url: PropTypes.string,
	featured: PropTypes.bool
};
