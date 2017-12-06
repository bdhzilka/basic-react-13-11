import {  } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from "../constants";

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            const {commentId, comment} = payload

            return {
                ...state,
                [commentId]: {
                    id: commentId,
                    ...comment
                }
            }
    }

    return state
}