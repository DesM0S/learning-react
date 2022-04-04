export interface usersItem {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface UserStateType {
    data: usersItem[] | null,
    loading: boolean,
    error: string | null
}

// ACTIONS TYPES //

export enum UserActionsList {
    ERROR_USER = 'ERROR_USER',
    REQUEST_GET_POSTS = 'REQUEST_GET_POSTS',
    RESPONSE_GET_POSTS = 'RESPONSE_GET_POSTS'
}

// ERROR //

export interface ErrorUserActionType {
    type: UserActionsList.ERROR_USER,
    error: string
}

export interface RequestGetUserActionType {
    type: UserActionsList.REQUEST_GET_POSTS
}

export interface ResponseGetUserActionType {
    type: UserActionsList.RESPONSE_GET_POSTS,
    data: usersItem[]
}


export type UserActionsType =
    ErrorUserActionType
    | RequestGetUserActionType
    | ResponseGetUserActionType;
