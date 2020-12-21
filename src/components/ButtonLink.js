import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-plugin-react-i18next";

import "./styles/buttons.css";

export default function ButtonLink({ children, variant, href, style = {} }){
	return(
		<Link className={`button button-${variant}`} to={href} style={style}>{children}</Link>
	);
}

ButtonLink.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.string,
	href: PropTypes.string,
	style: PropTypes.object
}
;
