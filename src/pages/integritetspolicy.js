import React from 'react'

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

// CSS
import "../styles/legal.css";

export default function integritetspolicy() {
	return (
		<div>
			<Layout>
				<SEO 
					title="Integritetspolicy"
					description="Integritetspolicy för CHJ Webblösningar."
					url="/integritetspolicy"
					breadcrumb={[
						{ name: "Integritetspolicy", url: "/integritetspolicy" }
					]}
				/>
				<section className="legal">
				<div class="content">
					<h1>Hantering av personuppgifter</h1>

					<p>Beroende på hur du använder hemsidan kan CHJ Webblösningar komma att samla in vissa personuppgifter. Dessa personuppgifter inkluderar, för närvarande, endast din e-postadress. CHJ Webblösningar använder din e-post för att kontakta dig vid ett senare skede. Om det gäller en granskning kommer ett svar med en rapport om den angivna webbplatsen skickas till e-postadressen. Om det gäller en förfrågan om att anlita mig kommer e-posten användas som en kommunikationskanal under utvecklingen av projektet.</p>

					<h1>Hantering av cookies</h1>
					<p>chjweb.se använder cookies för att kunna föra statistik om hur sidan används samt för att kunna upptäcka om användaren är inloggad på webbplatsen. Om du som användare inte accepterar den här användningen av cookies kan du avaktivera dem i din webbläsare genom att följa guiden för din webbläsare.</p>

					<ul>
						<li><a href="https://support.google.com/chrome/answer/95647">Chrome</a></li>
						<li><a href="https://support.mozilla.org/sv/kb/aktivera-och-inaktivera-kakor-webbplatser-installningar">Firefox</a></li>
						<li><a href="https://support.microsoft.com/sv-se/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">Edge</a></li>
						<li><a href="https://support.microsoft.com/sv-se/help/17442/windows-internet-explorer-delete-manage-cookies">Internet Explorer</a></li>
					</ul>

				</div>
				</section>
			</Layout>
		</div>
	)
}
