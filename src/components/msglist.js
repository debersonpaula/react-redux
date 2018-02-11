import React from 'react';
import PropTypes from 'prop-types';
import Msg from './msg';

const MsgList = ({ msgs }) => (
  <ul>
    {msgs.map(msg => (
      <Msg key={msg.id} {...msg} />
    ))}
  </ul>
);

MsgList.propTypes = {
  msgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default MsgList;