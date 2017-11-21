import React, {Component} from 'react'
import Article from './Article'
import accordion from "../decorators/accordion";
import Accordion from "./Accordion";

// commented lines should be used when ArticleList extends Accordion

// class ArticleList extends Accordion {
class ArticleList extends Component {

    render() {
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.props.isOpen(article.id)}
                     // isOpen = {this.isOpen(article.id)}
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
    // toggleOpenArticle = openArticleId => this.toggleOpen(openArticleId)
}

export default accordion(ArticleList)
// export default ArticleList
