import React from 'react'

import "./styles/info.css";

export default function MoreInfo({ children }) {
	return (
		<div className="more-info">
			{children}
		</div>
	)
}

export function Info ({ title, children }){
	return (
		<div className="info">
			<h2>{title}</h2>
			<p>{children}</p>
		</div>
	)
}
