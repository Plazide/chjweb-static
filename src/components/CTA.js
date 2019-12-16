import React from 'react'

// Components
import ButtonLink from './ButtonLink';

// css
import "./styles/cta.css";

export default function CTA({ title, children }) {
	return (
		<section className="cta">
			<div className="content">
				<h1>{title}</h1>
				<p>{children}</p>

				<ButtonLink variant="filled" href="/offert/">Be om offert</ButtonLink>
			</div>
		</section>
	)
}
