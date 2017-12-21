import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'dva/router';

import Header from './Layout/Header';
import routes from 'config/router.config';

import styles from './Layout/Layout.less';

const { Content } = Layout;

class App extends PureComponent {

  render() {
    const RouteWithSubRoutes = (route) => (
      <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes} />
      )} />
    )
    return (
      <Layout className={styles.layout}>
        <Header />
        <Content>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Content>
      </Layout>
    )
  }
}

export default App;
