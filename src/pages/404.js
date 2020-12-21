import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Css
import "../styles/404.css";

const NotFoundPage = () => {
	const{ t } = useTranslation("", { useSuspense: false });

	return(
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
};

NotFoundPage.propTypes = {
	pageContext: PropTypes.object
};

export default NotFoundPage;
