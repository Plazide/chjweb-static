import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// Components
import Logo from "./logo";
import Navigation from "./navigation";

// CSS
import "./styles/mobile-menu.css";

// Images
import { ReactComponent as CloseIcon } from "../images/icons/close.svg";

export default function MobileMenu({ open = false, onClose }){
	const{ t } = useTranslation("MobileMenu", { useSuspense: false });
	const openClass = open ? "open" : "";

	return(
		<dialog className={`mobile-menu ${openClass}`} aria-hidden={!open}>
			<div className="wrapper">
				<header>
					<Logo />
					<button className="reset-button" onClick={onClose} aria-label={t("close")}>
						<CloseIcon />
					</button>
				</header>
				<Navigation />
			</div>
		</dialog>
	);
}

MobileMenu.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func
};
