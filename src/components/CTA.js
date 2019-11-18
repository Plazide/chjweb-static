import React from 'react'

// Components
import Button from "./ButtonLink";

// css
import "./styles/cta.css";
import ButtonLink from './ButtonLink';

export default function CTA({ title, children }) {
	return (
		<section className="cta">
			<div className="content">
				<h1>{title}</h1>
				<p>{children}</p>

				<ButtonLink variant="filled" href="#">Anlita mig</ButtonLink>
			</div>
		</section>
	)
}
