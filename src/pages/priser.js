import React from "react";
import Intro from "../components/Intro";
import Layout from "../components/layout";
import Pros, { Pro } from "../components/Pros";
import SEO from "../components/seo";
import { useTranslation } from "gatsby-plugin-react-i18next";

// Illustrations
import { ReactComponent as Pricing } from "../images/illustrations/pricing_red.svg";
import ContactForm from "../components/ContactForm";

export default function priser(){
	const{ t } = useTranslation("Pricing", { useSuspense: false });

	return(
		<Layout>
			<SEO
				title={t("seo.title")}
				url="/priser"
				description={t("seo.description")}
			/>
			<section className="hero">
				<div className="content">
					<div className="copy">
						<h1>{t("hero.heading")}</h1>
						<p>{t("hero.content")}</p>
					</div>
					<div className="illustration">
						<Pricing />
					</div>
				</div>
			</section>

			<section className="features">
				{/* <div className="copy intro">
					<h1>Ett rättvist pris</h1>
					<p>Innan jag ger er ett pris kommer jag granska era krav och behov för att kunna uppskatta ett så rättvist pris som möjligt.</p>
				</div> */}
				<Intro
					title={t("features.development.heading")}
				>
					{t("features.development.content")}
				</Intro>

				<Pros title={t("features.benefits.heading")}>
					<Pro title={t("features.benefits.1.heading")}>
						{t("features.benefits.1.content")}
					</Pro>

					<Pro title={t("features.benefits.2.heading")}>
						{t("features.benefits.2.content")}
					</Pro>

					<Pro title={t("features.benefits.3.heading")}>
						{t("features.benefits.3.content")}
					</Pro>
				</Pros>

				<Intro title={t("features.hosting.heading")}>
					{t("features.hosting.content")}
				</Intro>
			</section>

			<ContactForm
				heading={t("cta.heading")}
				paragraph={t("cta.content")}
			/>
		</Layout>
	);
}
