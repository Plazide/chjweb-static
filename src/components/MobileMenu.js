import React, { useEffect, useRef } from 'react'

// Components
import Navigation from "./navigation";
import Logo from "./logo";

// CSS
import "./styles/mobile-menu.css";

// Images
import _closeUrl, { ReactComponent as CloseIcon } from "../images/icons/close.svg";

export default function MobileMenu({ open = false, onClose }) {
	const openClass = open ? "open" : "";

	return (
		<dialog className={`mobile-menu ${openClass}`} aria-hidden={!open}>
			<div className="wrapper">
				<header>
					<Logo />
					<button className="reset-button" onClick={onClose} aria-label="Stäng meny">
						<CloseIcon />
					</button>
				</header>
				<Navigation />
			</div>
		</dialog>
	)
}
