import React from 'react'

export default function Intro({ title, children }) {
	return (
		<div className="copy intro">
			<h1>{title}</h1>
			<p>{children}</p>
		</div>
	)
}
