import { combineReducers } from '@reduxjs/toolkit';

import home from '../reducers/home';
import signup from '../reducers/signUp';
import auth from '../reducers/signIn';
import jobs from '../reducers/jobs';

const createReducer = asyncReducers =>
  combineReducers({
    home,
    signup,
    auth,
    jobs
  });

export default createReducer;
