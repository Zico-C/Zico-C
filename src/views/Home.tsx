import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
// useNavigate 可實現跳轉路徑（路由）
import { Outlet , useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
    // getItem('名稱', '路徑' , <icon圖標/>)
  getItem('欄位 1', '/page1', <PieChartOutlined />),
  getItem('欄位 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick = (e:{ key:string }) => {
    console.log("點擊菜單" , e.key);
    //點擊後跳轉到對應的路徑 編程式導航跳轉頁面，需要使用Hook
    navigateTo(e.key);
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左側邊欄 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {/* 菜單 */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
      </Sider>
      {/* 右邊內容 */}
      <Layout>
        {/* 右邊上方欄位； */}
        <Header style={{ paddingLeft:"16px", background: colorBgContainer }} >
            {/* 麵包屑欄位 */}
            <Breadcrumb style={{ lineHeight:"64px" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

        </Header>
        {/* 右邊內容欄 */}
        <Content style={{ margin: '16px 16px 0' ,background: colorBgContainer}}>
            {/* 窗口部分 */}
            <Outlet />
        </Content>
        {/* 右邊底部 */}
        <Footer style={{ textAlign: 'center' ,padding:'0', lineHeight:'48px' }}>ZICO Studio ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;