import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { useTranslation } from "gatsby-plugin-react-i18next";

import "./styles/project.css";
import { Link } from "gatsby";

function Project({ title, body, url, postUrl, image, tech }){
	const{ t } = useTranslation("Projects");

	return(
		<div className="project">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<Img
					fluid={image}
					className="image"
				/>
			</a>
			<div className="flex">
				<span className="tech-label">
					{t("project.tech")}:
				</span>
			</div>
			<div className="techs">

				{
					tech.map( (tech, index) =>
						<Tech tech={tech} key={tech.title + index} />
					)
				}
			</div>

			<div className="body">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<span className="title">{title}</span>
					<p className="body">{body}</p>
				</a>
				{postUrl ? <Link to={postUrl} className="more">
					{t("project.more")}
				</Link> : null}

			</div>
		</div>
	);
}

function Tech({ tech }){
	return(
		<a
			href={tech.url}
			target="_blank"
			rel="noopener noreferrer"
			className="tech"
			title={tech.title}
		>
			<Img
				alt={tech.title}
				fluid={tech.logo.childImageSharp.fluid}
				className="tech-logo"
			/>
		</a>
	);
}

Project.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	postUrl: PropTypes.string,
	image: PropTypes.string,
	tech: PropTypes.arrayOf(PropTypes.object)
};

Tech.propTypes = {
	tech: PropTypes.object
};

export default Project;
