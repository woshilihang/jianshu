import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/Header'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Write from './pages/Write'
import Store from './store/index'
// 引入路由
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <div>
          <BrowserRouter>
            <Header />
            </BrowserRouter>
            <BrowserRouter>
              <div>
                {/*exact用于匹配精确的路由地址*/}
                <Route path='/' exact component={ Home }></Route>
                <Route path='/detail/:id' exact component={ Detail } ></Route>
                <Route path='/login' exact component= { Login } ></Route>
                <Route path='/write' exact component= { Write } ></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
