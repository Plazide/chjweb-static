import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Logo from "./logo";
import Navigation from "./navigation";
import MobileMenu from "./MobileMenu";

// Css
import "./styles/header.css";

// Images
import { ReactComponent as HamburgerIcon } from "../images/icons/hamburger.svg";

const Header = ({ siteTitle }) => {
	const[opened, setOpened] = useState(false);

	const toggleMenu = () => {
		setOpened(!opened);
	};

	return(
		<>
			<MobileMenu open={opened} onClose={toggleMenu} />
			<header>
				<div className="wrapper">
					<Logo siteTitle={siteTitle} />
					<button onClick={toggleMenu} className="reset-button hamburger" aria-label="Öppna meny">
						<HamburgerIcon />
					</button>
					<Navigation />
				</div>
			</header>
		</>
	)
	;
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ""
};

export default Header;
