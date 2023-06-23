import { CHANGE_TITLE } from "./actions.js";


const initialState = {
    pageTitle:'Start Bootcamp'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return{
                ...state,
                pageTitle: action.pageTitle
            }
        default:
            return state;            
    }
}

export default reducer