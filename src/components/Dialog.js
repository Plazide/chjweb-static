import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

import "./styles/dialog.css";

export default function Dialog({ children, open, onClose }){
	console.log(open);
	return(
		<Modal
			isOpen={open}
			preventScroll={true}
			className="modal-body"
			overlayClassName="modal-overlay"
			onRequestClose={onClose}
		>
			{children}
		</Modal>
	);
}

Dialog.propTypes = {
	children: PropTypes.node,
	open: PropTypes.bool,
	onClose: PropTypes.func
};
