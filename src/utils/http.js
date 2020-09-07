import Axios from 'axios';

export const getBook = () => {
    return Axios.get('http://localhost:2300/books?page=1&limit=6');
}

export const delBook = (id) =>{
    const url = 'http://localhost:2300/books';
    return Axios.delete(`${url}?id=${id}`)
}

export const pageBook = (params) =>{
    const url = 'http://localhost:2300';
    return Axios.get(`${url}${params}`)
}

export const searchBook = (title) =>{
    const url = 'http://localhost:2300/books';
    return Axios.get(`${url}?page=1&limit=6&title=${title}&sortby=title&order=ASC`)
}
// belum dipake
export const searchByGenre = (id) =>{
    const url = process.env.REACT_APP_BOOK
    return Axios.get(`${url}?page=1&limit=6&genre_id=${id}sortby=title&order=ASC`)
}
// belum dipake
export const searchByYear= (year) =>{
    const url = process.env.REACT_APP_BOOK
    return Axios.get(`${url}?page=1&limit=6&release_year=${year}sortby=title&order=ASC`)
}

export const patchBookAPI = (body) => {
    return Axios.patch("http://localhost:2300/book", body);
};