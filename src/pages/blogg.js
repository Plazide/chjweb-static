import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

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
						<h1>CHJ Webblösningar blogg</h1>
						<p>Jag, Carl Hallén Jansson, personen som driver CHJ Webblösningar, försöker dokumentera mina erfarenheter och prohekt genom den här bloggen. Du kan alltså läsa om projektet som jag har slutfört, och andra saker som jag lärt mig under min tid som egenföretagare.</p>
					</div>

					<ul className="posts">
						{posts.map( (item, index) => {
							const post = item.node;

							return(
								<Post 
									title={post.frontmatter.title}
									description={post.frontmatter.description}
									published={post.frontmatter.publish_date}
									readTime={post.timeToRead}
									index={index}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</Layout>
	)
}

function Post({ index, title, description, published, readTime }){
	const featured = index === 0 ? "featured" : "";

	return (
		<li className={`post ${featured}`}>
			<h2>{title}</h2>
			<p>{description}</p>
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
					publish_date(locale: "sv", formatString: "DD MMM, YYY")
					description
				}
				timeToRead
			}
		}
	}
}`;