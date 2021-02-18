import React from "react";
import PropTypes from "prop-types";

// CSS
import "./styles/buttons.css";

export default function Button({
	variant = "filled",
	children,
	loading,
	type = "submit",
	className = "",
	onClick
}){
	return(
		<div className={`button-wrapper ${className}`}>
			{loading
				? (<div className="button-loading"></div>)
				: (
					<button onClick={onClick} className={`button button-${variant}`} type={type}>
						{children}
					</button>
				)
			}
		</div>
	);
}

Button.propTypes = {
	variant: PropTypes.oneOf(["filled", "outlined", "text"]),
	children: PropTypes.node,
	loading: PropTypes.bool,
	type: PropTypes.oneOf(["button", "submit"]),
	className: PropTypes.string,
	onClick: PropTypes.func
};
