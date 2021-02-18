import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Icons
import { ReactComponent as CheckIcon } from "../images/icons/rounded-check.svg";

// Styles
import "./styles/pricing.css";
import Switch from "./Switch";
import Button from "./Button";
import { Controller, useForm } from "react-hook-form";
import Input from "./Input";

const PriceContext = createContext({ mode: "monthly", basicPerks: [] });

const ModeMap = new Map([
	["yearly", "årsvis"],
	["monthly", "månadsvis"]
]);

export default function Pricing({ children, defaultMode, basicPerks, title, description }){
	const[mode, setMode] = useState(defaultMode);

	function handleChange(){
		if(mode === "yearly") setMode("monthly");
		else setMode("yearly");
	}

	return(
		<PriceContext.Provider value={{ mode, basicPerks }}>
			<div className="pricing">
				{title ? <h2>{title}</h2> : null}
				{description ? <p>{description}</p> : null}
				<div className="options">
					<Switch
						onChange={handleChange}
						defaultChecked={mode === "yearly"}
					/>
				</div>
				<div className="tiers">
					{children}
				</div>
				<p className="disclaimer">
					<i>(Alla priser visas exklusive moms)</i>
				</p>
			</div>
		</PriceContext.Provider>
	);
}

export function Tier({
	name,
	description,
	monthlyPrice,
	yearlyPrice,
	perks,
	onOrder,
	tierId
}){
	const context = useContext(PriceContext);
	const yearlyDiscount = calcYearlyDiscount(monthlyPrice, yearlyPrice);
	const yearlyPerMonth = yearlyPrice / 12;
	const{ mode, basicPerks } = context;

	function handleOrder(){
		const orderType = tierId + "_" + mode;
		const orderName = `${name} (betalas ${ModeMap.get(mode)})`;
		onOrder({
			tierId: orderType,
			tierName: orderName,
			tierTimeFrame: mode,
			tierType: tierId
		});
	}

	return(
		<div className="tier">
			<span className="name">{name}</span>
			<p className="description">{description}</p>

			<div className="price">
				{mode === "yearly"
					? <span
						className="discount"
					>
						<span className="thin">spara</span> {yearlyDiscount}%
					</span>
					: null
				}
				<span className="monthly">
					{
						mode === "yearly"
							? yearlyPerMonth
							: monthlyPrice
					} kr <span className="perMonth">/ månad</span>
				</span>
				{mode === "yearly"
					? <span
						className="yearly thin"
					>
						<i>Betalas årsvis som {yearlyPrice} kr</i>
					</span>
					: null
				}
			</div>

			<div className="perks">
				Detta ingår:
				{
					[...basicPerks, ...perks].map( (perk, index) => (
						<div key={index} className="perk">
							<CheckIcon className="icon" />
							<span className="text">{perk}</span>
						</div>
					))
				}
			</div>

			<Button
				variant="filled"
				type="button"
				className="order"
				onClick={handleOrder}
			>
				Beställ
			</Button>
			<i className="thin" style={{ marginTop: 5, fontSize: ".8rem" }}>(Inte bindande)</i>
		</div>
	);
}

export function OrderForm({ order }){
	const{ handleSubmit, control, errors } = useForm();
	const[loading, setLoading] = useState(false);
	const[error, setError] = useState(null);
	const[success, setSuccess] = useState(null);

	async function onSubmit(data){
		if(location.hostname !== "localhost")
			plausible("Order Performed", {
				props: {
					page: location.pathname,
					tier: order.tierName,
					timeFrame: order.tierTimeFrame
				}
			});

		setLoading(true);
		const response = await fetch("/.netlify/functions/order", {
			method: "POST",
			body: JSON.stringify({ ...data, ...order })
		});
		const status = response.status;
		setLoading(false);

		switch(status){
		case 200:
			setSuccess(<>Din beställning har genomförts. Kolla din <b>mejl</b> efter ett meddelande från mig. Glöm inte att kolla skräpposten.</>);
			break;
		case 400:
			setError("Något var fel med din information. Kontrollera fälten och försök igen.");
			break;
		case 404:
			setError("Kunde inte skicka din information. Testa igen senare.");
			break;
		default:
			setError("Ett okänt fel har inträffat. Försök igen om en liten stund, om det fortfarande inte fungerar kan du kontakta mig direkt istället.");
		}
	}

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="contact-name"
				control={control}
				rules={{ required: "Ange kontaktperson" }}
				render={ ({ onChange, name }) => (
					<Input
						label="Kontaktperson"
						onChange={onChange}
						name={name}
						errorText={errors["contact-name"] ? errors["contact-name"].message : ""}
						helperText="Namnet på personen jag kommer har kontakt med"
					/>
				)}
			/>

			<br />
			<Controller
				name="contact-email"
				control={control}
				rules={{ required: "Ange din e-post" }}
				render={ ({ onChange, name }) => (
					<Input
						label="E-post"
						onChange={onChange}
						name={name}
						errorText={errors["contact-email"] ? errors["contact-email"].message : ""}
						helperText="E-post för kontaktperson"
					/>
				)}
			/>

			<br />
			<Controller
				name="company"
				control={control}
				rules={{ required: "Ange företag" }}
				render={ ({ onChange, name }) => (
					<Input
						label="Företag"
						onChange={onChange}
						name={name}
						errorText={errors.company ? errors.company.message : ""}
						helperText="Namnet på ert företag"
					/>
				)}
			/>

			<br />

			{
				error
					? <div className="submit-error">{error}</div>
					: null
			}

			{
				!success
					? (
						<Button
							type="submit"
							variant="filled"
							loading={loading}
						>
						Beställ
						</Button>
					)
					: (
						<div className="submit-success">
							{success}
						</div>
					)
			}
		</form>
	);
}

function calcYearlyDiscount(monthly, yearly){
	const totalMonthly = monthly * 12;
	const percent = Math.round((yearly / totalMonthly) * 100);
	const discount = 100 - percent;

	return discount;
}

Pricing.propTypes = {
	children: PropTypes.node.isRequired,
	defaultMode: PropTypes.oneOf(["monthly", "yearly"]).isRequired,
	basicPerks: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string,
	description: PropTypes.string
};

Tier.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	monthlyPrice: PropTypes.number.isRequired,
	yearlyPrice: PropTypes.number.isRequired,
	perks: PropTypes.arrayOf(PropTypes.string),
	onOrder: PropTypes.func.isRequired,
	tierId: PropTypes.string.isRequired
};

OrderForm.propTypes = {
	order: PropTypes.object
};
