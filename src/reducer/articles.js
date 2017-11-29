import { DELETE_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'
import {SET_DATE_RANGE} from "../constants/index";

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}