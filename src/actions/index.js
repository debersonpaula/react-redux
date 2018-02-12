import {ADD_MSG, DEL_MSG} from './actionTypes';
import {msgHandler} from '../services/msgService';

// helper to get payload list
function returnPayload(type) {
	return {
		type: type,
		payload: msgHandler.data
	}
}

export function addMsg (text) {
	//use service to add msg
	msgHandler.addMsg(text);
	//return list of messages
	return returnPayload(ADD_MSG);
}

export function delMsg (id) {
	//use service to del msg
	msgHandler.delMsgById(id);
	//return list of messages
	return returnPayload(DEL_MSG);
}
