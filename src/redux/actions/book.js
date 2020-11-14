import {getBook, delBook, pageBook, searchBook, searchByGenre, searchByYear, getMoreBook} from '../../utils/http';
import {
    getBookAction,
    addDetailAction,
    delBookAction,
    pageAction,
    editDetailAction,
    searchAction,
    searchGenreAction,
    searchYearAction,
    getMoreBookAction,
    clearDetailBookAction,
} from './actionType';

export const getBookCreator = () => {
    return {
        type: getBookAction,
        payload: getBook()
    };
};
export const getMoreBookCreator = (page) => {
    return {
        type: getMoreBookAction,
        payload: getMoreBook(page)
    }
}

export const addDetailCreator = (id, title, genre, image, year, synopsis, author, qty, genre_id) => {
    return {
        type: addDetailAction,
        payload: {
            id: id,
            title: title,
            genre: genre,
            image: image,
            realease_year: year,
            synopsis: synopsis,
            author: author,
            qty: qty,
            genre_id: genre_id
        }
    };
};

export const editDetailCreator = (id,title, genre, image, year, synopsis, author, qty, genre_id) => {
    return {
        type: editDetailAction,
        payload: {
            id: id,
            title: title,
            genre: genre,
            image: image,
            realease_year: year,
            synopsis: synopsis,
            author: author,
            qty: qty,
            genre_id: genre_id

        }
    };
};



export const delBookCreator = (id) => {
    return {
        type: delBookAction,
        payload: delBook(id)
    };
};

export const searchBookCreator = (title) => {
    return {
        type: searchAction,
        payload: searchBook(title)
    };
};
export const clearDetailCreator = () => {
    return {
        type: clearDetailBookAction,
    }
}

// belum dipake
export const searchGenreCreator = (id) =>{
    return{
        type: searchGenreAction,
        payload: searchByGenre(id),
    }
}
// belum dipake
export const searchYearCreator = (year) =>{
    return{
        type: searchYearAction,
        payload: searchByYear(year)
    }
}




export const PageCreator = (params) => {
    return {
        type: pageAction,
        payload: pageBook(params)
    };
};