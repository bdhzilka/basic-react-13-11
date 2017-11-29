import { connect } from 'react-redux'
import ArticleList from "../components/ArticleList";
import { DateUtils } from 'react-day-picker'

const isInDateRange = (date, dateRange) => {
    return !dateRange.from || !dateRange.to || DateUtils.isDayInRange(date, dateRange)
}

const isArticleSelected = (article) => article.selectedIndex >= 0

const getFilteredArticles = (articles, dateRange) => {
    const selectedArticlesCount = articles.filter(article => isArticleSelected(article)).length

    return articles.filter(article => {
        return isInDateRange(new Date(article.date), dateRange) && (!selectedArticlesCount || isArticleSelected(article))
    })
}

const mapStateToProps = state => ({
    articles: getFilteredArticles(state.articles, state.dateRange)
})

const FilteredArticleList = connect(
    mapStateToProps,
)(ArticleList)

export default FilteredArticleList