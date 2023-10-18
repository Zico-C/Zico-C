import  { useState, useEffect } from 'react';

function View() {
  const [data, setData] = useState(''); // 初始化状态

  // 使用 useEffect 讀取 localStorage 中的數據設定在useState狀態中
  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    savedData && setData(savedData);
  }, []);

  // 使用 useEffect 監視數據更新狀態，並將數據儲存至 localStorage
  useEffect(() => {
    localStorage.setItem('myData', data);
  }, [data]);

  // 數據變化
  const handleDataChange = (e:any) => {
    setData(e.target.value);
  };

  return (
    <div>
        <div>
            <input
                type="text"
                onChange={handleDataChange}
                placeholder="輸入資料"
            />
        </div><br/>
        <div>
            <p>從localStorage讀取到的資料為： {data}</p>
        </div>
    </div>
  );
}

export default View;