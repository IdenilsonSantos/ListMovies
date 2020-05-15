import axios from 'axios';

const apiTmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const apiCustom = axios.create({
    baseURL: 'http://localhost:3333/',
});

export {
    apiTmdb,
    apiCustom
};
