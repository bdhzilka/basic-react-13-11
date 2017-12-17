import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }

    handleChange = ev => {
        const {value} = ev.target
        this.props.onChange(value)
    }

    render() {
        const {localize} = this.context
        return (
            <div>
                {localize('Username')}: <input value = {this.props.value} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default UserForm