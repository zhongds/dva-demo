import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import App from './routes/App';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
