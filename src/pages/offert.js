import React, { useState } from 'react'
import { navigate } from 'gatsby';

// Layout
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Success from "../components/Success";
import FormError from "../components/FormError";

// css
import "../styles/anlita.css";

// Images
import _arrowUrl, { ReactComponent as Arrow} from "../images/illustrations/arrow.svg";

export default function Anlita() {
	return (
		<Layout>
			<SEO 
				title="Få en offert"
				description="Få en offert från CHJ Webblösningar genom att beskriva vad ni vill ha på er hemsida."
				url="/offert/"
			/>
			<Hero
				className="hire"
				title="Få en offert">
				Om ni vill ha en prisuppskattning på vad er hemsida kan kosta, då kan ni ange er e-post och en kort beskrivning av den tänkta hemsidan.
				<Form />
			</Hero>
		</Layout>
	)
}

function Form(){
	const [inputValue, setInputValue] = useState("");
	const [loading, setLoading] = useState(false);

	const [formErrorMsg, setFormErrorMsg] = useState("");

	const [error, setError] = useState(false);

	const [emailError, setEmailError] = useState("");
	const [msgError, setMsgError] = useState("");

	const [success, setSuccess] = useState(false);
	const [successMsg, setSuccessMsg] = useState("");

	const successElement = success 
	? <Success message={successMsg} hidden={!success} />
	: "";
	const formError = formErrorMsg
	? <FormError message={formErrorMsg} /> : "";

	function onInvalid (e){
		e.preventDefault();

		const target = e.target;
		const value = target.value;

		if(!value){
			if(target.name === "email") setEmailError("Du har inte angivit en e-post!");
			if(target.name === "msg") setMsgError("Du har inte skrivit ett meddelande!");
		}else{
			if(target.name === "email") setEmailError("E-post adressen är i fel format!");
			if(target.name === "msg") setMsgError("Meddelandet måste vara minst 100 tecken!")
		}
		

	}

	function removeError(e){
		if(!error) return;

		const value = e.target.value;
		setInputValue(value);

		setError(false);
	}

	async function onSubmit(e){
		e.preventDefault();

		const form = e.target;
		const endpoint = form.action;
		const method = form.method;
		const email = form[0].value;
		const msg = form[1].value;
		
		setLoading(true);
		const response = await fetch(endpoint, {
			method,
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, msg })
		});
		setLoading(false);

		if(!response.ok){
			setError(true);
			setFormErrorMsg("Något gick fel! Försök igen senare.")
		}

		if(response.ok){
			setError(false);
			setSuccess(true);
			setSuccessMsg("En offertfröfrågan har skickats! Jag svarar så fort som möjligt.");
		}
	}

	return (
		<>
			<form 
				role="status"
				action="/.netlify/functions/hire" 
				method="POST" 
				className="hire-form" 
				onSubmit={onSubmit}
				onInvalid={onInvalid}
				style={{display: success ? "none" : "block"}}>
				{formError}
				<Input 
					value={inputValue}
					label="E-post" 
					name="email" 
					variant="outlined" 
					errorText={emailError}
					style={{width: "100%", marginBottom: 30}} 
					pattern="^.+@.+\..{2,8}$"
					onChange={removeError}
				/>
				<Input 
					mode="textarea"
					label="Beskrivning"
					name="msg"
					variant="outlined"
					helperText="Det gör inget om beskrivningen är kort, jag kontaktar er om jag behöver mer information."
					errorText={msgError}
					style={{marginBottom: 40}}
					onChange={removeError}
				/>
				<Button loading={loading} variant="filled">Få offert</Button>
			</form>
			{successElement}
		</>
	)
}
