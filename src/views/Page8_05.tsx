import { Route, Routes } from "react-router-dom";
import Navbar from "./RouterPage_Protected/Navbar";
import Login from "./RouterPage_Protected/Login";
import Home from "./RouterPage_Protected/Home";
import Accounts from "./RouterPage_Protected/Accounts";
import Dashboard from "./RouterPage_Protected/Dashboard";
import MembersRoutes from "./RouterPage_Protected/utils/MembersRoutes";
import styles from "./page8_01.module.scss";
import { useState } from "react";

const members = {
  User: "User",
  Admin: "Admin",
};

function App() {
  const [isLogin, setIsLoing] = useState(false);
  const [isMember, setIsMember] = useState("");
  const handleButtonClick = () => {
    if (isMember === "") {
      setIsMember("User"); // 點擊後變為 "User"
    } else if (isMember === "User") {
      setIsMember("Admin"); // 點擊後變為 "Admin"
    } else {
      setIsMember(""); // 點擊後再次變為空字串
    }
  };
  const user = { login: isLogin, members: [isMember] };

  console.log(isLogin);
  return (
    <div className={styles.main}>
      <Navbar user={user} members={[members.Admin, members.User]} />
      <Routes>
        {/* 不需檢查是否登入狀態 公共路由 */}
        <Route path="/" element={<Home />} />
        <Route path="/loginTest" element={<Login />} />
        {/* 需要檢查登入狀態 同時檢查 會員身分別 的 私人路由   這裡要"登入"同時是"admin 身分" */}
        <Route
          element={<MembersRoutes user={user} Members={[members.Admin]} />}
        >
          <Route path="/account" element={<Accounts />} />
        </Route>
        {/* 需要檢查登入狀態 同時檢查 會員身分別 的 私人路由   這裡要"登入"同時是"admin && User 身分" */}
        <Route
          element={
            <MembersRoutes
              user={user}
              Members={[members.Admin, members.User]}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <div>
        <button onClick={() => setIsLoing(!isLogin)}>
          目前登錄狀態為：{isLogin ? "登入中" : "尚未登入"}
        </button>
        <button onClick={handleButtonClick}>目前會員是：{isMember}</button>
      </div>
    </div>
  );
}

export default App;
