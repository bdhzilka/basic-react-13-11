import { connect } from 'react-redux'
import ArticleList from "../components/ArticleList";
import { DateUtils } from 'react-day-picker'

const getFilteredArticles = (articles, filters) => {
    const {dateRange} = filters
    return articles.filter(article => {
        const date = new Date(article.date)
        return !dateRange.from || !dateRange.to || DateUtils.isDayInRange(date, dateRange)
    })
}

const mapStateToProps = (state) => ({
    articles: getFilteredArticles(state.articles, state.filters)
})

const FilteredArticleList = connect(
    mapStateToProps,
)(ArticleList)

export default FilteredArticleList