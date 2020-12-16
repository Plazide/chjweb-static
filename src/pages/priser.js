import React from "react";
import Intro from "../components/Intro";
import Layout from "../components/layout";
import Pros, { Pro } from "../components/Pros";
import SEO from "../components/seo";

// Illustrations
import { ReactComponent as Pricing } from "../images/illustrations/pricing_red.svg";

export default function priser(){
	return(
		<Layout>
			<SEO
				title="Priser"
				url="/priser"
				description="Jag tar ett fast pris, så att du aldrig behöver oroa dig för att kostnaderna springer iväg."
			/>
			<section className="hero">
				<div className="content">
					<div className="copy">
						<h1>Fast pris, inga överraskningar</h1>
						<p>För att du ska känna dig så trygg som möjligt bestämmer vi alltid ett pris innan utvecklingen påbörjas, och sedan håller vi oss till det.</p>
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
					title="Utveckling"
				>
					Innan jag ger er ett pris för utvecklingen av ert projekt kommer jag granska era krav och behov för att kunna uppskatta ett så rättvist pris som möjligt. Sedan kommer det priset att gälla för hela utvecklingen, oavsett om det tar en vecka eller en månad att slutföra.
				</Intro>

				<Pros title="Fördelar med fastpris">
					<Pro title="Inga överraskningar">
						Du vet exakt vad du betalar, oavsett hur lång tid det tar att slutföra arbetet
					</Pro>

					<Pro title="Efter dina behov">
						Priset är utformat efter arbetets krav och hur lång tid just din webbplats tar att bygga. Inte mer, inte mindre.
					</Pro>

					<Pro title="Till din fördel">
						Ett fast pris är alltid till din fördel. Det viktigaste är att du är nöjd, inte att jag ska tjäna pengar.
					</Pro>
				</Pros>

				<Intro title="Drift">
					Driften för din webbplats eller app kommer att kosta en liten summa varje månad. Vad summan är beror på projektets komplexitet, men du kan ofta förvänta dig runt 50 - 100 kr per månad. Denna summa kan även betalas årsvis.
				</Intro>
			</section>
		</Layout>
	);
}
