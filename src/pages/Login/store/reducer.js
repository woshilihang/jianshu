import { fromJS } from 'immutable';
import {
  constances
} from './index'

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constances.CHANGElOGIN:
      return state.set('login', action.value);
    case constances.LOGINOUT:
     return state.set('login', action.value);
    default:
      return state;
  }
}
