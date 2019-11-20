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
				/>
				<section className="legal">
				<div class="content">
					<h1>Hantering av personuppgifter</h1>

					<p>För att CHJ webblösningar ska kunna genomföra avtalet med kunden samlas vissa personuppgifter från kunden. Dessa uppgifter inkluderar namn och e-postadress. Kundens namn används för att identifiera kunden, det vill säga för att veta vem som köper tjänsten. E-postadressen används för att kommunicera med kunden och för att kunna skicka en faktura på den utförda tjänsten. Andra personuppgifter kan också komma samlas in vid kundens samtycke.</p>

					<p>När en användare skickar meddelande från CHJ webblösningars webbplats(chjweb.se) via ett kontaktformulär begärs vissa personuppgifter från användaren. För att kunna skicka ett meddelande måste användaren ange sitt namn och sin e-postadress. Användarens namn används för att kunna identifiera användaren och e-postadressen används för att kunna svara på användarens meddelande.</p>

					<p>E-postmeddelanden som skickas via webbplatsen sparas tills då ärendet som användaren vill ha hjälp med är avklarat. Om ärendet gäller beställning av en hemsida kommer användarens e-post sparas tills avtalet för beställningen är avklarat.</p>

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
