import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

import RangeDayPicker from "./RangeDayPicker/index";

class App extends Component {
    state = {
        selected: null,
        from: undefined,
        to: undefined
    }

    handleSelect = selected => this.setState({ selected })

    handleOnRangeChange = (from, to) => {
        this.setState({from, to})
    }

    render() {
        const {articles} = this.props
        const {from, to} = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
                <RangeDayPicker
                    from = {from}
                    to = {to}
                    onChange = {this.handleOnRangeChange}
                />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App