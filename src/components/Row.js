import React from 'react'
import {useInView} from "react-intersection-observer";

// Components
import ButtonLink from "./ButtonLink";

export default function Row({ illustration, link, align, title, children, paragraph = true, threshold = 1 }){
	const [ref, inView] = useInView({ threshold, triggerOnce: true });

	const visible = inView;
	const translate = visible ? "0px" : "50%";
	const opacity = visible ? "1" : "0";
	const direction = align === "left" ? "row" : "row-reverse";
	const alignItems = align === "left" ? "flex-start" : "flex-end";
	const alignSelf = align === "left" ? "flex-start" : "flex-end";
	const content = paragraph ? <p>{children}</p> : children;

	const copyStyle = {
		alignItems: "flex-start", 
		textAlign: "left", 
		transform: `translate(${align === "left" ? "-" : ""}${translate})`
	}

	const button = link ? <ButtonLink href={link} variant="text" style={{ alignSelf: "flex-start" }}>Läs mer</ButtonLink> : "";

	return (
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
	)
}
