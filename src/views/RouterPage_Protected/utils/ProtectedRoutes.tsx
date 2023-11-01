import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user, Members }: { user: any, Members: any }) => {
  return user.login &&  // 檢查使用者是否已登入
  // 遍歷 user.members 陣列，查找是否有至少一個權限與 Members 陣列中的某個權限匹配。
  // 如果找到匹配的權限，這個表達式將返回 true，否則返回 false。
    user.members.find((per: any) => Members.includes(per)) ? // 檢查使用者的權限是否包含在指定的權限列表中
  ( <Outlet /> ) :                        // 如果滿足條件，則顯示子路由
  ( <Navigate to="/page8/page8_05/" /> ); // 如果未滿足條件，則導向指定的路徑
};

export default ProtectedRoutes;
