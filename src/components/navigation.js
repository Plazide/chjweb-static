import React from 'react'
import { Link } from "gatsby"

export default function navigation() {
	return (
		<nav>
			<Link to="/">Hem</Link>
			<Link to="/blogg">Blogg</Link>
			<Link to="/kontakt">Kontakta mig</Link>
		</nav>
	)
}
