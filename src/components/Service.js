import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import "./styles/service.css";

export default function Service({ title, body, url, image }){
	return(
		<div className="service">
			<a
				href={url}
				className="image-container"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Img
					fluid={image}
					alt={title}
					className="image"
				/>
			</a>
			<div className="body">
				<span className="title">{title}</span>
				<p>{body}</p>
			</div>
		</div>
	);
}

Service.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	image: PropTypes.object
};
