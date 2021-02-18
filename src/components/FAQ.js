import React from "react";
import PropTypes from "prop-types";

// Styles
import "./styles/faq.css";

export default function FAQ({ title, children }){
	return(
		<section className="faq">
			<div className="content">
				<h2>{title}</h2>
				<div className="questions">
					{children}
				</div>
			</div>
		</section>
	);
}

export function Question({ title, children }){
	return(
		<details>
			<summary>{title}</summary>
			<div className="answer">
				{children}
			</div>
		</details>
	);
}

FAQ.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node
};

Question.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node
};
