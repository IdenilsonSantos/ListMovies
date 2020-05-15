import { toastr } from 'react-redux-toastr'

import { AUTH_USER, ERROR_AUTH } from '../actions/actionsType';
import { apiCustom } from '../../services/api';


export function userLoginFetch(email, password, history) {
    return (dispatch) => {
        return apiCustom.post('login', {
            email, password
        })
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('user', token);
                dispatch(loginUser(token));
                toastr.success('Uau !!!', 'Login realizado com sucesso.');
                setTimeout(() => {
                    history.push('/home');
                }, 2000)
            }).catch(err => {
                if (err.response.status === 400) {
                    dispatch(status(400));
                    toastr.removeByType('success')
                    toastr.error('Opaa !!!', 'Erro ao realizar login.')
                }
            });
    }
}

export function userRegisterFetch(email, password, history) {
    return (dispatch) => {
        return apiCustom.post('register', {
            email, password
        })
            .then(res => {
                toastr.success('Legaal !!!', 'Cadastro realizado com sucesso.');
                setTimeout(() => {
                    history.push('/login');
                }, 2000)
            }).catch(err => {
                if (err.response.data === 400) {
                    toastr.removeByType('success');
                    dispatch(status(400));
                }
            });
    }
}

export function userLogout(history) {
    return (dispatch) => {
        dispatch(logoutUser());
        localStorage.removeItem('user');
        history.push('/login');
    }
}

export function loginUser(token) {
    return {
        type: AUTH_USER,
        token: token
    }
};

export function logoutUser() {
    return {
        type: AUTH_USER,
        token: null
    }
};

export function status(status) {
    return {
        type: ERROR_AUTH,
        status: status
    }
};
