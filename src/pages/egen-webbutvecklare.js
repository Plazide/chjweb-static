import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/Intro";
import Pros, { Pro } from "../components/Pros";
import FAQ, { Question } from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Row from "../components/Row";

// Icons
import { ReactComponent as DeveloperIllustration } from "../images/illustrations/webbutvecklare.svg";
import { ReactComponent as NegotiateIllustration } from "../images/illustrations/negotiate.svg";
import { ReactComponent as StatsIllustration } from "../images/illustrations/stats.svg";
import { ReactComponent as ImportantIllustration } from "../images/illustrations/important.svg";
import PricingPlans from "../components/PricingPlans";

export default function Page(){
	return(
		<Layout>
			<SEO
				title="Er egna webbutvecklare"
				description="Jag är er egna webbutvecklare. För en liten månatlig summa hjälper jag er med utveckling, design, drift, innehåll och SEO."
			/>
			<section className="hero">
				<div className="content">
					<div className="copy">
						<h1>Sluta oroa er över hemsidan, prenumerera på en webbutvecklare</h1>
						<p>Låt en kunnig webbutvecklare ta hand om er hemsida. Jag hjälper er med utveckling, design, drift, SEO och innehåll mot en mindre summa varje månad.</p>
					</div>

					<div className="illustration">
						<DeveloperIllustration />
					</div>
				</div>
			</section>

			<section className="features">
				<Intro
					title="Jag sköter er webbplats"
				>
					Det finns viktigare saker att ägna sig åt än att hålla webbplatsen uppdaterad med funktioner och innehåll. Därför tar jag hand om den åt er. Jag finns alltid ett e-postmeddelande eller telefonsamtal bort.
				</Intro>

				<Pros title="Ni säger till, jag fixar">
					<Pro title="Utveckling">
						Nya funktioner? Inga problem det fixar jag.
					</Pro>

					<Pro title="Design">
						Ny design på webbplatsen? Absolut det ordnar jag direkt.
					</Pro>

					<Pro title="Drift">
						Ökar er trafik? Det är lugnt jag ser till att webbplatsen hanterar det.
					</Pro>

					<Pro title="SEO">
						Behöver ni ranka bättre i sökresultaten? Jag ser till att sökmotoroptimera er webbplats.
					</Pro>

					<Pro title="Innehåll">
						Behöver ni nya texter? Jag tar fram optimerade texter som ger resultat.
					</Pro>

					<Pro title="Buggar">
						Finns det buggar på webbplatsen? Jag fixar dem direkt.
					</Pro>
				</Pros>

				<Row
					title="Slösa inte tid på förhandlingar"
					align="left"
					illustration={<NegotiateIllustration />}
				>
					När ni vill ha en ändring på er webbplats fixar jag det direkt, utan några långdragna förhandlingar om kompensation eller tidsramar.
				</Row>

				<Row
					title="Var säker på att webbplatsen fungerar, hela tiden"
					align="right"
					illustration={<StatsIllustration />}
				>
					Med en webbutvecklare som alltid finns till ert förfogande och som övervakar problem med webbplatsen åt er, kan ni alltid vara säkra på att den fungerar.
				</Row>

				<Row
					title="Lägg tid på det som är viktigt"
					align="left"
					illustration={<ImportantIllustration />}
				>
					Webbplatsen är en viktig kanal för att generera leads och kunder, men det kan vara tidskrävande att underhålla och säkerställa dess effektivitet. Låt mig göra detta, så ni har tid till annat.
				</Row>
			</section>

			<section className="pricing">
				<div className="content">
					<PricingPlans />
				</div>
			</section>

			<FAQ title="Vanliga frågor">
				<div className="column">
					<Question title="Vad händer om vi inte använder dina tjänster?">
					Om ni känner att ni inte får tillräckligt med värde från mina tjänster kan ni säga upp prenumerationen när som helst.
					</Question>

					<Question title="Får vi tillbaka pengarna om vi avbryter en årsprenumeration?">
					Nej, men mina tjänster kommer fortfarande gälla för resten av det året. Innan vi förnyar avtalet kommer jag fråga er om ni vill betala för ett år till eller säga upp tjänsten.
					</Question>

					<Question title="Betalar vi själva för driften av webbplatsen?">
					Ibland. Om ni ber mig att ta hand om en existerande webbplats kan jag inte alltid ta hand om driften. I det fallet måste ni fortsätta betala webbhotellet själva. Om ni däremot anlitar mig för att bygga er hemsida kommer jag ta hand om driften utan extra kostnad.
					</Question>

					<Question title="Bygger du en hemsida om vi beställer en prenumeration?">
					Ja. Jag tar hand om allting när det kommer till er webbplats, det inkluderar att bygga den.
					</Question>

					<Question title="Visas priserna med eller utan moms?">
					Alla priser visas exklusive moms.
					</Question>

					<Question title={"Vad händer när man trycker på \"Beställ\"?"}>
					När du trycker på beställ-knappen kommer du frågas om en e-post adress, denna kommer vara er kontakt på företaget. Det går naturligtvis att ändra detta senare. Efter en liten stund kommer jag att skicka ett meddelande där jag frågar efter mer information och en länk där ni kan aktivera er prenumeration.
						<br />
						<br />
					Detta betyder alltså att ni inte binder er till något när ni klickar på Beställ.
					</Question>
				</div>

				<div className="column">
					<Question title="Är mängden arbete du lägger ned på vår webbplats begränsad?">
					Ja och nej. Beroende på vilken prenumeration ni väljer är arbetet begränsat. Om ni väljer den dyraste prenumerationen är arbetet inte begränsat, men om ni väljer någon av de billigare planerna är arbetet begränsat till ett visst antal ändringar.
					</Question>

					<Question title="Vad räknas som en ändring?">
					En ändring är när jag slutför en uppgift. Det beror på storleken på uppgiften. Om ni vill att jag fixar en felstavning kommer det inte att räknas. Om ni istället vill ha en helt ny sida på webbplatsen räknas det som en ändring.

						<br />
						<br />

					Om det finns problem på webbplatsen, alltså buggar, fixar jag dem utan att räkna det som en ändring.
					</Question>

					<Question title="Vad händer om vi går över antalet ändringar i vår prenumeration under en månad?">
					Då betalar ni helt enkelt extra för de ändringarna. Hur mycket ni betalar extra och hur många ändringar som ingår framgår av priserna ovan.
					</Question>

					<Question title="Vad menas med hemsida i priserna?">
					Det är antalet hemsidor ni vill att jag ska ta hand om.
					</Question>

					<Question title="Vad innebär prioritet i priserna?">
					Beroende på vilken plan ni väljer kommer ert arbete prioriteras över andra uppgifter. Om jag inte hinner med ert arbete kommer det att outsourcas utan extra kostnad eller handling från er sida. Med andra ord: jobbet blir alltid gjort.
					</Question>
				</div>
			</FAQ>

			<ContactForm heading="Har du fler frågor?" paragraph="Hör av dig så kan vi diskutera." />
		</Layout>
	);
}
