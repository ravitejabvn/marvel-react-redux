import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Characters from './characters';
import CharacterById from './charactersById';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

var store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var storeState = store.getState()
console.log(storeState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/characters" component={Characters}/>
        {/* <Route exact path="/characters/:id" component={CharacterById}/> */}
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
