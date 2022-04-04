export interface PostItem {
    id: number,
    title: string,
    body: string
}

export interface MainStateType {
    data: PostItem[] | null,
    loading: boolean,
    error: string | null
}

// ACTIONS TYPES //

export enum MainActionsList {
    ERROR_MAIN = 'ERROR_MAIN',
    REQUEST_GET_POSTS = 'REQUEST_GET_POSTS',
    RESPONSE_GET_POSTS = 'RESPONSE_GET_POSTS'
}

// ERROR //

export interface ErrorMainActionType {
    type: MainActionsList.ERROR_MAIN,
    error: string
}

export interface RequestGetMainActionType {
    type: MainActionsList.REQUEST_GET_POSTS
}

export interface ResponseGetMainActionType {
    type: MainActionsList.RESPONSE_GET_POSTS,
    data: PostItem[]
}


export type MainActionsType =
ErrorMainActionType
| RequestGetMainActionType
| ResponseGetMainActionType;
