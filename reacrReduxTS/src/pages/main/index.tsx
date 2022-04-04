/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsyncAction } from './actions';
import { AppState } from '../../store';

import './style.scss';

const MainPage:React.FC = (props) => {
    const dispatch = useDispatch();
    const main = useSelector((state: AppState) => state.main);

    useEffect(() => {
        dispatch(getPostsAsyncAction());
    }, []);

    if (main.loading) {
        return <div>loading...</div>;
    }

    return (
        <div className="main page">
            <div className="posts">
                {main.data && main.data.map((item) => (
                    <div className="item" key={item.id}>
                        <b className="item__title">{item.title}</b>
                        <p className="item__desc">{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MainPage;
