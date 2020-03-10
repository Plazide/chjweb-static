/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const{ fmImagesToRelative } = require("gatsby-remark-relative-images");
const{ remove } = require("confusables");

exports.onCreateNode = ({ node, actions, getNode }) => {
	const{ createNodeField } = actions;
	fmImagesToRelative(node);
	if(node.internal.type === "MarkdownRemark"){
		const value = createSlug({ node });
		createNodeField({
			name: "slug",
			node,
			value
		});
	}
};

exports.createPages = async ({ actions, graphql }) => {
	const{ createPage } = actions;

	const result = await graphql(`
	{
		allMarkdownRemark{
			edges{
				node{
					fields{
						slug
					}
				}
			}
		}
	}`);
	const posts = result.data.allMarkdownRemark.edges;

	posts.forEach( ({ node }) => {
		createPage({
			path: `/blogg/${node.fields.slug}`,
			component: path.resolve("./src/templates/post.js"),
			context: {
				slug: node.fields.slug
			}
		});
	});

	return posts;
};

function createSlug ({ node }){
	const filePath = node.fileAbsolutePath;
	const parts = filePath.split("/");
	const slug = remove(parts[parts.length - 1].split(".")[0]);

	return slug;
}
