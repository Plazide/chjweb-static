import React, { useState } from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";

// Css
import "../styles/contact.css";
import Input from "../components/Input";
import { useForm, Controller } from "react-hook-form";
import Loader from "../components/Loader";

function ContactForm({ heading, paragraph }){
	const{ t } = useTranslation("Contact");

	return(
		<section className="form">
			<div className="content">
				<div className="copy">
					<h2>{heading || t("form.heading")}</h2>
					<p>{paragraph || t("form.content")}</p>
				</div>
				<Form />
			</div>
		</section>
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

ContactForm.propTypes = {
	heading: PropTypes.string,
	paragraph: PropTypes.string
};

export default ContactForm;
