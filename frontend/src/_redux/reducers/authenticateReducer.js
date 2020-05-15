import { AUTH_USER, ERROR_AUTH } from '../actions/actionsType';

const initialState = {
    token: "",
    error: false,
    status: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                token: action.token
            }
        case ERROR_AUTH:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}