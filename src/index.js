import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { reducers } from './reducers';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import './styles/bulma.scss';

export const history = createBrowserHistory();
export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers
  }),
  {},
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider {...{store}}>
    <ConnectedRouter {...{history}}>
      <Switch>
        {
          routes.map((route, index) => <Route key={index} {...route}/>)
        }
      </Switch>
    </ConnectedRouter>
  </Provider>,
  window.document && window.document.getElementById('root')
);
