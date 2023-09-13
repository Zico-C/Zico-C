import { useState } from 'react'
import { useRoutes , Link } from "react-router-dom"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <>
      <div className='App'>
        {/* <Link to="/home">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/user">User</Link> */}

        {/* 佔位符組件，類似窗口，用來展示組件，有點像vue中的 router-view */}
        {/* <Outlet></Outlet> */}
        {outlet}
      </div>
    </>
  );
}

export default App
