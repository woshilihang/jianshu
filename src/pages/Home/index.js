import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  ImgWrapper
} from './style'
// 引入组件
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writting from './components/Writting';
import DownLoad from './components/DownLoad';


class Home extends Component {

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <ImgWrapper>
            <img alt="bannerImg"
              src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              className="bannerImg"
            />
            <Topic />
            <List />
          </ImgWrapper>
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <DownLoad />
          <Writting />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
