import React, { useState } from 'react'
import { navigate } from 'gatsby';

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Success from "../components/Success";
import SEO from "../components/seo";

// css
import "../styles/anlita.css";

// Images
import _arrowUrl, { ReactComponent as Arrow} from "../images/illustrations/arrow.svg";

export default function Anlita() {
	return (
		<>
			<SEO 
				title="Anlita en modern webbutvecklare"
				description="Skicka en förfrågan om att anlita CHJ Webblösningar."
				url="/anlita/"
				breadcrumb={[
					{ name: "Anlita", url: "/anlita" }
				]}
			/>
			<main>
				<section className="hire">
					<div className="content">
						<ButtonLink variant="text" href="/">
							<Arrow className="back-arrow" /> Tillbaka till hemsidan 
						</ButtonLink>

						<div className="copy">
							<h1>Anlita CHJ Webblösningar</h1>
							<p>Efter att ni har skickat en förfrågan om att anlita mig kommer jag att kontakta er för att boka ett möte. I det mötet kommer vi att diskutera er hemsidas omfattning. Det är först i slutet av mötet som jag kan ge er ett pris. Ni förbinder er inte till något genom att trycka på ANLITA</p>
						</div>

						<Form />
						<i className="disclaimer">Den här handlingen är <b>inte</b> bindande</i>
					</div>
				</section>
			</main>
				
		</>
	)
}

function Form(){
	const [inputValue, setInputValue] = useState("");

	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const [success, setSuccess] = useState(false);
	const [successMsg, setSuccessMsg] = useState("");

	const bufferTime = 6000;
	const successElement = success 
	? <Success message={successMsg} hidden={!success} countdown={bufferTime - 1000} />
	: "";

	function onInvalid (e){
		e.preventDefault();

		const value = e.target.value;

		if(!value){
			setError(true);
			setErrorMsg("Du har inte skrivit din e-post!")
			return;
		}

		setError(true)
		setErrorMsg("E-postadressen är felaktig!")
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
		const value = form[0].value;
		
		const response = await fetch(endpoint, {
			method,
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email: value })
		});

		if(!response.ok){
			setError(true);
			setErrorMsg("Något gick fel! Försök igen senare.")
		}

		if(response.ok){
			setError(false);
			setSuccess(true);
			setSuccessMsg("Din förfrågan har skickats!");

			setTimeout( () => {
				navigate("/");
			}, bufferTime);
		}
	}

	return (
		<form 
			action="/.netlify/functions/hire" 
			method="POST" 
			className="hire-form" 
			onSubmit={onSubmit} 
			onInvalid={onInvalid}>
			<Input 
				value={inputValue}
				label="E-post" 
				name="email" 
				variant="outlined" 
				errorText={errorMsg}
				error={error}
				style={{width: "100%", marginRight: 20}} 
				pattern="^.+@.+\..{2,8}$"
				onChange={removeError}
			/>
			<Button variant="filled">Anlita</Button>
			{successElement}
		</form>
	)
}
