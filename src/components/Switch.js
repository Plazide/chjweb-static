import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles
import "./styles/switch.css";

export default function Switch({ onChange, defaultChecked }){
	const[mode, setMode] = useState(defaultChecked ? "on" : "off");

	function handleChange(){
		console.log("Change");
		if(mode === "off") setMode("on");
		else setMode("off");
		onChange();
	}

	return(
		<label className="switchContainer">
			Månad
			<input
				defaultChecked={defaultChecked}
				type="checkbox"
				onChange={handleChange}
				className="checkbox"
			/>
			<div className={`switch ${mode}`}>
				<div className="knob"></div>
			</div>
			År
		</label>
	);
}

Switch.propTypes = {
	onChange: PropTypes.func,
	defaultChecked: PropTypes.bool
};
