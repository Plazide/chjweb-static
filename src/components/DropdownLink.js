import React, { useState } from 'react'
import { Link } from 'gatsby'

// CSS
import "./styles/dropdownLink.css";

// Images
import _arrowUrl, { ReactComponent as Arrow} from "../images/illustrations/arrow.svg";

export default function DropdownLink({ to, children, subLinks }) {
	const [active, setActive] = useState(false);
	let timeout = null;

	const onHover = () => {
		setActive(true);
		if(timeout !== null)
			clearTimeout(timeout);	
	}

	const onBlur = (e) => {
		timeout = setTimeout( () => {
			setActive(false);
		}, 600);
		
	}

	return (
		<div 
			className={`dropdown-link ${active ? "active" : ""}`} 
			onMouseOver={onHover}
			onMouseOut={onBlur}>
			<Link 
				to={to} 
				onFocus={onHover}
				onBlur={onBlur}
				aria-haspopup={true}
				aria-expanded={active}>
				{children}
			</Link>
			<Arrow className="arrow" />
			<div className="links">
				<ul className="inner">
					{subLinks.map( link => (
						<li key={link.to}>
							<Link 
								to={link.to}
								onFocus={onHover}
								onMouseOver={onHover}
								onBlur={onBlur}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
