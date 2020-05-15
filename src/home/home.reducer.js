import {
    SAMPLE
} from "./home.constants";

let initialState = {
    count: 0
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAMPLE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    };
}

export default homeReducer;
