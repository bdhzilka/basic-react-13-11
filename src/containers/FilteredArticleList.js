import { connect } from 'react-redux'
import ArticleList from "../components/ArticleList";
import { DateUtils } from 'react-day-picker'

const isInDateRange = (date, dateRange) => {
    return !dateRange.from || !dateRange.to || DateUtils.isDayInRange(date, dateRange)
}

const getFilteredArticles = (articles, dateRange) => {
    const selectedArticlesCount = articles.filter(article => article.selected).length

    return articles.filter(article => {
        return isInDateRange(new Date(article.date), dateRange) && (!selectedArticlesCount || article.selected)
    })
}

const mapStateToProps = state => ({
    articles: getFilteredArticles(state.articles, state.dateRange)
})

const FilteredArticleList = connect(
    mapStateToProps,
)(ArticleList)

export default FilteredArticleList