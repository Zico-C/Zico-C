import React, { useContext } from 'react';
import { MyContext } from './Context';

function Counter() {
// 使用 useContext 鉤子來訪問 MyContext 提供的上下文值
  const { count, add, minus } = useContext(MyContext);

  return (
    <div className='Home'>
      <h1>useContext 測試：</h1>
      <p>Count: {count}</p>
      {/* 增加按鈕，點擊時調用 add 函數 */}
      <button onClick={add}>增加</button>
      {/* 減少按鈕，點擊時調用 minus 函數 */}
      <button onClick={minus}>減少</button>
    </div>
  );
}

export default Counter;
