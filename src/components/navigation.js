import React from 'react'
import { Link } from "gatsby"
import DropdownLink from './DropdownLink'
import ButtonLink from "./ButtonLink";

export default function navigation() {
	return (
		<nav>
			<Link 
				to="/" 
				activeClassName="active"
			>
				Hem
			</Link>

			<DropdownLink
				to="/tjanster/"
				activeClassName="active"
				partiallyActive={true}
				subLinks={[
					{ name: "E-post", to: "/tjanster/email-hosting/" },
					{ name: "Granskning", to: "/tjanster/granskning/" },
					{ name: "Utveckling", to: "/webbyra/" }
				]}
			>
				Tjänster
			</DropdownLink>

			<DropdownLink
				to="/webbyra"
				activeClassName="active"
				partiallyActive={true}
				subLinks={[
					{ name: "SEO", to: "/webbyra/seo/" }, 
					{ name: "Hosting", to:"/webbyra/hosting/" },
					{ name: "Webbshop", to: "/webbyra/webbshop/" }
				]}
			>
				Webbyrå
			</DropdownLink>

			<Link 
				to="/blogg/"
				activeClassName="active"
				partiallyActive={true}
			>
				Blogg
			</Link>

			<ButtonLink variant="outlined" href="/anlita/">Anlita mig</ButtonLink>
		</nav>
	)
}
