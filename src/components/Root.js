import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import App from  './App'
import history from '../history'
import Localization from "./Localization";

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Localization lang="ua">
                <Provider store = {this.props.store}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </Provider>
            </Localization>

        )
    }
}

export default Root