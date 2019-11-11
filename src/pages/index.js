import React from "react";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";

// Images
import illustrationUrl, { ReactComponent as Illustration} from "../images/illustrations/create.svg";

const IndexPage = () => (
	<Layout>
		<SEO title="Webbutveckling i Mariestad" />
		<section className="hero frontpage">
			<div className="content">
				<div className="copy">
					<h1>Jag skapar hemsidor</h1>
					<p>Jag skapar moderna och snabba hemsidor till ett ovanligt lågt pris.</p>
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
	</Layout>
);

export default IndexPage;
