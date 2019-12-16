import React from 'react'

export default function Hero({ title, children, illustration, cta = "", className }) {
	return (
		<section className={`hero ${className}`}>
			<div className="content">
				<div className="copy">
					<h1>{title}</h1>
					<p>{children}</p>
					{cta}
				</div>
				<div className="illustration">
					{typeof illustration === "string" ? <img src={illustration} alt={title} /> : illustration}
				</div>
			</div>
		</section>
	)
}
