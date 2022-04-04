import axios from 'axios';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { MainActionsType, MainActionsList, MainStateType, PostItem } from './types';

export const errorMainAction = (error: string): MainActionsType => ({
    type: MainActionsList.ERROR_MAIN,
    error
});

// GET ACTIONS //

export const requestGetMainAction = (): MainActionsType => ({
    type: MainActionsList.REQUEST_GET_POSTS
});

export const responseGetMainAction = (data: PostItem[]): MainActionsType => ({
    type: MainActionsList.RESPONSE_GET_POSTS,
    data
});

export const getPostsAsyncAction = () => async (dispatch: ThunkDispatch<MainStateType, void, Action>): Promise<void> => {
    dispatch(requestGetMainAction());

    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');

    if (data.status !== 200) {
        dispatch(errorMainAction('Произошла ошибка!'))
    } else {
        dispatch(responseGetMainAction(data.data));
    }
};