import { FETCH_SUCCESS, FETCH_ERROR } from './actionsType';
import { apiTmdb, apiCustom } from '../../services/api';
import api_key from '../../services/key';
import { authHeader } from '../../helpers/authHeader';
import { toastr } from 'react-redux-toastr';

const requestOptions = {
    method: 'POST',
    headers: authHeader()
};

export function tmdbFetch(term, pageNumber) {
    return (dispatch) => {
        return apiTmdb.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${term}&page=${pageNumber}&include_adult=false`)
            .then(res => {
                dispatch(data([res.data]));
            }).catch(err => {
                if (err) {
                    dispatch({ type: FETCH_ERROR });
                }
            });
    }
}

export function addFavorite(data) {
    return (dispatch) => {
        return apiCustom.post('movies', data, requestOptions)
            .then(res => {
                toastr.success('Filme adicionado à lista com sucesso.')
            }).catch(err => {
                if (err.response.status === 400) {
                    toastr.error('O filme já existe na sua lista.')
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