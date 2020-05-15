import { FETCH_SUCCESS, FETCH_ERROR, RESET_DATA } from '../actions/actionsType';

const initialState = {
    data: [],
    error: false,
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.data,
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: true
            }
        case RESET_DATA:
            return {
                ...state,
                data: []
            }
        default:
            return state
    }
}