import React from "react";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";

// Images
import illustrationUrl, { ReactComponent as Illustration} from "../images/illustrations/create.svg";
import waveUrl, { ReactComponent as Wave } from "../images/illustrations/wave.svg";
import arrowUrl, { ReactComponent as Arrow } from "../images/illustrations/arrow.svg";

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Webbutveckling i Mariestad" />
		<section className="hero frontpage">
			<Wave className="background" />
			<div className="content">
				<div className="copy">
					<a href={`/blogg/${data.allMarkdownRemark.nodes[0].fields.slug}`} className="featured">
						<span>Senaste inlägget: </span>
						<span className="title">{data.allMarkdownRemark.nodes[0].frontmatter.title}</span>
						<Arrow />
					</a>
					<h1>Jag skapar hemsidor</h1>
					<p>Jag skapar moderna, snygga, snabba och unika hemsidor med hjälp av den senaste tekniken inom webbutveckling.</p>
					<div className="btns">
						<ButtonLink href="#" variant="filled">Anlita mig</ButtonLink>
						<ButtonLink href="#" variant="outlined">Kontakt mig</ButtonLink>
					</div>
				</div>

				<div className="illustration">
					<Illustration />
				</div>
			</div>
		</section>

		<section className="features">
			
		</section>
	</Layout>
);

export const pageQuery = graphql`
query FeaturedQuery {
	allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}){
		nodes {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
}
`

export default IndexPage;
