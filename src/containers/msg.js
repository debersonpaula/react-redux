import React from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../actions';

let AddMsg = ({ dispatch }) => {
	let input;
	return (
    <div>
			<form onSubmit={ e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addMsg(input.value));
        input.value = '';
			}}>
				<label>Message to Add: </label>
				<input ref={node => {input = node}}></input>
				<button type="submit">Add Message</button>
			</form>
		</div>
	);
};

AddMsg = connect()(AddMsg);

export default AddMsg;