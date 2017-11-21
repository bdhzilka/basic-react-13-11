import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordion from "./Accordion"

class ArticleList extends Accordion {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    }

    render() {
        const {articles} = this.props;
        const articleElements = articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.isOpen(article.id)}
                     toggleOpen = {this.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => this.toggleOpen(openArticleId)
}

export default ArticleList
