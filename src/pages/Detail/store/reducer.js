import { fromJS } from 'immutable';
import {
  constances
} from './index'

const defaultState = fromJS({
  detail: {
    title: '',
    content: ''
  }
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constances.CHANGE_DETAIL:
      return  state.setIn(['detail','title'], action.title).setIn(['detail', 'content'], action.content);
    default:
      return state;
  }
}
