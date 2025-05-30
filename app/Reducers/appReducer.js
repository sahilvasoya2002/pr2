import {combineReducers} from 'redux';
import {createReducer} from '../Common/reduxHelper';
import * as Actions from '../Actions/types';

const loadingReducer = createReducer({
  initialState: true,
  actionType: Actions.APP_SET_LOADING,
});

export default combineReducers({
  loading: loadingReducer,
});
