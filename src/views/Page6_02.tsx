import { useState } from "react";
import styles from "./page8_01.module.scss"


var number1 = Math.floor(Math.random()*101);
var number2 = Math.floor(Math.random()*101);

function Page6_02() {
  const [inputText,setInputText] = useState(0);

  const result = () =>{
    if((number1 + number2) === inputText){
      alert("成功 !!!");
    }else{
      alert("錯誤 !!!")
    }
  }

  return (
    <div className={styles.main}>
      <h1>Page 6_02 頁面</h1>
      <span>{number1} + {number2}</span>
      <input type="number" onChange={(e)=>setInputText(e.target.valueAsNumber)} />
      <button onClick={result}>送出</button>
    </div>
  )
}

export default Page6_02