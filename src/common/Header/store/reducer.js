import * as constances from './constances'
import { fromJS } from 'immutable';

// immutable对象  不可改变
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  totalNum: 1,
  mouseEnter: false
})

// 纯函数
export default (state = defaultState, action) => {
  switch(action.type) {
    case constances.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case constances.SEARCH_BLUR:
      return state.set('focused', false);
    case constances.CHANGE_LIST:
        return state.set('list', action.data).set('totalPage', action.totalPage).set('totalNum', action.totalNum);
    case constances.MOUSE_ENTER:
        return state.set('mouseEnter', true);
    case constances.MOUSE_LEAVE:
        return state.set('mouseEnter', false);
    case constances.CHANGE_PAGE:
        return state.set('page', action.page);
    default:
      return state;
  }
}
