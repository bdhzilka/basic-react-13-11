import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'
import PropTypes from "prop-types";

//console.log('---', React.Fragment)
class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }

    render() {
        const {localize} = this.context
        return (
            <Fragment>
                <h2>{localize('Main Menu')}:</h2>
                {this.props.children}
            </Fragment>
        )
    }
}

export {MenuItem}
export default Menu