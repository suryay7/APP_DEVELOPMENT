import React from 'react'

import { createStore, combineReducers } from 'react';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;