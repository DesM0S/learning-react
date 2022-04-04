import axios from 'axios';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { UserActionsType, UserActionsList, UserStateType, usersItem } from './types';

export const errorUserAction = (error: string): UserActionsType => ({
    type: UserActionsList.ERROR_USER,
    error
});

// GET ACTIONS //

export const requestGetUserAction = (): UserActionsType => ({
    type: UserActionsList.REQUEST_GET_POSTS
});

export const responseGetUserAction = (data: usersItem[]): UserActionsType => ({
    type: UserActionsList.RESPONSE_GET_POSTS,
    data
});

export const getPostsAsyncAction = () => async (dispatch: ThunkDispatch<UserStateType, void, Action>): Promise<void> => {
    dispatch(requestGetUserAction());

    const data = await axios.get('https://jsonplaceholder.typicode.com/users');

    if (data.status !== 200) {
        dispatch(errorUserAction('Произошла ошибка! users'))
    } else {
        dispatch(responseGetUserAction(data.data));
    }
};