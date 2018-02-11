import {ADD_MSG} from '../actionTypes';

let msgID = 0;

export const addMsg = text => {
	return {
		type: ADD_MSG,
		id: msgID++,
		text
	}
}