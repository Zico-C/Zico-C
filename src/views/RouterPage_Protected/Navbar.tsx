import { Link } from "react-router-dom";
const Navbar = ({ user , members }: { user: any, members: any }) => {
  const isUser =  user.members.includes("User");
  const isAdmin = user.members.includes("Admin")
  const isLogin = user.login;
  console.log("找到User",isUser)
  console.log("找到Admin",isAdmin)  
  console.log("找到isLogin",isLogin)
  console.log(members)
  
  return (
    <div>
      <Link to="/page8/page8_05/">Home</Link> | 
      <Link to="/page8/page8_05/loginTest"> Login</Link> 

      {isLogin && isAdmin ? (
        <>
          <span> | </span>
          {<Link to="/page8/page8_05/account">Account</Link>}
        </>
      ) : ( null)}
      
      {isLogin && (isAdmin || isUser) ? (
        <>
          <span> | </span>
          {<Link to="/page8/page8_05/dashboard">Dashboard</Link>}
        </>
      ) : ( null)}
    </div>
  );
};

export default Navbar;