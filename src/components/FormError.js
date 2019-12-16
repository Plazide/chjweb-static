import React from "react";

// Css
import "./styles/formError.css";

export default function FormError({ message }){
	return(
		<div className="form-error">
			{message}
		</div>
	)
}