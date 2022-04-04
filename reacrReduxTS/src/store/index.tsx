import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    window.location.hostname === 'localhost' ? composeWithDevTools(applyMiddleware(...middleware)) : compose(applyMiddleware(...middleware))
);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
