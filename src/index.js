import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入全局样式表
import './style';
import { Globalstyle } from  './static/iconfont/iconfont'



ReactDOM.render((
  <div><Globalstyle/><App /></div>
), document.getElementById('root'));
