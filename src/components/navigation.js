import React from "react";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
/* import DropdownLink from "./DropdownLink"; */
import ButtonLink from "./ButtonLink";

export default function navigation(){
	const{ t } = useTranslation("Nav", { useSuspense: false });

	return(
		<nav>
			<Link
				to="/referenser"
				activeClassName="active"
			>
				{t("projects")}
			</Link>

			<Link
				to="/om-mig"
				activeClassName="active"
			>
				{t("about")}
			</Link>

			<Link
				to="/tjanster"
				activeClassName="active"
			>
				{t("services")}
			</Link>

			<Link
				to="/priser"
				activeClassName="active"
			>
				{t("pricing")}
			</Link>

			<Link
				to="/blogg/"
				activeClassName="active"
				partiallyActive={true}
			>
				{t("blog")}
			</Link>

			<ButtonLink variant="outlined" href="/kontakt/">{t("contact")}</ButtonLink>
		</nav>
	);
}
