import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Styles
import "../styles/about.css";
import ContactForm from "../components/ContactForm";

export default function About({ data }){
	console.log(data);
	const frontmatter = data.markdownRemark.frontmatter;
	const{ title, description, heading, paragraph } = frontmatter;
	const content = data.markdownRemark.rawMarkdownBody;
	const image = data.imageSharp.fluid;

	return(
		<Layout>
			<SEO
				title={title}
				description={description}
			/>
			<section className="hero about-page">
				<div className="content">
					<div className="copy">
						<h1>{heading}</h1>
						<p>{paragraph}</p>
					</div>
					<div className="illustration">
						<Img fluid={image} alt="Carl Hallén Jansson" />
					</div>
				</div>
			</section>
			<section className="story about-page">
				<div className="content">
					<ReactMarkdown>
						{content}
					</ReactMarkdown>
				</div>
			</section>
			<ContactForm />
		</Layout>
	);
}

About.propTypes = {
	data: PropTypes.object
};

export const pageQuery = graphql`
query($language: String){
	markdownRemark(fields: { sourceName: { eq: $language }, slug: { eq: "about" } }){
		frontmatter{
			title
			description
			paragraph
			heading
		}
		rawMarkdownBody
	}
	imageSharp(fluid: { originalName: { eq: "profile.jpg" } }){
		fluid(maxWidth: 500){
			...GatsbyImageSharpFluid
		}
	}
}
`;
