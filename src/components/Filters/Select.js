import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import {connect} from "react-redux";
import {setSelectedArticles} from "../../AC/index";

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        setSelectedArticles: PropTypes.func.isRequired
    };

    handleChange = selected => {
        this.props.setSelectedArticles(selected.split(","))
    }

    render() {
        const { articles } = this.props
        const options = []
        const selectedOptions = []

        articles.forEach(article => {
            const option = {
                label: article.title,
                value: article.id,
                selectedIndex: article.selectedIndex
            }
            options.push(option)
            if (article.selectedIndex >= 0) {
                selectedOptions.push(option)
            }
            selectedOptions.sort((a, b) => a.selectedIndex - b.selectedIndex)
        })

        return <Select
            options={options}
            value={selectedOptions}
            onChange={this.handleChange}
            multi
            simpleValue
        />
    }
}


export default connect(state => ({
    articles: state.articles
}), {setSelectedArticles})(SelectFilter)
