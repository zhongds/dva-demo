import React, { PureComponent } from 'react';
import { Layout, Icon, Button } from 'antd';

import logoImg from 'assets/images/logo.png';
// import titleBgImg from 'assets/images/title_bg.png';

import styles from './App.less';

const { Header, Content, Footer } = Layout;

class App extends PureComponent {

  render() {
    return (
      <Layout className={styles.layout}>
        <Header>
          <div className={styles.title}>
            <img src={logoImg} />
            <span>广东省重点车辆交通安全协同监管平台</span>
          </div>
          <div className={styles.navigation}>
            <span>首页</span>
            <span>综合监管</span>
            <span>监管处置</span>
            <span>综合服务</span>
            <span>信息管理</span>
            <span>决策研判</span>
            <span>系统设置</span>
          </div>
          <div className={styles.userInfo}>
            <span>欢迎您, <span className={styles.userName}>admin</span></span>
            <Button size='small'>注销</Button>
          </div>
        </Header>
        <Content style={{height: 600}}>content
        </Content>
      </Layout>
    )
  }
}

export default App;
