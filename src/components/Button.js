import React from 'react'

// CSS
import "./styles/buttons.css";

export default function Button({ variant = "filled", children }) {
	return (
		<button className={`button button-${variant}`}>
			{children}
		</button>
	)
}
