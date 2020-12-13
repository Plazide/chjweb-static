import React from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

// Components
import ButtonLink from "./ButtonLink";

export default function Row ({ illustration, link, align, title, children, paragraph = true, threshold = 0.3, animate = true }){
	const[ref, inView] = useInView({ threshold, triggerOnce: true });

	const visible = inView;
	const translate = visible ? "0px" : "50%";
	const opacity = visible ? "1" : "0";
	const direction = align === "left" ? "row" : "row-reverse";
	const content = paragraph ? <p>{children}</p> : children;

	const copyStyle = {
		alignItems: "flex-start",
		textAlign: "left",
		transform: animate ? `translate(${align === "left" ? "-" : ""}${translate})` : "translate(0)"
	};

	const button = link ? <ButtonLink href={link} variant="text" style={{ alignSelf: "flex-start" }}>Läs mer</ButtonLink> : "";

	return(
		<section ref={ref} className="row" style={{ flexDirection: direction, opacity }}>
			<div className="copy" style={copyStyle}>
				<h1>{title}</h1>
				{content}
				{button}
			</div>
			<div className="illustration" role="presentation">
				{typeof illustration === "string" ? <img src={illustration} alt={title} /> : illustration}
			</div>
		</section>
	);
}

Row.propTypes = {
	illustration: PropTypes.any,
	link: PropTypes.string,
	align: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.node,
	paragraph: PropTypes.bool,
	threshold: PropTypes.number,
	animate: PropTypes.bool
};
