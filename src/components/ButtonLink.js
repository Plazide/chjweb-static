import React from 'react'
import { Link } from "gatsby";

import "./styles/buttons.css";

export default function ButtonLink({ children, variant, href, style = {} }) {
	return (
		<Link className={`button button-${variant}`} to={href} style={style}>{children}</Link>
	)
}
