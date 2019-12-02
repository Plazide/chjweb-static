import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby";

// Components
import Logo from "./logo";
import ButtonLink from "./ButtonLink";

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
				<nav>
					<Link to="/" activeClassName="active">Hem</Link>
					<Link to="/tjanster" activeClassName="active" partiallyActive={true}>Tjänster</Link>
					<div className="sublinks">
						<Link to="/tjanster/email-hosting" activeClassName="active">E-post</Link>
						<Link to="/tjanster/granskning" activeClassName="active">Granksning</Link>
						<Link to="/webbyra">Utveckling</Link>
					</div>
					<Link to="/webbyra" activeClassName="active" partiallyActive={true}>Webbyrå</Link>
					<div className="sublinks">
						<Link to="/webbyra/seo" activeClassName="active">SEO</Link>
						<Link to="/webbyra/cms" activeClassName="active">CMS</Link>
						<Link to="/webbyra/hosting" activeClassName="active">Hosting</Link>
					</div>

					<ButtonLink href="/anlita" variant="outlined">Anlita mig</ButtonLink>
				</nav>
			</div>
		</dialog>
	)
}
