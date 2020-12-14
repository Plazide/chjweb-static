import React from "react";
import { Link } from "gatsby";
/* import DropdownLink from "./DropdownLink"; */
import ButtonLink from "./ButtonLink";

export default function navigation(){
	return(
		<nav>
			{/* <Link
				to="/"
				activeClassName="active"
			>
				Hem
			</Link> */}

			<Link
				to="/referenser"
				activeClassName="active"
			>
				Referenser
			</Link>

			<Link
				to="/tjanster"
				activeClassName="active"
			>
				Tjänster
			</Link>

			<Link
				to="/priser"
				activeClassName="active"
			>
				Priser
			</Link>

			{/* <DropdownLink
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
					{ name: "Webbshop", to: "/webbyra/webbshop/" },
					{ name: "SEO", to: "/webbyra/seo/" },
					{ name: "Hosting", to: "/webbyra/hosting/" },
					{ name: "CMS", to: "/webbyra/cms/" }
				]}
			>
				Webbyrå
			</DropdownLink> */}

			<Link
				to="/blogg/"
				activeClassName="active"
				partiallyActive={true}
			>
				Blogg
			</Link>

			<ButtonLink variant="outlined" href="/kontakt/">Kontakta mig</ButtonLink>
		</nav>
	);
}
