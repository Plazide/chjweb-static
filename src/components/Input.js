import React, { useState } from 'react'
import PropTypes from "prop-types";

// CSS
import "./styles/input.css";

export default function Input({ 
	label,
	type = "text",
	variant = "filled", 
	error = false, 
	errorText = "", 
	helperText = "",
	name,
	id = name || randomId(),
	style = null
}) {
	const [focus, setFocus] = useState(false);
	const errorClass = error ? "error" : "";
	const focusClass = focus ? "focused" : "";

	const onFocus = (e) => {
		setFocus(true);
	}

	const onBlur = (e) => {
		const value = e.target.value;

		if(!value)
			setFocus(false);
	}

	return (
		<div className={`text-field ${variant} ${errorClass} ${focusClass}`} style={style}>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={name} onFocus={onFocus} onBlur={onBlur} />
			<span className="helper-text">{helperText}</span>
			<span className="error-text">{errorText}</span>
		</div>
	)
}

function randomId(){
	return "" + Math.random();
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	variant: PropTypes.string,
	error: PropTypes.bool,
	errorText: PropTypes.string,
	helperText: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string
}
