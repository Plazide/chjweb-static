import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { useMediaQuery } from "react-responsive";

import LogoIcon from "../images/logotyp.svg";
import LogoIconSmall from "../images/small.svg";

export default function Logo(){
	const isSmall = useMediaQuery({ query: "(max-width: 400px)" });

	return(
		<Link to="/">
			{
				isSmall
					? <img className="logo" src={LogoIconSmall} alt="Carl Hallén Jansson" />
					: <img className="logo" src={LogoIcon} alt="Carl Hallén Jansson" />
			}

		</Link>

	);
}
