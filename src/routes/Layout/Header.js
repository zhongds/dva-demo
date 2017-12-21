import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'dva/router';

import styles from './Layout.less';

import logoImg from 'assets/images/logo.png';

const { Header } = Layout;

const HeaderComponent = () => (
  <Header>
    <div className={styles.title}>
      <img src={logoImg} />
      <span>广东省重点车辆交通安全协同监管平台</span>
    </div>
    <div className={styles.navigation}>
      <span><Link to='/home'>首页</Link></span>
      <span><Link to='/monitor'>综合监管</Link></span>
      <span><Link to='/dispose'>监管处置</Link></span>
      <span><Link to='/infoctl'>综合服务</Link></span>
      <span><Link to='/serve'>信息管理</Link></span>
      <span><Link to='/decision'>决策研判</Link></span>
      <span><Link to='/system'>系统设置</Link></span>
    </div>
    <div className={styles.userInfo}>
      <span>欢迎您, <span className={styles.userName}>admin</span></span>
      <Button size='small'>注销</Button>
    </div>
  </Header>
)

export default HeaderComponent;
