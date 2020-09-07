import {clickLeftBarAction, clickRightBarAction, clickNavAction} from '../actions/actionType';

export const clickRightBarCreator = () => {
    return {
        type: clickRightBarAction,
        payload: null
    };
}

export const clickLeftBarCreator = () => {
    return {
        type: clickLeftBarAction,
        payload: null
    };
}
export const clickNavcreator= () => {
    return {
        type: clickNavAction,
        payload: null
    };
}