import React from 'react';
import PropTypes from 'prop-types';

const Msg = ({ text }) => (
	<li>
		{text}
	</li>
);

Msg.propTypes = {
  text: PropTypes.string.isRequired
}


export default Msg;