import React, { Component } from 'react';
import AddMsg from '../containers/msg';
import ViewList from '../containers/list';


class App extends Component {

    constructor() {
      super();
    }
		
    render() {
        return (
            <div>
                <AddMsg />
                <ViewList />
            </div>
        );
    }
}

export default App;