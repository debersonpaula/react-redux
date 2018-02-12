import React from 'react';
import PropTypes from 'prop-types';
import Msg from './msg';

const MsgList = ({ msgs, onDeleteClick }) => {
  const { msgList } = msgs;
  return (
    <ul>
      {msgList.map(msg => (
        <Msg key={msg.id} onDeleteClick={() => onDeleteClick(msg.id)} {...msg} />
      ))}
    </ul>
  );
};

MsgList.propTypes = {
  msgs: PropTypes.shape({
    msgList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default MsgList;