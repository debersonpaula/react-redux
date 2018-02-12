import React from 'react';
import PropTypes from 'prop-types';

const Msg = ({ text, onDeleteClick }) => (
	<li>
		{text} <button onClick={onDeleteClick}>DEL</button>
	</li>
);

Msg.propTypes = {
	text: PropTypes.string.isRequired,
	onDeleteClick: PropTypes.func
}


export default Msg;