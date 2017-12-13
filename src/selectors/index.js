import {createSelector} from 'reselect'
import comments from "../reducer/comments";

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentListSelector = state => state.comments
export const totalCommentsSelector = state => state.comments.totalComments
export const idSelector = (_, props) => props.id
export const offsetSelector = (_, props) => props.offset

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())
export const articleSelector = createSelector(articlesMapSelector, idSelector, (articlesMap, id) => articlesMap.get(id))

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    return comments.getIn(['entities', id])
})

export const createCommentOffsetSelector = () => createSelector(commentListSelector, offsetSelector, (comments, offset) => {
    return comments.getIn(['commentsOffset', offset])
})
