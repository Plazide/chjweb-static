import React from 'react'

export default function Hero({ title, children, illustration }) {
	return (
		<section className="hero">
			<div className="content">
				<div className="copy">
					<h1>{title}</h1>
					<p>{children}</p>
				</div>
				<div className="illustration">
					{illustration}
				</div>
			</div>
		</section>
	)
}
