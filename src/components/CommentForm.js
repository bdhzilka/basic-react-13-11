import React, { Component } from 'react'

export default class CommentForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>Username:</span>
                    <input></input>
                </div>

                <div>
                    <span>Text:</span>
                    <textarea></textarea>
                </div>
            </div>
        )
    }
}