import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import ButtonLink from "../components/ButtonLink";
import Layout from "../components/layout";
import Row from "../components/Row";
import SEO from "../components/seo";

// Illustrations
import SEOIcon from "../images/illustrations/seo.svg";
import ShopIcon from "../images/illustrations/shop.svg";
import HostingIcon from "../images/illustrations/hosting.svg";
import DoneIcon from "../images/illustrations/done.svg";
import CreateIcon from "../images/illustrations/create.svg";
import ImagesIcon from "../images/illustrations/images.svg";
import ContactForm from "../components/ContactForm";

export default function gatsby({ data }){
	const image = data.imageSharp.fluid;

	return(
		<Layout>
			<SEO
				title="Gatsby"
				url="/gatsby"
				description="Gatsby är ett ramverk som gör det enkelt att bygga snabba hemsidor som kan drivas utan kostnad. Tror du mig inte? Hör av dig så förklarar jag mer."
			/>
			<section className="hero">
				<div className="content">
					<div className="copy">
						<h1>Snabbare hemsidor med Gatsby</h1>
						<p>Med hjälp av Gatsby kan jag bygga en otroligt snabb webbplats som samtidigt kan drivas gratis. Visst verkar det otroligt? Men det är sant, och jag kan hjälpa dig flytta din webbplats eller bygga en ny.</p>
						<div className="btns">
							<ButtonLink href="/kontakt" variant="filled">Kontakta mig</ButtonLink>
						</div>
					</div>

					<div className="illustration">
						<Img fluid={image} alt="GatsbyJS" />
					</div>
				</div>
			</section>
			<section className="features">
				<div className="copy intro">
					<h1>En bättre upplevelse</h1>
					<p>Gatsby ger upplevelsen av en snabbare webbplats. Genom att ladda sidor i bakgrunden, optimering av bilder och statiskt renderade sidor blir webbplatsen snabbare och besökarna nöjdare. Detta ökar chansen att dina webbplats-besökare blir kunder.</p>
				</div>
				<Row
					title="Ökad synlighet"
					align="left"
					illustration={SEOIcon}
				>
					Snabba webbplatser har en fördel i sökresultaten. Det betyder att din webbplats skulle visas över dina konkurrenter i Google och därmed generera fler kunder.
				</Row>
				<Row
					title="Ökad konvertering"
					illustration={ShopIcon}
				>
					Med Gatsby är det större chans att dina besökare stannar på webbplatsen. Eftersom dina besökare förväntar sig att webbplatsen laddar på under 2 sekunder ökar chansen att de stannar när webbplatsen är snabb. Detta ökar därmed chansen att dina besökare blir kunder.
				</Row>
				<Row
					title="Gratis drift"
					align="left"
					illustration={HostingIcon}
				>
					Eftersom Gatsby genererar JAMstack-sidor, kan din webbplats ofta drivas gratis med hjälp av en tjänst för statiska webbplatser. Detta betyder inte bara att du kan får fler kunder, utan också att din webbplats blir billigare.
				</Row>
			</section>
			<section className="features">
				<div className="copy intro">
					<h1>Hur funkar Gatsby?</h1>
					<p>Det kan låta som att Gatsby är för bra för att vara sant. Det är sant, och jag kommer berätta hur det fungerar.</p>
				</div>

				<Row
					title="Redo att serveras"
					align="left"
					illustration={DoneIcon}
				>
						Gatsby genererar JAMstack webbplatser. Det betyder att det inte finns någon server bakom webbplatsen som bygger ihop sidorna vid varje hämtning. Allting är färdigt att serveras när dina besökare vill titta på sidan.
				</Row>
				<Row
					title="Färdig i förväg"
					illustration={CreateIcon}
				>
					Gatsby hämtar andra sidor på webbplatsen som du är trolig att besöka. På så sätt känns det otroligt snabbt att klicka runt på webbplatsen.
				</Row>
				<Row
					title="Optimerade bilder"
					align="left"
					illustration={ImagesIcon}
				>
					En vanlig anledning till långsamma webbplatser är stora bilder. Detta löser gatsby genom att automatiskt skapa olika storlekar på bilderna och ladda den minsta först. Detta betyder att bilder visas snabbt även på långsamma anslutningar.
				</Row>

				<div className="copy intro">
					<h1>Billigare och snabbare, samtidigt!</h1>
					<p>Gatsby ger dig alltså inte bara en billigare webbplats än traditionella Wordpress eller Wix-sidor, du får även bättre prestanda. Billigare och snabbare, det blir inte mycket bättre.</p>
				</div>
			</section>
			<ContactForm
				heading="Vill du veta mer?"
				paragraph="Undrar du något? Är du intresserad av en webbplats byggd med Gatsby? Skicka ett meddelande så hör jag av inom ett dygn, ofta snabbare!"
			/>
		</Layout>
	);
}

export const pageQuery = graphql`
query{
	imageSharp(fluid: { originalName: { eq: "gatsby_monogram.png" } } ){
		fluid(maxWidth: 500){
			...GatsbyImageSharpFluid
		}
	}
}
`;
