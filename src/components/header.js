import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo";
import Navigation from "./navigation";

import "./styles/header.css";

const Header = ({ siteTitle }) => (
	<header>
		<div className="wrapper">
	 		<Logo siteTitle={siteTitle} />
			<Navigation />
		</div>
	</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
