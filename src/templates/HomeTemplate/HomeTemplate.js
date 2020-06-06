import React, { Fragment } from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import "./HomeTemplate.scss";

import { Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const HomeLayout = (props) => (
  <Fragment>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Fragment>
);

export const HomeTemplate = (props) => (
  <Route
    path={props.path}
    {...props.exact}
    render={(propsComponent) => (
      <HomeLayout>
        <props.component {...propsComponent} />
      </HomeLayout>
    )}
  />
);
