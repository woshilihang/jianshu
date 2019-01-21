import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/Login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoItemWrapper
} from './style'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { focused, list, login, loginOut} = this.props;
    console.log(login);
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left" >下载App</NavItem>
          {
            login ?
              <NavItem onClick={loginOut} className="right fontColor">退出</NavItem> :
              <Link to='/login'><NavItem className="right fontColor">登录</NavItem></Link>
          }
          <NavItem className="right fontColor"><i className="iconfont">&#xe607;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in = {focused}
              timeout= {200}
              classNames="slide"
            >
            { /* slide-enter slide-enter-active */ }
              <NavSearch
                className={focused ? 'focused': ''}
                onFocus={() => this.props.handleInputFoucs(list)}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe626;</span>
            { this.getListArea() }
          </SearchWrapper>
          <Addition>
            <Link to='/write'>
              <Button className="writing"><span className="iconfont">&#xe603;</span>写文章</Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  };

  getListArea = () => {
    const { focused, list, page, mouseEnter, totalPage, totalNum, handleChangePage } = this.props;
    let pageList = [];
    const newList = list.toJS();
    if (newList.length > 0) {
      for (let i = (page-1)*10; i < page * 10; i++) {
        if (i < totalNum) {
          pageList.push(
            <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }
    if (focused || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter}
            onMouseLeave={ this.props.handleMouseLeave }
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch
              onClick={ () =>  handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span ref={ (icon) => {this.spinIcon = icon} }  className="iconfont spin">&#xe759;</span>
            换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoItemWrapper>
          { pageList }
          </SearchInfoItemWrapper>
        </SearchInfo>
      );
    } else {
      return ;
    }
  }
}

// 改成无状态组件，性能相对较高
// 映射关系
// 把指定的state作为props注入到UI组件，
// 第二个参数是ownProps， 是React组件自己的Props
// 比如在你的store当中维护了一个用户列表，而你的组件只是关心一个用户
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    totalPage: state.getIn(['header', 'totalPage']),
    totalNum: state.getIn(['header', 'totalNum']),
    login: state.getIn(['login', 'login'])
    // focused: state.get('header').get('focused')
  }
}

// dispath都写在改方法内
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFoucs(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      // 替换非0-9的数据，提取出数字
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = 'rotate('+ (originAngle + 360 ) +'deg)';
      if (page < totalPage ) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    loginOut() {
      console.log('loginout');
      dispatch(loginActionCreators.loginOut());
    }
  }
}

// Header与store建立连接，前面接收两个映射的参数
export default connect(mapStateToProps, mapDispathToProps)(Header);
