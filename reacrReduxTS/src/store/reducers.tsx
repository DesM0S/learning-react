import { combineReducers } from 'redux';

import mainReducer from '../pages/main/reducer';
import userReducer from '../pages/users/reducer'

const rootReducer = combineReducers({
    main: mainReducer,
    user: userReducer
});

export type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;

export default rootReducer;
