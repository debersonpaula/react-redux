import { connect } from 'react-redux';
import MsgList from '../components/msglist';

const mapStateToProps = state => {
	// return data from reducer msgs
	return {msgs: state.msgs};
}

const ViewList = connect(mapStateToProps)(MsgList);

export default ViewList;