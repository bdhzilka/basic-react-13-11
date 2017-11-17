import React, {Component} from 'react'
import Comment from "./Comment"

export default class CommentList extends Component {
    state = {
        isOpen: false
    }

    onLinkClick = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let hasComments = this.props.comments

        const noCommentsElement = !hasComments && <span>No comments yet :(((</span>
        const commentElements = this.state.isOpen && (this.props.comments  || []).map((comment) =>
            <li key = {comment.id}><Comment comment = {comment} /></li>
        )
        const linkElement = <a href = "" onClick = {this.onLinkClick}>{this.state.isOpen ? 'Close' : 'Show more'}</a>

        return (
            <div>
                <br/>
                <div>
                    <span>Comments: </span>
                    {hasComments ? linkElement : noCommentsElement}
                </div>
                <ul>
                    {commentElements}
                </ul>
            </div>
        )
    }
}
