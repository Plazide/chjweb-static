import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby';

// Layout
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import MoreInfo, { Info } from "../../components/MoreInfo";

// Components
import ButtonLink from "../../components/ButtonLink";
import Button from "../../components/Button";
import Input from "../../components/Input";

// CSS
import "../../styles/granskning.css";

// Images
import heroUrl from "../../images/illustrations/granskning_hero.svg";

export default function Granskning() {
	const { imageSharp } = useStaticQuery(
		graphql`
			query {
				imageSharp(resolutions: {originalName: {eq: "granskning.png"}}) {
					fixed {
						src
					}
				}
			}
		`
	)
	const image = imageSharp.fixed.src;

	return (
		<Layout>
			<SEO 
				title="Kostnadsfri granskning"
				description="Jag erbjuder att göra en gratis granskning av din webbplats. Jag identifierar problem med prestanda, sökmotoroptimering och tillgänglighet."
				url="/tjanster/granskning/"
				breadcrumb={[
					{
						name: "Tjänster",
						url: "/tjanster/"
					},
					{
						name: "Granskning",
						url: "/tjanster/granskning/"
					}
				]}
				image={image}
			/>

			<Hero
			title="Se till att er hemsida fungerar"
			illustration={heroUrl}
			cta={<ButtonLink variant="filled" href="/tjanster/granskning#cta">Granska hemsida</ButtonLink>}>
				Många av dagens hemsidor lider av problem som påverkar dess sökresultat, tillgänglighet och prestanda. Gör er webbplats det?
			</Hero>

			<section className="features">
				<Intro
				title="Kostnadsfri granskning">
					Jag granskar er webbplats för att se om det finns saker att förbättra. Många webbplatser har problem med grundläggande sökmotoroptimering, tillgänglighet och prestanda. Det är dock svårt för den som driver hemsidan, alltså du som företagare, att identifiera dessa problem. Därför erbjuder jag att granska er webbplats helt gratis.
				</Intro>

				<section className="cta" id="cta">
					<div className="content" role="status">
						<h1>Hur kan er webbplats förbättras?</h1>
						<p>Låt mig göra en granskning av er webbplats för att veta hur den kan förbättras.</p>
						<Form />
					</div>
				</section>

				<MoreInfo>
					<Info
					title="Hur fungerar det?">
						Min kostnadsfria granskning är enkel, i alla fall på er sida. Allt ni gör är att ange en e-post jag kan nå er på  och webbadressen till den hemsida som ska granskas. Efter ungefär en dag kommer jag skicka en rapport om vad som kan förbättras. Ni kan sedan bestämma hur ni vill gå vidare.
					</Info>

					<Info
					title="Att laga hemsidan">
						Beroende på vilken plattform och vilka problem som hemsidan har måste ni vidta olika åtgärder. Enkla sökmotoroptimerings problem kan oftast fixas genom att ändra text och struktur på sidan, något som ofta kan göras genom er website builder eller CMS. Problem som har med prestanda och tillgänglighet att göra är betydligt svårare att laga.
					</Info>
				</MoreInfo>
			</section>

		</Layout>
	)
}

function Form(){
	const [emailError, setEmailError] = useState("");
	const [websiteError, setWebsiteError] = useState("");
	const [formError, setFormError] = useState("");
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const endpoint = form.action;
		const method = form.method;
		const email = form[0].value;
		const website = form[1].value;

		setLoading(true);
		const response = await fetch(endpoint, {
			method,
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				website
			})
		});
		setLoading(false);

		if(!response.ok){
			setFormError("Något gick fel! Din förfrågan gick inte att skicka!")
		}

		if(response.ok){
			setSuccess(true);
		}
	}

	const onInvalid = (e) => {
		e.preventDefault();

		const target = e.target;
		
		if(!target.value)
			if(target.name === "email") setEmailError("Du har inte skrivit din e-post");
			if(target.name === "website") setWebsiteError("Du har inte skrivit hemsidan som ska granskas");
		else
			if(target.name === "email") setEmailError("E-postadressen är i fel format");
			if(target.name === "website") setWebsiteError("Webbadressen är felaktig");
	}

	return (
		<>
			{formError ? <div className="submit-error">{formError}</div> : ""}
			<form 
				action="/.netlify/functions/audit" 
				method="POST" 
				className={`audit-form ${success ? "hide" : ""}`}
				onSubmit={onSubmit}
				onInvalid={onInvalid}>
				<Input 
					variant="outlined" 
					pattern="^.+@.+\..{2,62}$"
					label="E-post" 
					style={{ width: "50%" }}
					name="email"
					errorText={emailError}
				/>

				<Input 
					variant="outlined"
					pattern="^(https?:\/\/)?(www.)?[a-z0-9]*\.[a-z]{2,62}"
					label="Webbadress" 
					style={{ width: "35%", margin: 10 }} 
					name="website"
					errorText={websiteError}
				/>

				<Button loading={loading}>Granska</Button>
			</form>
			{success ? <div className="submit-success">
				<h2>Skickat!</h2>
				<p>Jag svarar inom 48 timmar med en rapport om vad som kan förbättras!</p>
			</div> : ""}
		</>
	)
}
