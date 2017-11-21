import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticleListHOC from './ArticleListHOC'

function App({ articles }) {
    return (
        <div>
            <h1>App name</h1>
            <ArticleListHOC articles = {articles} />
        </div>
    )
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default App