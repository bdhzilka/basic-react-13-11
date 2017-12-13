import React, {Component} from 'react'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import CommentList from "./CommentList";

class ArticleComments extends Component {
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
        if (!isOpen) return null

        return (
            <div>
                <CommentList mode="idOnly" loading={commentsLoading} loaded={commentsLoaded} comments={comments}/>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect(null, { loadArticleComments })(toggleOpen(ArticleComments))