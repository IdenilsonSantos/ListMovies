import { FETCH_SUCCESS, FETCH_ERROR } from './actionsType';
import { apiTmdb } from '../../services/api';
import api_key from '../../services/key';

export function tmdbFetch(term) {
    return (dispatch) => {
        return apiTmdb.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${term}&page=1&include_adult=false`)
            .then(res => {
                dispatch(data([res.data]));
            }).catch(err => {
                if (err) {
                    dispatch({ type: FETCH_ERROR });
                }
            });
    }
}

export function data(data) {
    return {
        type: FETCH_SUCCESS,
        data: data
    }
};