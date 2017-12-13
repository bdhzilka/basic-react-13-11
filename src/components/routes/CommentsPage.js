import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {parse} from 'qs'
import {connect} from "react-redux";
import {totalCommentsSelector} from "../../selectors";
import {COMMENT_PER_PAGE} from "../../constants";
import TotalComments from "../TotalComments";

class CommentsPage extends Component {
    static propTypes = {
        totalComments: PropTypes.number
    }

    render() {
        const query = parse(location.search.substr(1))
        const selectedPage = +query.page || 1;

        return (
            <div>
                <h2> AllComments: </h2>
                {this.props.totalComments != null ? this.getPagination(selectedPage): null}
                <TotalComments key={selectedPage}
                               offset={(selectedPage - 1) * COMMENT_PER_PAGE}></TotalComments>
            </div>
        )
    }

    getPagination(selectedPage) {
        const {totalComments} = this.props

        const pagesLink = [];
        const pagesLength = Math.ceil(totalComments / COMMENT_PER_PAGE)
        for (let i = 1; i <= pagesLength; ++i) {
            let pageUrl = `/comments?page=${i}`
            pagesLink.push(
                <button key={i}>
                    <NavLink
                        to={pageUrl}
                        isActive={this.isPageActive(i, selectedPage)}
                        activeStyle={{color: 'red'}}
                    >{i}</NavLink>
                </button>
            )
        }

        return (
            <div>
                <span>Pages: </span> {pagesLink}
            </div>
        )
    }

    isPageActive(currentPage, selectedPage) {
        return () => {
            return currentPage === selectedPage
        }
    }
}

export default connect(state => {
    return {
        totalComments: totalCommentsSelector(state),
    }
})(CommentsPage)