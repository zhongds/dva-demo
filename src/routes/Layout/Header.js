import React from 'react';
import { Layout, Button } from 'antd';
import { NavLink } from 'dva/router';

import styles from './Layout.less';

import logoImg from 'assets/images/logo.png';

const { Header } = Layout;

const HeaderComponent = () => (
  <Header>
    <div className={styles.title}>
      <img src={logoImg} alt='logo' />
      <span>广东省重点车辆交通安全协同监管平台</span>
    </div>
    <div className={styles.navigation}>
      <NavLink to='/home' >首页</NavLink>
      <NavLink to='/monitor'>综合监管</NavLink>
      <NavLink to='/dispose'>监管处置</NavLink>
      <NavLink to='/infoctl'>综合服务</NavLink>
      <NavLink to='/serve'>信息管理</NavLink>
      <NavLink to='/decision'>决策研判</NavLink>
      <NavLink to='/system'>系统设置</NavLink>
    </div>
    <div className={styles.userInfo}>
      <span>欢迎您, <span className={styles.userName}>admin</span></span>
      <Button size='small'>注销</Button>
    </div>
  </Header>
);

export default HeaderComponent;
