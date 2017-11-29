import { DELETE_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'
import {SELECT_ARTICLES} from "../constants/index"

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case SELECT_ARTICLES:
            return articlesState.map(article => ({...article, selected: payload.selected.includes(article.id)}))
    }

    return articlesState
}