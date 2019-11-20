import React from 'react'
import { Link } from "gatsby"

export default function navigation() {
	return (
		<nav>
			<Link 
				to="/" 
				activeClassName="active">
					Hem
			</Link>

			<Link 
				to="/hosting" 
				activeClassName="active">
					Hosting
			</Link>

			<Link 
				to="/webbyra"
				activeClassName="active">
					Webbyrå
			</Link>

			<Link 
				to="/cms"
				activeClassName="active">
					CMS
			</Link>

			<Link 
				to="/blogg"
				activeClassName="active"
				partiallyActive={true}>
					Blogg
			</Link>
		</nav>
	)
}
