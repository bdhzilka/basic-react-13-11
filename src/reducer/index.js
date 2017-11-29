import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import {dateRange} from './filters'

export default combineReducers({
    counter: counterReducer,
    articles,
    filters: combineReducers({
        dateRange
    })
})