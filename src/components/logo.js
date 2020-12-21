import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

import LogoIcon from "../images/logotyp.svg";

export default function Logo(){
	const{ i18n } = useTranslation("", { useSuspense: false });
	const{ language } = i18n;
	const prefix = language !== "sv" ? `/${language}` : "";

	return(
		<Link to={prefix + "/"}>
			<img className="logo" src={LogoIcon} alt="CHJ Webblösningar" />
		</Link>

	);
}
