import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {newPage} from './State/reducers';
import {createMatrix} from './Components/RightBox/State/reducers';
import Particles from 'react-particles-js';

const logger = createLogger();

const rootReducer = combineReducers({
	newPage,
	createMatrix
})

const store = createStore(rootReducer, applyMiddleware(logger));

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 100
      }
    }
  }
}

ReactDOM.render(
	<Provider store={store}>
		<Particles className='particles' params={particlesOptions}/>
		<App/>
	</Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
