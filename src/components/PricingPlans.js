import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "./Dialog";
import Pricing, { OrderForm, Tier } from "./Pricing";

export default function PricingPlans({ showHeading = true, showDescription = true }){
	const[open, setOpen] = useState(false);
	const[order, setOrder] = useState(null);

	function handleOrder(order){
		if(!location.hostname !== "localhost")
			plausible("Order Click", {
				props: {
					page: location.pathname,
					tier: order.tierName,
					timeFrame: order.tierTimeFrame
				}
			});

		setOrder(order);
		setOpen(true);
	}

	return(
		<>
			<Dialog onClose={ () => setOpen(false) } open={open}>
				<h3>Beställ - {order?.tierName}</h3>
				<hr />
				<p>Jag skickar mer information till e-postadressen nedan. Ni förbinder er inte till något genom att trycka på Beställ.</p>
				<br />
				<OrderForm order={order} />
			</Dialog>
			<Pricing
				title={showHeading ? "Priser" : null}
				description={showDescription ? "Betala månadsvis eller årsvis och få en webbutvecklare som hjälper er med webbplatsen när som helst. Avbryt när ni vill." : null}
				defaultMode="yearly"
				basicPerks={[
					"Utveckling",
					"Design",
					"Drift",
					"Innehåll",
					"SEO",
					"Buggfixar"
				]}>
				<Tier
					name="Soloprenör"
					description="Perfekt för den ensamma entreprenören"
					monthlyPrice={1200}
					yearlyPrice={9600}
					onOrder={handleOrder}
					tierId="solo"
					perks={[
						"10 Ändringar",
						"1000 kr / extra ändring",
						"1 Hemsida",
						"Normal prioritet"
					]}
				/>
				<Tier
					name="Småföretag"
					description="Passar bra för mindre företag som vill ha fler kunder genom hemsidor"
					monthlyPrice={2800}
					yearlyPrice={22500}
					onOrder={handleOrder}
					tierId="small"
					perks={[
						"40 Ändringar",
						"400 kr / extra ändring",
						"4 Hemsidor",
						"Högre prioritet"
					]}
				/>
				<Tier
					name="Större företag"
					description="Bra för större företag som har inkomst från nätet"
					monthlyPrice={6000}
					yearlyPrice={48000}
					onOrder={handleOrder}
					tierId="large"
					perks={[
						"Obegränsade Ändringar",
						"0 kr / extra ändring",
						"Obegränsade Hemsidor",
						"Högsta prioritet"
					]}
				/>
			</Pricing>
		</>
	);
}

PricingPlans.propTypes = {
	showHeading: PropTypes.bool,
	showDescription: PropTypes.bool
};
