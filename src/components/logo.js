import React from 'react'

import LogoIcon from "../images/logotyp.svg";

export default function Logo({ siteTitle }) {
	return (
		<img className="logo" src={LogoIcon} alt={siteTitle} />
	)
}
