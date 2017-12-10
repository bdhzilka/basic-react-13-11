import {ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
import {arrToImmutableMap} from './utils'
import {Record} from 'immutable'


const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

export default (comments = arrToImmutableMap([], CommentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentRecord({
                id: randomId,
                ...payload.comment
            }))

        case LOAD_COMMENTS + SUCCESS:
            return comments.merge(arrToImmutableMap(payload.response, CommentRecord))
    }

    return comments
}