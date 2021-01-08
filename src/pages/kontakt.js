import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Utils
import parseNumber from "../utils/parseNumber";

// Illustrations
import { ReactComponent as Email } from "../images/illustrations/email_hero.svg";
import ContactForm from "../components/ContactForm";

export default function kontakt({ data, pageContext: { locale, data: localeData } }){
	const{ t } = useTranslation("Contact", { useSuspense: false });
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Kontakta mig",
			"description": t("seo.description"),
			"publisher": {
				"@type": "LocalBusiness",
				"name": "CHJ Webblösningar"
			}
		}
	];
	const{ phone, email } = data.site.siteMetadata;

	return(
		<Layout locale={locale} localeData={localeData}>
			<SEO
				title={t("seo.title")}
				url="/kontakt/"
				description={t("seo.description")}
				breadcrumb={[
					{
						name: t("seo.title"),
						url: "/kontakt/"
					}
				]}
				structuredData={structuredData}

			/>
			<section className="hero contact">
				<div className="content">
					<div className="copy">
						<h1>{t("hero.heading")}</h1>
						<p>{t("hero.content")}</p>

						<div className="buttons">
							<a className="button button-filled" href={`mailto:${email}`}>{t("hero.mailto")}</a>
							<a className="button button-outlined call" href={`tel:${parseNumber(phone)}`}>{t("hero.tel")}</a>
						</div>
					</div>

					<div className="illustration">
						<Email />
					</div>
				</div>
			</section>
			<ContactForm />
		</Layout>
	);
}

export const pageQuery = graphql`
query {
	site {
		siteMetadata{
			email
			phone
		}
	}
}
`;

kontakt.propTypes = {
	data: PropTypes.object
};
