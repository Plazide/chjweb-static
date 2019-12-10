import React from 'react'

import "./styles/pros.css";

export default function Pros({ title, children }) {
	return (
		<section className="pros">
			<h2>{title}</h2>
			<div className="list">
				{children}
			</div>
		</section>
	)
}

export function Pro({ title, children }){
	return (
		<div className="pro">
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	)
} 
