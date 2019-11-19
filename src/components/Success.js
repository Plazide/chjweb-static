import React from 'react'
import PropTypes from "prop-types";

// Components
import Countdown from "react-countdown-now";

// css
import "./styles/status.css";

// Images
import _successUrl, { ReactComponent as SuccessImage } from "../images/illustrations/success.svg";

export default function Success({ message, hidden = true, countdown = 0 }) {
	const hiddenClass = hidden ? "hidden" : "";
	const countdownElement = countdown ? <Countdown date={Date.now() + countdown} renderer={renderCountdown} /> : "";

	return (
		<div className={`status success ${hiddenClass}`}>
			<SuccessImage className="illustration" />
			<p className="message">{message}</p>
			{countdownElement}
		</div>
	)
}

function renderCountdown({ seconds }){
	return (
		<div>
			<span>Omdirigeras om:</span>
			<span className="countdown">{seconds}</span>
		</div>
		
	);
}

Success.propTypes = {
	message: PropTypes.string.isRequired
}
