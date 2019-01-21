import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  actionCreators
} from './store/index';
import { Redirect } from 'react-router-dom';


import {
  LoginWrapper,
  LoginBox,
  LoginTitle,
  Input,
  Button
} from './styled'

class Login extends PureComponent {
  render() {

    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>登录</LoginTitle>
            <Input placeholder="登录" type="text" ref={(input) => {this.account = input}} />
            <Input placeholder="密码" type="password" ref={input => {this.password = input}} />
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
         return (
           <Redirect to='/' />
         )
    }
  };
};

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordEle) {
    dispatch(actionCreators.login(accountElem.value, passwordEle.value));
  }
});
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, mapDispatch)(Login);
