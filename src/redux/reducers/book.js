import {
    getBookAction,
    addDetailAction,
    delBookAction,
    editDetailAction,
    searchAction,
    searchGenreAction,
    searchYearAction,
    pageAction,
    pending,
    fulfilled,
    rejected
} from '../actions/actionType';


const initialState = {
    data: [],
    pageInfo: {},
    bookDetail: {},
    error: '',
    isPending: false,
    isfulfilled: false,
    isRejected: false,
};

const book = (prevState = initialState, {type, payload}) => {
    switch(type) {
        case getBookAction + pending:
            return {
                ...prevState,
                isPending: true
            };
        case getBookAction + rejected:
            return {
                ...prevState,
                isRejected: true,
                error: payload,
                isPending: false
            };
        case getBookAction + fulfilled:
            console.log(payload);
            return {
                ...prevState,
                isfulfilled: true,
                data: payload.data.data,
                isPending: false,
                pageInfo: payload.data.pageInfo
            };
        case addDetailAction:

            if(payload.id === prevState.bookDetail.id) {
                return {
                    ...prevState,
                    bookDetail: {...payload}
                };
            } else {
                return {
                    ...prevState,
                    bookDetail: {...payload}
                };

            }
        case editDetailAction:
            return {
                ...prevState,
                bookDetail: {...payload}
            };

        case delBookAction:
            return {
                ...prevState,
            };
        case pageAction + fulfilled:
            return {
                ...prevState,
                data: payload.data.data,
                pageInfo: payload.data.pageInfo
            };

        case searchAction + pending:
            return {
                ...prevState,
                isPending: true,
                isfulfilled: false
            };
        case searchAction + fulfilled:
            return {
                ...prevState,
                data: payload.data.data,
                pageInfo: payload.data.pageInfo,
                isPending: false,
                isfulfilled: true

            };

        // belum dipake -----start
        case searchGenreAction + pending:
            return {
                ...prevState,
                isPending: true,
                isfulfilled: false
            };
        case searchGenreAction + fulfilled:
            return {
                ...prevState,
                data: payload.data.data,
                pageInfo: payload.data.pageInfo,
                isPending: false,
                isfulfilled: true

            };
        case searchYearAction + pending:
            return {
                ...prevState,
                isPending: true,
                isfulfilled: false
            };
        
        case searchYearAction + fulfilled:
            return {
                ...prevState,
                data: payload.data.data,
                pageInfo: payload.data.pageInfo,
                isPending: false,
                isfulfilled: true

            };
        //  belum dipake ------end 


        default:
            return prevState;
    }
};

export default book;