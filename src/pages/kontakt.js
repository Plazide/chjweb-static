import React from "react";
import { graphql } from "gatsby";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ButtonLink from "../components/ButtonLink";

// Utils
import parseNumber from "../utils/parseNumber";

// Css
import "../styles/contact.css";

export default function kontakt ({ data }){
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Kontakta mig",
			"description": "Ta kontakt med CHJ Webblösningar via telefon eller e-post",
			"publisher": {
				"@type": "LocalBusiness",
				"name": "CHJ Webblösningar"
			}
		}
	];
	const{ phone, email } = data.site.siteMetadata;

	return(
		<Layout>
			<SEO
				title="Kontakta mig"
				url="/kontakt/"
				description="Ta kontakt med CHJ Webblösningar via telefon eller e-post"
				breadcrumb={[
					{
						name: "Kontakta mig",
						url: "/kontakt/"
					}
				]}
				structuredData={structuredData}

			/>
			<section className="hero contact">
				<div className="content">
					<div className="copy">
						<h1>Kontakta mig</h1>
						<p>Har du några frågor? Är du ute efter en webbplats? Då kan du kontakta mig här!</p>
						<div className="buttons">
							<a className="button button-filled" href={`mailto:${email}`}>Skicka ett mejl</a>
							<a className="button button-outlined" href={`tel:${parseNumber(phone)}`}>Ring mig</a>
						</div>
					</div>
					<section className="info">
						<a href={`mailto:${email}`}>{email}</a>
						<a href={`tel:${phone}`}>{phone}</a>
					</section>
				</div>
			</section>
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
