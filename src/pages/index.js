import React from "react";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";

// Images
import illustrationUrl, { ReactComponent as Illustration} from "../images/illustrations/create.svg";
import waveUrl, { ReactComponent as Wave } from "../images/illustrations/wave.svg";

const IndexPage = () => (
	<Layout>
		<SEO title="Webbutveckling i Mariestad" />
		<section className="hero frontpage">
			<Wave className="background" />
			<div className="content">
				<div className="copy">
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

export default IndexPage;
