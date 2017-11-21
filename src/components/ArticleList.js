import React, {Component} from 'react'
import Article from './Article'
import accordion from "../decorators/accordion";

class ArticleList extends Component {
    render() {
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.props.isOpen(article.id)}
                     toggleOpen = {this.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
/*

    toggleOpenArticleWitoutCurr(openArticleId) {
        this.setState({ openArticleId })
    }
*/

    toggleOpenArticle = openArticleId => this.props.toggleOpen(openArticleId)
}

export default accordion(ArticleList)