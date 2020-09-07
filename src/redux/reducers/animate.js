import {clickLeftBarAction, clickRightBarAction, clickNavAction} from '../actions/actionType';

const initialState = {
    rightBarDisplay: false,
    leftBarDisplay: false,
    navDisplay: false
};

const animate = (prevState = initialState, {type}) =>{
    switch(type){
        case clickRightBarAction:
            return{
                ...prevState,
                rightBarDisplay : !prevState.rightBarDisplay,
            }
        case clickLeftBarAction:
            return{
                ...prevState,
                leftBarDisplay: !prevState.leftBarDisplay
            }
        case clickNavAction:
            return{
                ...prevState,
                navDisplay : !prevState.navDisplay
            }
        default:
            return prevState
    }
        
}

export default animate;