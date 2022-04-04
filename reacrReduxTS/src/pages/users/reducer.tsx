import {
    UserActionsType,
    UserActionsList,
    UserStateType
} from './types';

export const initialState: UserStateType = {
    data: null,
    loading: false,
    error: null
};

const UserReducer = (state: UserStateType = initialState, action: UserActionsType) : UserStateType => {
    switch (action.type) {
        case UserActionsList.REQUEST_GET_POSTS: {
            return {
                ...state,
                loading: true
            }
        }
        case UserActionsList.RESPONSE_GET_POSTS: {
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

export default UserReducer;
