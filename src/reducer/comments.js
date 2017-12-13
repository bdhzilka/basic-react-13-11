import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrToMap} from './utils'
import {Map, OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const CommentsOffsetRecord = Record({
    offset: 0,
    comments: [],
    loading: false,
    loaded: false
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    commentsOffset: new Map({}),
    totalComments: null
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS + START:
            return state.setIn(['commentsOffset', payload.offset], new CommentsOffsetRecord({
                offset: payload.offset,
                loading: true
            }))

        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('totalComments', response.total)
                .setIn(['commentsOffset', payload.offset, 'loading'], false)
                .setIn(['commentsOffset', payload.offset, 'loaded'], true)
                .setIn(['commentsOffset', payload.offset, 'comments'], response.records)
    }

    return state
}