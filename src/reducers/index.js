import { combineReducers } from 'redux';
import {ADD_MSG} from '../actionTypes';

const msgs = (state = [], action) => {
	switch (action.type) {
		case ADD_MSG:
				return [
					...state,
					{
						id: action.id,
						text: action.text
					}
				]
		default:
				return state
		}
}

const reducerStore = combineReducers({
	msgs
});

export default reducerStore;