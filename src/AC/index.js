import {INCREMENT, DELETE_ARTICLE} from '../constants'
import {SET_DATE_RANGE} from "../constants/index";

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