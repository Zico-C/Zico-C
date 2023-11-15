import { useState } from "react";

function Page5_07() {
  const [count] = useState<number[]>([1, 2, 3, 4, 5, 6, 3, 3, 3, 10]);
  const [number, setNumber] = useState(count);
  const [numberArr, setNumberArr] = useState(count);

  const handleClick = () => {
    // 使用MAP一一比對陣列內的值 是否等於 3
    // 若 等於 3 返回 0   ，  不等於 3 則顯示原有 Value
    setNumber(number?.map((value) => (value === 3 ? 0 : value)));
  };
  const handleClick2 = () => {
    // 使用 filter 刪除數組中所有值為 3 的元素
    setNumberArr(numberArr.filter((value) => value !== 3));
  };

  return (
    <>
      <div style={{ fontSize: "3rem" }}>
        <h1>Before：{count.join(" , ")}</h1>
        <h1>After：{number.join(" , ")}</h1>

        <button onClick={handleClick}>將數字陣列中，為 3 的數值變成 0</button>
        <br />
        <h1>After：{numberArr.join(" , ")}</h1>
        <button onClick={handleClick2}>將數字陣列中，為 3 的數值刪除</button>
      </div>
    </>
  );
}

export default Page5_07;
