export const msgHandler = {
	
	msgId: 0,

	data: {
		msgList: [],
	},

	addMsg(text) {
		const msgToAdd = {id: this.msgId++, text: text};
		this.data.msgList.push(msgToAdd);
	},

	delMsgById(id) {
		this.data.msgList.splice( this.findIndexById(id), 1 );
	},

	findIndexById(id) {
		for (var i in this.data.msgList) {
			if (id === this.data.msgList[i].id) {
				return i;
			}
		}
		return -1;
	}

};