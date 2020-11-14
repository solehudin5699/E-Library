import Axios from 'axios';

export const getBook = () => {
    return Axios.get(process.env.REACT_APP_API_URL+'/books?page=1&limit=16');
}

export const getMoreBook = (page) => {
    const url = `${process.env.REACT_APP_API_URL}/books?page=${page}&limit=16`
    return Axios.get(url);

}

export const delBook = (id) =>{
    const url = process.env.REACT_APP_API_URL+'/books';
    return Axios.delete(`${url}?id=${id}`)
}

export const pageBook = (params) =>{
    const url = process.env.REACT_APP_API_URL
    return Axios.get(`${url}${params}`)
}

export const searchBook = (title) =>{
    const url = process.env.REACT_APP_API_URL+'/books';
    return Axios.get(`${url}?page=1&limit=6&title=${title}&sortby=title&order=ASC`)
}
// belum dipake
export const searchByGenre = (id) =>{
    const url = process.env.REACT_APP_API_URL+"/books"
    return Axios.get(`${url}?page=1&limit=6&genre_id=${id}sortby=title&order=ASC`)
}
// belum dipake
export const searchByYear= (year) =>{
    const url = process.env.REACT_APP_API_URL+"/books"
    return Axios.get(`${url}?page=1&limit=6&release_year=${year}sortby=title&order=ASC`)
}

export const patchBookAPI = (body) => {
    return Axios.patch(process.env.REACT_APP_API_URL+"/book", body);
};