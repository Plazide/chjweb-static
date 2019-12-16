import React, { useState } from 'react'
import PropTypes from "prop-types";

// Components
import Countdown from "react-countdown-now";

// css
import "./styles/status.css";

// Images
import successUrl from "../images/illustrations/success.svg";

export default function Success({ message, hidden = true, countdown = 0 }) {
	const [successMsg, setSuccessMsg] = useState("");

	const hiddenClass = hidden ? "hidden" : "";
	const countdownElement = countdown ? <Countdown date={Date.now() + countdown} renderer={renderCountdown} /> : "";

	setTimeout( () => {
		setSuccessMsg(message);
	}, 100);

	return (
		<div className={`status success ${hiddenClass}`} aria-live="polite" role="status">
			<h1 className="message">{successMsg}</h1>
			<img src={successUrl} alt="Lyckades" className="illustration" role="presentation" />
		</div>
	)
}

Success.propTypes = {
	message: PropTypes.string.isRequired
}
