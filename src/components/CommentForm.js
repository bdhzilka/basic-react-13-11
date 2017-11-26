import React, { Component } from 'react'
import InputField from './InputField/index'

export default class CommentForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>Username:</span>
                    <InputField tag="input" max={100} min={10}></InputField>
                </div>

                <div>
                    <span>Text:</span>
                    <InputField tag="textarea" max={100} min={20}></InputField>
                </div>
            </div>
        )
    }
}
