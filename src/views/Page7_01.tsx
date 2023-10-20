import { useState, useEffect, useLayoutEffect } from 'react';
import styles from "./page8_01.module.scss"

function Example() {
  const [message, setMessage] = useState('Hello');

  // useEffect 是異步的，會在網頁渲染"後"執行，當 message 狀態改變時，它會被觸發。
  useEffect(() => {
    console.log('useEffect: 訊息正在更新',message); // 在渲染後執行
  }, [message]);

  // useLayoutEffect 是同步的，會在網頁渲染"前"執行，當 message 狀態改變時，它會被立即觸發。
  useLayoutEffect(() => {
    console.log('useLayoutEffect: 訊息正在更新',message); // 在渲染前執行
  }, [message]);

  const handleChangeMessage = () => {
    setMessage('World');
  };

  return (
    <div className={styles.main}>
      <button onClick={handleChangeMessage}>更改訊息</button>
    </div>
  );
}

export default Example;
