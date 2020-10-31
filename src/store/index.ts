import {combineReducers, createStore} from 'redux';
import {reducer as UserReducer} from 'store/user/reducer';

const rootReducer = combineReducers ({
  UserReducer
});

const reduxStore = createStore(rootReducer);

export default reduxStore;
