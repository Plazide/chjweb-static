import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// Components
import ButtonLink from "./ButtonLink";

// css
import "./styles/cta.css";

export default function CTA({ title, children }){
	const{ t } = useTranslation("CTA", { useSuspense: false });

	return(
		<section className="cta">
			<div className="content">
				<h1>{title}</h1>
				<p>{children}</p>

				<ButtonLink variant="filled" href="/kontakt">{t("button")}</ButtonLink>
			</div>
		</section>
	);
}

CTA.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};
