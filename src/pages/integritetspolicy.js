import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactMarkdown from "react-markdown";

// CSS
import "../styles/legal.css";
import { graphql } from "gatsby";

export default function integritetspolicy({ data }){
	const meta = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.rawMarkdownBody;

	return(
		<div>
			<Layout>
				<SEO
					title={meta.title}
					description={meta.description}
					url="/integritetspolicy/"
					breadcrumb={[
						{ name: meta.title, url: "/integritetspolicy/" }
					]}
				/>
				<section className="legal">
					<div className="content">
						<ReactMarkdown>
							{content}
						</ReactMarkdown>

						{/* <ul>
							<li><a href="https://support.google.com/chrome/answer/95647">Chrome</a></li>
							<li><a href="https://support.mozilla.org/sv/kb/aktivera-och-inaktivera-kakor-webbplatser-installningar">Firefox</a></li>
							<li><a href="https://support.microsoft.com/sv-se/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">Edge</a></li>
							<li><a href="https://support.microsoft.com/sv-se/help/17442/windows-internet-explorer-delete-manage-cookies">Internet Explorer</a></li>
						</ul> */}

					</div>
				</section>
			</Layout>
		</div>
	);
}

export const pageQuery = graphql`
query($language: String){
	markdownRemark(fields: { sourceName: { eq: $language} }){
		frontmatter{
			title
			description
		}
		rawMarkdownBody
	}
}
`;
