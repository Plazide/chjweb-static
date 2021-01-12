/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const{ createRemoteFileNode } = require("gatsby-source-filesystem");
const{ request, gql } = require("graphql-request");
const{ remove } = require("confusables");

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId }) => {
	const{ createNodeField, createNode } = actions;
	const disallowedTypes = ["tech", "project"];
	if(
		node.internal.type === "MarkdownRemark" &&
		node.frontmatter &&
		!disallowedTypes.includes(node.frontmatter.type)
	){
		const value = createSlug({ node });
		createNodeField({
			name: "slug",
			node,
			value
		});
	}

	if(node.internal.type === "Hashnode" && node.coverImageUrl !== null){
		const fileNode = await createRemoteFileNode({
			url: node.coverImageUrl,
			parentNodeId: node.id,
			createNode,
			createNodeId,
			cache,
			store
		});

		if(fileNode)
			node.coverImage___NODE = fileNode.id;
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
		console.log(node);
		if(!node.fields.slug) return;

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

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
	const query = gql`
		query{
			user(username: "chjweb"){
				publication{
					posts{
						title
						slug
						brief
						dateAdded
        				dateUpdated
						contentMarkdown
						coverImageUrl: coverImage
					}
				}
			}
		}
	`;

	const result = await request("https://api.hashnode.com", query);

	result.user.publication.posts.forEach( post => {
		const content = post.contentMarkdown;
		delete post.contentMarkdown;

		const node = {
			...post,
			readTime: Math.ceil(content.split(" ").length / 200),
			id: createNodeId(`Hashnode-${post.slug}`),
			internal: {
				type: "Hashnode",
				contentDigest: createContentDigest(post)
			}
		};

		actions.createNode(node);
	});
};

exports.createSchemaCustomization = ({ actions }) => {
	const{ createTypes } = actions;

	createTypes`
		type Hashnode implements Node {
			coverImage: File @link(from: "coverImage___NODE")
		}
	`;
};

function createSlug({ node }){
	const filePath = node.fileAbsolutePath;
	const parts = filePath.split("/");
	const slug = remove(parts[parts.length - 1].split(".")[0]);

	return slug;
}
