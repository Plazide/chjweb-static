import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

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
	const{ t } = useTranslation("Contact", { useSuspense: false });
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Kontakta mig",
			"description": t("seo.description"),
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
				title={t("seo.title")}
				url="/kontakt/"
				description={t("seo.description")}
				breadcrumb={[
					{
						name: t("seo.title"),
						url: "/kontakt/"
					}
				]}
				structuredData={structuredData}

			/>
			<section className="hero contact">
				<div className="content">
					<div className="copy">
						<h1>{t("hero.heading")}</h1>
						<p>{t("hero.content")}</p>

						<div className="buttons">
							<a className="button button-filled" href={`mailto:${email}`}>{t("hero.mailto")}</a>
							<a className="button button-outlined call" href={`tel:${parseNumber(phone)}`}>{t("hero.tel")}</a>
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
						<h2>{t("form.heading")}</h2>
						<p>{t("form.content")}</p>
					</div>
					<Form />
				</div>
			</section>
		</Layout>
	);
}

function Form(){
	const{ t } = useTranslation("Contact", { useSuspense: false });
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
					rules={{ required: t("form.name.error.empty") }}
					render={({ onChange, name }) => (
						<Input
							label={t("form.name.label")}
							onChange={onChange}
							name={name}
							errorText={errors.name ? errors.name.message : ""}
							helperText={t("form.name.hint")}
						/>
					)}
				/>

				<Controller
					name="email"
					control={control}
					rules={{
						required: t("form.email.error.empty"),
						pattern: {
							value: /^.*@.*..*$/,
							message: t("form.email.error.invalid")
						}
					}}
					render={({ onChange, name }) => (
						<Input
							label={t("form.email.label")}
							onChange={onChange}
							name={name}
							errorText={errors[name] ? errors[name].message : ""}
							helperText={t("form.email.hint")}
						/>
					)}
				/>

			</div>

			<Controller
				name="message"
				control={control}
				rules={{ required: t("form.message.error.empty") }}
				render={({ onChange, name }) => (
					<Input
						label={t("form.message.label")}
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
							? <div className="success">
								<Trans
									i18nKey="form.success"
									t={t}
									components={{ bold: <strong /> }}
								/>
							</div>
							: <>
								<button className="button button-filled" disabled={!canSubmit}>{t("form.submit")}</button>
								<div className="failure">
									<Trans
										i18nKey="form.failure"
										t={t}
										components={{ bold: <strong /> }}
									/>
								</div>
							</>
						)
						: <button className="button button-filled" disabled={!canSubmit}>{t("form.submit")}</button>
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
