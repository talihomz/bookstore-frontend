import { CHANGE_FILTER } from "../actions/constants";

const categoryFilterReducer = ( state = "All", action ) => {
    if(action.type === CHANGE_FILTER)
        return action.filter;

    return state;
}

export default categoryFilterReducer;