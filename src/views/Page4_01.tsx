import  { useState, useEffect } from 'react';

function View() {
  const [count, setCount] = useState(0);
  
  const [time, setTime] = useState(new Date());

  // 啟動定時器
  useEffect(() => {    
    const intervalId = setInterval(() => {
      const currentTime = new Date(); // 取得當前時間
      setTime(currentTime); // 更新时间
    }, 1000); // 每秒更新一次
  
    // 在组件卸載時清除定時器
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString(); // 格式化时间
  
  useEffect(() => {
    document.title = '現在時間 ' + formattedTime;
    console.log("time++");
  }, [formattedTime]); // 在formattedTime發生變化時更新標題時間


  return (
    <div className='Home'>
      <h1>這是page4_01的頁面</h1>
      <h1>時鐘</h1>
      <p>{formattedTime}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prev)=>prev + 1)}>
        Click me
      </button>
    </div>
  );
}

export default View