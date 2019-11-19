import React, { useState } from 'react'
import { navigate } from 'gatsby';

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Success from "../components/Success";

// css
import "../styles/anlita.css";

// Images
import _arrowUrl, { ReactComponent as Arrow} from "../images/illustrations/arrow.svg";

export default function Anlita() {
	return (
		<section className="hire">
			<div className="content">
				<div className="copy">
					<h1>Anlita CHJ Webblösningar</h1>
					<p>Efter att ni har skickat en förfrågan om att anlita mig kommer jag att kontakta er för att boka ett möte. I det mötet kommer vi att diskutera er hemsidas omfattning. Det är först i slutet av mötet som jag kan ge er ett pris.</p>
				</div>

				<Form />
				<i className="disclaimer">Den här handlingen är <b>inte</b> bindande</i>

				<ButtonLink variant="text" href="/">
					<Arrow className="back-arrow" /> Tillbaka till hemsidan 
				</ButtonLink>
			</div>
		</section>
	)
}

function Form(){
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const [success, setSuccess] = useState(false);
	const [successMsg, setSuccessMsg] = useState("");

	const bufferTime = 6000;

	async function onSubmit(e){
		e.preventDefault();

		const form = e.target;
		const endpoint = form.action;
		const method = form.method;
		const value = form[0].value;

		if(!value){
			setError(true);
			setErrorMsg("Du har inte skrivit din e-post!")
			return;
		}

		if(!/^.+@.+\..{2,8}$/.test(value)){
			setError(true)
			setErrorMsg("E-postadressen är felaktig!")
			return;
		}
		
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
			setSuccessMsg("Ni har skickat en förfrågan om att anlita CHJ Webblösningar. Jag svarar så fort jag kan!");

			setTimeout( () => {
				navigate("/");
			}, bufferTime);
		}
	}

	return (
		<form action="/.netlify/functions/hire" method="POST" className="hire-form" onSubmit={onSubmit}>
			<Input 
				label="E-post" 
				name="email" 
				variant="outlined" 
				errorText={errorMsg}
				error={error}
				style={{width: "100%", marginRight: 20}} 
			/>
			<Button variant="filled">Anlita</Button>
			<Success message={successMsg} hidden={!success} countdown={bufferTime - 1000} />
		</form>
	)
}
