
function addTrailingSlash (path){
	const hasSlash = path.substr(-1) === "/";
	const addedSlash = path + "/";
	return!hasSlash ? addedSlash : path;
}

module.exports = {
	siteMetadata: {
		title: "CHJ Webblösningar",
		description: "Skaffa dig en modern, väl presterande och säker hemsida med CHJ Webblösningar.",
		author: "CHJ Webblösningar",
		siteUrl: "https://chjweb.se",
		lang: "sv",
		streetAddress: "Basunvägen 2",
		zipCode: "542 41",
		city: "Mariestad",
		email: "contact@chjweb.se",
		phone: "0501-60 19 09"
	},
	plugins: [
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-143244918-1",
				head: true
			}
		},
		{
			resolve: "gatsby-plugin-hotjar",
			options: {
				id: 1392838,
				sv: 6
			}
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-feed",
			options: {
				query: `
				{
					site {
						siteMetadata{
							title
							description
							siteUrl
							site_url: siteUrl
						}
					}
				}
				`,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map( edge => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.frontmatter.description,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
									guid: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
									custom_elements: [{ "content:encoded": edge.node.html }]
								});
							});
						},
						query: `
						{
							allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] } ){
								edges {
									node{
										frontmatter{
											description
											title
											date
										}
										fields {
											slug
										}
										html
									}
								}
							}
						}
						`,
						output: "/rss.xml",
						title: "CHJ Webblösningar RSS Feed",
						match: "^/blogg/.*$"
					}
				]
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "media",
				path: `${__dirname}/src/media`
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/content/blog`
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-component",
					"gatsby-remark-relative-images",
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 1080
						}
					}
				]
			}
		},
		"gatsby-plugin-svgr",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				policy: [
					{
						userAgent: "*",
						allow: "/",
						disallow: "/admin"
					}
				]
			}
		},
		{
			resolve: "gatsby-plugin-sitemap",
			options: {
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}
					allSitePage {
						edges {
							node {
								path
							}
						}
					}
				}
				`,
				serialize: ({ site, allSitePage }) => {
					return allSitePage.edges.map( edge => {
						const path = edge.node.path;
						let priority = 0.8,
							changefreq = "daily",
							url = addTrailingSlash(site.siteMetadata.siteUrl + path);

						priority = /^\/integritetspolicy/.test(path) ? 0.2 : priority;
						priority = /^\/blogg\/.+/.test(path) ? 0.9 : priority;

						return{
							url,
							changefreq,
							priority
						};
					});
				}
			}
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "chj-webblösningar",
				short_name: "chjweb",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#c63d3d",
				display: "minimal-ui",
				icon: "src/images/favicon.png" // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
