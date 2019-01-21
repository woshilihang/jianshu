import  * as constances  from './constances';
import axios from 'axios';
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: constances.SEARCH_FOCUS
})



export const searchBlur = () => ({
  type: constances.SEARCH_BLUR
})

const changeList = (data) => (
  {
    type: constances.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
    totalNum: data.length,
  }
)

export const mouseEnter = () => ({
  type: constances.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constances.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constances.CHANGE_PAGE,
  page: page
});


export const getList = () => {
  return (dispatch) => {
    axios.get('/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
      // console.log(data);
    }).catch((error) => {
      console.log('error');
    })
  }
}
