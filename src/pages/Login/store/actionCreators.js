import axios from 'axios';
import {
  constances
} from './index'

const changeLogin = () => ({
  type: constances.CHANGElOGIN,
  value: true
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+account+'&password='+password).then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      } else {
        alert('登录失败');
      }
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
}


export const loginOut = () => ({
  type: constances.LOGINOUT,
  value: false
})
