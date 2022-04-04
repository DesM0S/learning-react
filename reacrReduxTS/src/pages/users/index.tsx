import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsyncAction } from './actions';
import { AppState } from '../../store';
import './style.scss';

const UserPage:React.FC = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);

  useEffect(() => {
      dispatch(getPostsAsyncAction());
  }, []);

  if (user.loading) {
      return <div>loading...</div>;
  }

  return (
      <div className="user page">
          <div className="posts">
              {user.data && user.data.map((item) => (
                  <div className="item" key={item.id}>
                      <b className="item__title">{item.name}</b>
                      <p className="item__desc">{item.username}</p>
                  </div>
              ))}
          </div>
      </div>
  )
};

export default UserPage;
