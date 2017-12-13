import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadComments} from "../AC";
import {createCommentOffsetSelector} from "../selectors";
import {COMMENT_PER_PAGE} from "../constants";
import CommentList from "./CommentList";

class TotalComments extends Component {
    static propTypes = {
        loadComments: PropTypes.func.isRequired,
        totalComments: PropTypes.object
    }

    componentDidMount() {
        const {loadComments, offset, totalComments} = this.props
        if (!totalComments || (!totalComments.loading && !totalComments.loaded)) loadComments(COMMENT_PER_PAGE, offset)
    }

    render() {
        const {comments, loading, loaded} = this.props.totalComments || {}
        return (
            <CommentList comments={comments} loading={loading} loaded={loaded}/>
        )
    }
}

const createMapStateToProps = () => {
    const commentOffsetSelector = createCommentOffsetSelector()

    return (state, ownProps) => ({
        totalComments: commentOffsetSelector(state, ownProps)
    })
}


export default connect(createMapStateToProps, { loadComments })(TotalComments)