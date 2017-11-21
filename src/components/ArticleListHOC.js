import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from "../decorators/accordion"

class ArticleList extends Component {

    static propTypes = {
        isOpen: PropTypes.func.isRequired,
        articles: PropTypes.array.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    render() {
        const {isOpen, articles} = this.props;
        const articleElements = articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {isOpen(article.id)}
                     toggleOpen = {this.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => this.props.toggleOpen(openArticleId)
}

export default accordion(ArticleList)
