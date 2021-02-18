import React from "react";
import Intro from "../components/Intro";
import Layout from "../components/layout";
import Pros, { Pro } from "../components/Pros";
import SEO from "../components/seo";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

// Illustrations
import { ReactComponent as Pricing } from "../images/illustrations/pricing_red.svg";
import ContactForm from "../components/ContactForm";
import PricingPlans from "../components/PricingPlans";

export default function priser(){
	const{ t, i18n } = useTranslation("Pricing", { useSuspense: false });
	const{ language } = i18n;

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

				{/* <Intro title={t("features.hosting.heading")}>
					{t("features.hosting.content")}
				</Intro> */}

				{
					language === "sv"
						? (
							<>
								<Intro
									title="Personlig webbutvecklare"
									style={{ marginBottom: 20 }}
								>
								Utöver utveckling kan ni anlita mig för att ta hand om er webbplats, så att ni inte behöver oroa er över: drift, utveckling, design, innehåll eller SEO. Jag tar hand om allt. Läs mer om att anlita mig som en <Link to="/egen-webbutvecklare">personlig webbutvecklare</Link> eller välj en plan här nedanför.
								</Intro>
								<PricingPlans showDescription={false} showHeading={false} />
							</>
						)
						: null
				}
			</section>

			<ContactForm
				heading={t("cta.heading")}
				paragraph={t("cta.content")}
			/>
		</Layout>
	);
}
