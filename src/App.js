import React, {
    Component
} from 'react';

import 'antd/dist/antd.css';

import {
    HashRouter as Router,
    Route,
    // Switch
} from 'react-router-dom';

//页面
import Home from "./home/index"

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home}/>
            </Router>
        );
    }
}

export default App;