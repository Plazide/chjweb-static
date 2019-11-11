import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Webbutveckling i Mariestad" />
		<section className="hero frontpage">
			<div className="content">
				<div className="copy">
					<h1>Jag utvecklar hemsidor</h1>
					<p>Jag skapar moderna och snabba hemsidor till ett ovanligt lågt pris.</p>
					<div className="btns">
						<a href="#" className="filled-button">Anlita mig</a>
						<a href="#" className="outlined-button">Kontakta mig</a>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
