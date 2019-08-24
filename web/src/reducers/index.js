import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import tweets from './tweets';

const appReducer = combineReducers({
  form,
  tweets,
});

export default function (state, action) {
  return appReducer(state, action);
}
