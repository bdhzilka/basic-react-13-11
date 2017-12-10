import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToImmutableMap} from './utils'
import {Record} from 'immutable'


const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

export default (state = arrToImmutableMap(normalizedComments, CommentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentRecord({
                id: randomId,
                ...payload.comment
            }))
    }

    return state
}