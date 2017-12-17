import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'
import PropTypes from "prop-types";

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        localize: PropTypes.func
    }

    render() {
        console.log('---', 2)
        return (
            <div>
                <ArticleList />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h1>{this.context.localize('Please select article')}</h1>
        console.log('---', 3)
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage