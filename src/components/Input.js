import React, { useState } from 'react'
import PropTypes from "prop-types";

// CSS
import "./styles/input.css";

export default function Input({ 
	label,
	type = "text",
	variant = "filled", 
	errorText = "", 
	error = errorText,
	helperText = "",
	name,
	id = name || randomId(),
	style = null,
	required = true,
	pattern = "",
	onChange,
	mode = "input"
}) {
	const [focus, setFocus] = useState(false);
	const errorClass = error ? "error" : "";
	const focusClass = focus ? "focused" : "";

	const errorAlert = error ? <span className="error-text" role="alert">{errorText}</span> : "";

	const onFocus = (e) => {
		setFocus(true);
	}

	const onBlur = (e) => {
		const value = e.target.value;

		if(!value)
			setFocus(false);
	}

	return (
		<div className={`text-field ${variant} ${errorClass} ${focusClass} ${mode}`} style={style}>
			<label htmlFor={id}>{label}</label>
			{mode === "input" ?
			<input 
				aria-invalid={error}
				type={type} 
				id={id} 
				name={name}
				onFocus={onFocus} 
				onBlur={onBlur} 
				required={required} 
				pattern={pattern}
				onChange={onChange}
			/>
			:
			<textarea
				aria-invalid={error}
				type={type} 
				id={id} 
				name={name}
				onFocus={onFocus} 
				onBlur={onBlur} 
				required={required} 
				pattern={pattern}
				onChange={onChange}></textarea>
			}
			
			<span className="helper-text">{helperText}</span>
			{errorAlert}
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
