import {
    MainActionsType,
    MainActionsList,
    MainStateType
} from './types';

export const initialState: MainStateType = {
    data: null,
    loading: false,
    error: null
};

const mainReducer = (state: MainStateType = initialState, action: MainActionsType) : MainStateType => {
    switch (action.type) {
        case MainActionsList.REQUEST_GET_POSTS: {
            return {
                ...state,
                loading: true
            }
        }
        case MainActionsList.RESPONSE_GET_POSTS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        default:
            return state;
    }
};

export default mainReducer;
