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
	if(node.internal.type === "MarkdownRemark" && node.frontmatter && node.frontmatter.type === "post" ){
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
/*
const localesContent = {
	en: fs.readFileSync(path.join(__dirname, "src/locales/en/index.json"), "utf8"),
	sv: fs.readFileSync(path.join(__dirname, "src/locales/sv/index.json"), "utf8")
};
const availableLocales = [
	{ value: "en", text: "English" },
	{ value: "sv", text: "Svenska" }
];
const defaultLocales = { value: "sv", text: "Svenska" }; */

/* exports.onCreatePage = async props => {
	const{
		page,
		actions: { createPage, deletePage, createRedirect }
	} = props;

	if(/^\/dev-404-page\/?$/.test(page.path))
		return;

	deletePage(page);

	availableLocales.map(({ value }) => {
		let newPath = `/${value}${page.path}`;
		if(defaultLocales.value === value)
			newPath = page.path;

		const localePage = {
			...page,
			originalPath: page.path,
			path: newPath,
			context: {
				availableLocales,
				locale: value,
				routed: true,
				data: localesContent[value],
				originalPath: page.path
			}
		};
		createPage(localePage);
	});
}; */

function createSlug({ node }){
	const filePath = node.fileAbsolutePath;
	const parts = filePath.split("/");
	const slug = remove(parts[parts.length - 1].split(".")[0]);

	return slug;
}
