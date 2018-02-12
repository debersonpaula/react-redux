import {ADD_MSG, DEL_MSG} from '../actions/actionTypes';
import _ from 'lodash/fp';

const initialState = {
	msgList: [],
};

const MsgStore = (state = initialState, action) => {
	
	let { type, payload } = action;

	switch (type) {
		case ADD_MSG:
			return _.merge(state, payload);
		case DEL_MSG:
			return _.merge({}, payload);
		default:
				return state;
		}
}

export default MsgStore;