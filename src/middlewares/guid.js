import {ADD_COMMENT} from "../constants";

const guid = () => Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)

export default store => next => action => {
    switch (action.type) {
        case ADD_COMMENT:
            action.payload.commentId = guid()
    }
    next(action)
}