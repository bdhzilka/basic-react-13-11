import {INCREMENT, DELETE_ARTICLE} from '../constants'
import {SET_DATE_RANGE, SELECT_ARTICLES} from "../constants/index";

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setDateRange(dateRange) {
    return {
        type: SET_DATE_RANGE,
        payload: { ...dateRange }
    }
}

export function setSelectedArticles(selected) {
    return {
        type: SELECT_ARTICLES,
        payload: { selected }
    }
}