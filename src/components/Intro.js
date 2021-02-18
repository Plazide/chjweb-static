import React from "react";
import PropTypes from "prop-types";

export default function Intro({ title, children, className, style }){
	return(
		<div className={`copy intro ${className}`} style={style}>
			<h1>{title}</h1>
			<p>{children}</p>
		</div>
	);
}

Intro.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object
}
;
