import { connect } from 'react-redux';
import MsgList from '../components/msglist';
import {delMsg} from '../actions';

// send state to props
const mapStateToProps = state => {
	// return data from reducer 'MsgStore'
	return {msgs: state.MsgStore};
}

// send actions to props
const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
			dispatch( delMsg(id) );
    }
  }
}

const ViewList = connect(mapStateToProps, mapDispatchToProps)(MsgList);

export default ViewList;