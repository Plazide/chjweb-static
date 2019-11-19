import React from 'react'
import { Link } from "gatsby"

export default function navigation() {
	return (
		<nav>
			<Link to="/">Hem</Link>
			<Link to="/hosting">Hosting</Link>
			<Link to="/webbyra">Webbyrå</Link>
			<Link to="/cms">CMS</Link>
			<Link to="/blogg">Blogg</Link>
		</nav>
	)
}
