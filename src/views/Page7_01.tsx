import { useState, useEffect, useLayoutEffect, useRef } from "react";
import styles from "./page8_01.module.scss";

function Example() {
  // 測試 1
  const [message, setMessage] = useState("Hello");
  // 測試 2
  const [show, setShow] = useState(false);
  const divRef = useRef(null);
  // 練習一
  // useEffect 是異步的，會在網頁渲染"後"執行，當 message 狀態改變時，它會被觸發。
  useEffect(() => {
    console.log("useEffect: 訊息正在更新", message); // 在渲染後執行
  }, [message]);

  // useLayoutEffect 是同步的，會在網頁渲染"前"執行，當 message 狀態改變時，它會被立即觸發。
  useLayoutEffect(() => {
    console.log("useLayoutEffect: 訊息正在更新", message); // 在渲染前執行
  }, [message]);

  const handleChangeMessage = () => {
    setMessage("World");
  };

  // 練習二
  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  console.log("add render...");

  // useLayoutEffect 執行前 DOM元素已更新完
  useLayoutEffect(() => {
    // divRef.current  useRef可修改 dom元素
    if (divRef.current !== null) {
      (divRef.current as HTMLElement).style.marginTop = "50px";
      (divRef.current as HTMLElement).style.color = "red";
    }
    return;
  }, [show]);

  return (
    <div className={styles.main}>
      <h1>練習1</h1>
      <p>透過點擊按鈕來了解 useEffect 與 useLayoutEffect 的生命週期</p>
      <button onClick={handleChangeMessage}>更改訊息練習1</button>
      <hr color="red" />
      <br />
      <div>
        <h1>練習2</h1>
        <p></p>
        <button onClick={handleClick}>點擊觸發DOM元素</button>
        {show && (
          <>
            <div ref={divRef}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              quasi dicta expedita blanditiis ad nisi consequatur illo iste
              dolorem.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Example;
