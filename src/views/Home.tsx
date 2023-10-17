import React, { useState , useEffect } from 'react';
import MainMenu from '@/components/MainMenu';
import { useTranslation  } from "react-i18next";
import { Breadcrumb, Layout, theme ,Button , message, Radio } from 'antd';
// useNavigate 可實現跳轉路徑（路由）
import { Outlet , useNavigate } from 'react-router-dom';
import { LogoutOutlined , HomeOutlined, UserOutlined} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


const View: React.FC = () => {
  const [saveLng,setSaveLng] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const {  i18n} = useTranslation();

  const NavigateTo = useNavigate();
  // const navigateTo = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    // 在組件首次加載時，讀取 dexId 的值
    const languageTo = localStorage.getItem('language') as string || '';
    setSaveLng(languageTo);
    i18n.changeLanguage(languageTo)
},[]);

  useEffect(() => {
    // 在 dexId 更改時，將其保存到 localStorage
    localStorage.setItem('language', saveLng.toString());
  }, [saveLng]);
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: '成功登出',
    });
  };
  const outlogin = () => {
      // // 1.提示成功登出訊息
      success();
      setTimeout(()=>{
        // // 2.刪除 localStorage 的用戶 token
        localStorage.removeItem("lege-react-management-token");
        // // 3.跳轉登入頁面
        NavigateTo("/login");
      },2000)
  };


  // 定義一個函數用於切換語言
    const ChangeLng = (lng:any) =>{
        //固定寫法 i18n套件 changeLanguage("zh") = 中文語言
        //使用 i18n 對象的 changeLanguage 方法來切換語言
        // console.log("Changing language to", lng);
        i18n.changeLanguage(lng);
        setSaveLng(lng);
        // console.log("Language changed to", lng);
    }



  // console.log(ChangeLng)
  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左側邊欄 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {/* 菜單 */}
          <MainMenu></MainMenu>
      </Sider>
      {/* 右邊內容 */}
      <Layout>
        {/* 右邊上方欄位； */}
        <Header style={{ paddingLeft:"16px", background: colorBgContainer }} >
            {/* 麵包屑欄位 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', lineHeight: '64px'  }}>

              <Breadcrumb items={[
                {
                  href:"/page1",
                  title: <HomeOutlined/>,
                },
                {
                  href:'/page3/page3_01',
                  title: (
                  <>
                    <UserOutlined/>
                    <span>User</span>
                  </>),
                },
                {
                  title: 'Zico'
                }
                ]} />
              <div>
                <Button type="primary" icon={<LogoutOutlined />} onClick={outlogin}>
                  登出
                  {contextHolder}
                </Button>
                <Radio.Button value="zh" onClick={() => ChangeLng("zh")}>中文</Radio.Button>
                <Radio.Button value="en" onClick={() => ChangeLng("en")}>英文</Radio.Button>
              </div>
            </div>
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