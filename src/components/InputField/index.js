import React, { Component } from 'react'
import './style.css'

export default class InputField extends Component {
    state = {
        value: '',
        hasError: false
    }

    handleChange = ev => {
        const {value} = ev.target
        this.setState({
            value: value.length < this.props.max ? value : this.state.value,
            hasError: value.length < this.props.min
        })
    }

    render() {
        const CustomInput = this.props.tag
        const className = this.state.hasError ? 'input-field-error' : ''

        return (
            <CustomInput className={className}
                         value = {this.state.value}
                         onChange = {this.handleChange}
            ></CustomInput>
        )
    }
}