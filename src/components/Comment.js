import React, {Component} from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                <span>{this.props.comment.user}: </span>
                <q>{this.props.comment.text}</q>
            </div>
        )
    }
}
