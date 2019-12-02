import React from "react";

// Layout
import Layout from "../../components/layout";
import Hero from "../../components/Hero";
import SEO from "../../components/seo";
import Intro from "../../components/Intro";

// Images
import emailUrl from "../../images/illustrations/email_hero.svg";

export default function EmailHosting (){
	return (
		<Layout>
			<SEO 
				title="E-post hosting"
				description="Jag erbjuder e-post tjänster till alla mina kunder."
				url="/tjanster/email-hosting"
				breadcrumb={[
					{
						name: "Tjänster",
						url: "/tjanster"
					},
					{
						name: "E-post hosting",
						url: "/tjanster/email-hosting"
					}
				]}
			/>
			<Hero
				illustration={emailUrl}
				title="E-post i molnet">
				Jag erbjuder en pålitlig e-post tjänst genom Qboxmail när ni anlitar mig för att skapa er hemsida.
			</Hero>

			<section className="features">
				<Intro
					title="E-post utan webbhotell">
					Eftersom hemsidor som jag bygger inte ligger på webbhotell går mina kunder miste om e-post tjänsterna som de flesta webbhotell erbjuder. För att mina kunder ändå ska kunna använda sin egen domän för att skicka e-post, erbjuder jag att hantera e-post genom tjänsten Qboxmail.
				</Intro>
			</section>
		</Layout>
	)
}