import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Structure
import Layout from "../components/layout";
import SEO from "../components/seo";

// Utils
import parseNumber from "../utils/parseNumber";

// Illustrations
import { ReactComponent as Email } from "../images/illustrations/email_hero.svg";

// Css
import "../styles/contact.css";
import Input from "../components/Input";
import { useForm, Controller } from "react-hook-form";
import Loader from "../components/Loader";

export default function kontakt({ data, pageContext: { locale, data: localeData } }){
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
		<Layout locale={locale} localeData={localeData}>
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
							<a className="button button-outlined call" href={`tel:${parseNumber(phone)}`}>Ring mig</a>
						</div>
					</div>

					<div className="illustration">
						<Email />
					</div>
				</div>
			</section>
			<section className="form">
				<div className="content">
					<div className="copy">
						<h2>Skicka ett meddelande</h2>
						<p>Vill du höra av dig, skicka ett meddelande här!</p>
					</div>
					<Form />
				</div>
			</section>
		</Layout>
	);
}

function Form(){
	const{ control, errors, handleSubmit, formState } = useForm({ mode: "onChange" });
	const[success, setSuccess] = useState(null);
	const{ isSubmitting, isSubmitSuccessful } = formState;
	const canSubmit = formState.isDirty && formState.isValid;

	async function onSubmit(data){
		const response = await fetch("/.netlify/functions/contact", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		});

		setSuccess(response.ok);
	}

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="group">
				<Controller
					name="name"
					control={control}
					rules={{ required: "Du missade att skriva ditt namn!" }}
					render={({ onChange, name }) => (
						<Input
							label="Vad heter du?"
							onChange={onChange}
							name={name}
							errorText={errors.name ? errors.name.message : ""}
							helperText="Skriv gärna både för- och efternamn"
						/>
					)}
				/>

				<Controller
					name="email"
					control={control}
					rules={{
						required: "Du missade att skriva din e-post",
						pattern: {
							value: /^.*@.*..*$/,
							message: "Adressen ser konstig ut. Stämmer den verkligen?"
						}
					}}
					render={({ onChange, name }) => (
						<Input
							label="E-post"
							onChange={onChange}
							name={name}
							errorText={errors[name] ? errors[name].message : ""}
							helperText="En e-post jag kan nå dig på"
						/>
					)}
				/>

			</div>

			<Controller
				name="message"
				control={control}
				rules={{ required: "Du missade att skriva ett meddelande" }}
				render={({ onChange, name }) => (
					<Input
						label="Meddelande"
						mode="textarea"
						name={name}
						errorText={errors[name] ? errors[name].message : ""}
						onChange={onChange}
					/>
				)}
			/>

			{
				isSubmitting
					? <Loader />
					: isSubmitSuccessful
						? (success
							? <div className="success"><b>Ditt meddelande har skickats!</b> Jag hör av mig så snart som möjligt.</div>
							: <>
								<button className="button button-filled" disabled={!canSubmit}>Skicka</button>
								<div className="failure"><b>Kunde inte skicka!</b> Något gick fel, försök igen om en liten stund.</div>
							</>
						)
						: <button className="button button-filled" disabled={!canSubmit}>Skicka</button>
			}

		</form>
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

kontakt.propTypes = {
	data: PropTypes.object
};
