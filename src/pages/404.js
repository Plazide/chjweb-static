import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Css
import "../styles/404.css";

const NotFoundPage = () => (
	<Layout>
		<SEO title="Sidan hittades inte" />
		<section className="not-found">
			<div className="content">
				<a href="/">Tillbaka</a>
				<h1>Sidan kunde inte hittas!</h1>
				<span className="code">404</span>
			</div>
		</section>
		
	</Layout>
);

export default NotFoundPage;
