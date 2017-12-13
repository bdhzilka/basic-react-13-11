import React, {Component} from 'react'
import Comment, {DumbComment} from './Comment'
import PropTypes from 'prop-types'
import Loader from "./common/Loader";

class CommentList extends Component {
    static propTypes = {
        mode: PropTypes.string,
        comments: PropTypes.array,
        loading: PropTypes.bool,
        loaded: PropTypes.bool
    }

    render() {
        const list = this.getList()
        return (
            <div>
                {list ? list : <h3>No comments yet</h3>}
            </div>
        )
    }

    getList() {
        const {comments, loading, loaded, mode} = this.props

        if (loading) return <Loader />
        if (!loaded) return null

        if (mode === "idOnly") {
            return <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        } else {
            return <ul>
                {comments.map(comment => <li key = {comment.id}><DumbComment comment = {comment} /></li>)}
            </ul>
        }
    }
}

export default CommentList