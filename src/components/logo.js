import React from 'react'
import { Link } from "gatsby";

import LogoIcon from "../images/logotyp.svg";

export default function Logo({ siteTitle }) {
	return (
		<Link to="/">
			<img className="logo" src={LogoIcon} alt={siteTitle} />
		</Link>
			
	)
}
