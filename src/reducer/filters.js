import {SET_DATE_RANGE} from "../constants/index";

const initialDateRangeState = {
    from: undefined,
    to: undefined
}

const dateRange = (state = initialDateRangeState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_DATE_RANGE:
            return { ...payload }
    }
    return state
}

export { dateRange }