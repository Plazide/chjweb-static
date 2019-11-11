import React from 'react'
import { Link } from "gatsby";

import "./styles/buttons.css";

export default function ButtonLink({ children, variant, href }) {
	return (
		<Link className={`button button-${variant}`} to={href}>{children}</Link>
	)
}
