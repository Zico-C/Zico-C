import React, { useState, useEffect } from "react";
import MainMenu from "@/components/MainMenu";
import { useTranslation } from "react-i18next";
import {
  Breadcrumb,
  Layout,
  theme,
  Button,
  message,
  Radio,
  FloatButton,
  Grid,
} from "antd";
// useNavigate 可實現跳轉路徑（路由）
import { Outlet, useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  HomeOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

const { useBreakpoint } = Grid;

const View: React.FC = () => {
  const [saveLng, setSaveLng] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const { i18n } = useTranslation();
  const NavigateTo = useNavigate();
  const screens = useBreakpoint();
  // const navigateTo = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    // 在組件首次加載時，讀取 dexId 的值
    const languageTo = (localStorage.getItem("language") as string) || "";
    setSaveLng(languageTo);
    i18n.changeLanguage(languageTo);
  }, []);

  useEffect(() => {
    // 在 dexId 更改時，將其保存到 localStorage
    localStorage.setItem("language", saveLng.toString());
  }, [saveLng]);

  useEffect(() => {
    screensisMD();
  }, [screens]);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "成功登出",
    });
  };
  const outlogin = () => {
    // // 1.提示成功登出訊息
    success();
    setTimeout(() => {
      // // 2.刪除 localStorage 的用戶 token
      localStorage.removeItem("lege-react-management-token");
      localStorage.removeItem("User.name");
      localStorage.removeItem("User.email");
      localStorage.removeItem("User.level");
      // // 3.跳轉登入頁面
      NavigateTo("/login");
    }, 2000);
  };

  // 定義一個函數用於切換語言
  const ChangeLng = (lng: any) => {
    //固定寫法 i18n套件 changeLanguage("zh") = 中文語言
    //使用 i18n 對象的 changeLanguage 方法來切換語言
    // console.log("Changing language to", lng);
    i18n.changeLanguage(lng);
    setSaveLng(lng);
    // console.log("Language changed to", lng);
  };

  const showHamberger = screens.xs;

  console.log("screens", screens);
  const screensisMD = () => {
    if (screens.md) {
      setCollapsed(false); // 在屏幕为中等尺寸时将 collapsed 设置为 false
    } else {
      setCollapsed(true);
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {showHamberger && (
        <Button
          onClick={() => setCollapsed((prev) => !prev)}
          style={{
            zIndex: "999",
            right: "10%",
            bottom: "10%",
            position: "fixed",
          }}
          icon={
            <MenuUnfoldOutlined
              style={{ fontSize: "24px", lineHeight: "40px" }}
            />
          }
        ></Button>
      )}
      {/* 左側邊欄 */}
      <Sider
        collapsible // MainMenu 可收起側邊攔功能
        collapsed={collapsed} // 是否收起 MainMenu (false = 開啟 , true = 關閉)
        onCollapse={(value) => setCollapsed(value)}
        onBreakpoint={screensisMD}
        collapsedWidth={showHamberger ? 0 : 80}
        trigger={showHamberger && null}
        style={
          showHamberger
            ? { zIndex: "9999", left: "0", height: "100%", position: "fixed" }
            : {}
        }
      >
        <div className="demo-logo-vertical" />
        {/* 菜單 */}
        <MainMenu></MainMenu>
      </Sider>

      {/* 右邊內容 */}
      <Layout>
        {/* 右邊上方欄位； */}
        <Header style={{ padding: "0 16px", background: colorBgContainer }}>
          {/* 麵包屑欄位 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              lineHeight: "64px",
            }}
          >
            {showHamberger ? (
              <Breadcrumb
                items={[
                  {
                    href: "/Zico-C/page1",
                    title: (
                      <>
                        <HomeOutlined />
                        <span>Home</span>
                      </>
                    ),
                  },
                  {
                    title: "Zico",
                  },
                ]}
              />
            ) : (
              <Breadcrumb
                items={[
                  {
                    href: "/Zico-C/page1",
                    title: (
                      <>
                        <HomeOutlined />
                        <span>Home</span>
                      </>
                    ),
                  },
                  {
                    href: "/Zico-C/page3/page3_02",
                    title: (
                      <>
                        <UserOutlined />
                        <span>User</span>
                      </>
                    ),
                  },
                  {
                    title: "Zico",
                  },
                ]}
              />
            )}

            <div>
              <Button
                type="primary"
                icon={<LogoutOutlined />}
                onClick={outlogin}
              >
                登出
                {contextHolder}
              </Button>
              <Radio.Button value="zh" onClick={() => ChangeLng("zh")}>
                中文
              </Radio.Button>
              <Radio.Button value="en" onClick={() => ChangeLng("en")}>
                英文
              </Radio.Button>
            </div>
          </div>
        </Header>
        {/* 右邊內容欄 */}
        <Content
          style={{ margin: "16px 16px 0", background: colorBgContainer }}
          className="Content"
        >
          {/* 窗口部分 */}
          <Outlet />
          <FloatButton.BackTop
            visibilityHeight={120}
            style={{
              position: "fixed",
              bottom: 5,
              right: 20,
              zIndex: 999,
              border: "1px gray solid",
            }}
          />
        </Content>
        {/* 右邊底部 */}
        <Footer
          style={{ textAlign: "center", padding: "0", lineHeight: "48px" }}
        >
          ZICO Studio ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
