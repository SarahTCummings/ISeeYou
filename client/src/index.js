import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index-med.css';
import './index-large.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers'
import { fetchData } from './actions'

const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware,
      createLogger() )
);

//TODO Remove (store.dispatch(fetchData)) once we have the real API loaded on the page.
store.dispatch(fetchData());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
