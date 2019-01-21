
import reducer from './reducer';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// redux chrome调试工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 中间件的使用
const enhancer = composeEnhancers(
	applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);

export default store;
