/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

function SEO({ description, lang, meta, title, url, structuredData, breadcrumb, image = "/images/small.png" }){
	const{ pathname } = useLocation();
	const path = pathname.split("/").filter( path => path !== "en").join("/");
	const{ site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
			siteUrl
          }
        }
      }
    `
	);

	const metaDescription = description || site.siteMetadata.description;

	return(
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			link={
				[
					{
						rel: "canonical",
						href: site.siteMetadata.siteUrl + url
					},
					{
						rel: "alternate",
						href: "https://chjweb.se" + path,
						hreflang: "sv"
					},
					{
						rel: "alternate",
						href: "https://chjweb.se/en" + path,
						hreflang: "en"
					}
				]
			}
			meta={[
				{
					name: "description",
					content: metaDescription
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: metaDescription
				},
				{
					property: "og:url",
					content: site.siteMetadata.siteUrl + url
				},
				{
					property: "og:image",
					content: site.siteMetadata.siteUrl + image
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "twitter:image",
					content: site.siteMetadata.siteUrl + image
				},
				{
					name: "twitter:card",
					content: "summary"
				},
				{
					name: "twitter:creator",
					content: site.siteMetadata.author
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: metaDescription
				}
			].concat(meta)}
		>
			{structuredData ? (
				Array.isArray(structuredData)
					? structuredData.map(
						(data, index) => <script type="application/ld+json" key={index}>{JSON.stringify(data)}</script>
					)
					: <script type="application/ld+json">{JSON.stringify(structuredData)}</script>) : ""}

			{breadcrumb
				? <script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": breadcrumb.map((data, index) => (
							{
								"@type": "ListItem",
								"position": index + 1,
								"name": data.name,
								"item": `https://chjweb.se${data.url}`
							}
						))
					})}
				</script>
				: ""
			}
		</Helmet>
	);
}

SEO.defaultProps = {
	lang: "sv",
	meta: [],
	description: ""
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	structuredData: PropTypes.array,
	breadcrumb: PropTypes.array,
	image: PropTypes.string
};

export default SEO;
