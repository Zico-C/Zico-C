import { useState } from 'react'
import styles from "./page8_01.module.scss"

function Page6_04() {
  
  const [firstNumber, setFirstNumber] = useState<string>('');  // 第一個操作數字
  const [lastNumber, setLastNumber] = useState<string>('');    // 第二個操作數字
  const [operator, setOperator] = useState<string>('');        // 存放運算符號

  const handleClick = (value: string) => {
    // 處理數字及小數點
    if (!isNaN(parseFloat(value)) || value === '.') {
      if (!operator) {
        setFirstNumber(firstNumber + value);
      } else {
        setLastNumber(lastNumber + value);
      }
    }

    // 處理運算符號
    if ('+-*/'.includes(value)) {
      setOperator(value);
    }

    // 處理運算結果
    if (value === '=') {
      if (firstNumber && lastNumber && operator) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(lastNumber);
        let calcResult: number | string = 0;
        switch (operator) {
          case '+':
            calcResult = num1 + num2;
            break;
          case '-':
            calcResult = num1 - num2;
            break;
          case '*':
            calcResult = num1 * num2;
            break;
          case '/':
            if (num2 !== 0) {
              calcResult = num1 / num2;
            } else {
              calcResult = 'Error';
            }
            break;
          default:
            break;
        }
        setFirstNumber(calcResult.toString());
        setLastNumber('');
        setOperator('');
      }
    }

    // 處理重置
    if (value === 'reset') {
      setFirstNumber('');
      setLastNumber('');
      setOperator('');
    }

    // 處理刪除事件
    if (value === 'DEL') {
      if (lastNumber !== '') {
        setLastNumber(lastNumber.slice(0, -1));
        console.log("1")
      }else if(operator !==''){
        setOperator('');
        console.log("2")
      }else if(firstNumber !== ''){
        setFirstNumber(firstNumber.slice(0,-1));
        console.log("3")
      }
    }
  }

  console.log("firstNumber",firstNumber)
  console.log("operator",operator)
  console.log("lastNumber",lastNumber)

  return (
    <div className={styles.calc}>
      <h1>計算機</h1>
      <div className={styles.textshow}>
        <p>{firstNumber} {operator} {lastNumber}</p>
      </div>
      <div className={styles.calcButtons}>
        <div className={styles.buttons}>
          <button  onClick={()=>handleClick('7')}>7</button>
          <button  onClick={()=>handleClick('8')}>8</button>
          <button  onClick={()=>handleClick('9')}>9</button>
          <button  onClick={()=>handleClick('DEL')}>DEL</button>
        </div>     
        <div className={styles.buttons}>
          <button onClick={()=>handleClick('4')}>4</button>
          <button onClick={()=>handleClick('5')}>5</button>
          <button onClick={()=>handleClick('6')}>6</button>
          <button onClick={()=>handleClick('+')}>+</button>
        </div>
        <div className={styles.buttons}>
          <button onClick={()=>handleClick('1')}>1</button>
          <button onClick={()=>handleClick('2')}>2</button>
          <button onClick={()=>handleClick('3')}>3</button>
          <button onClick={()=>handleClick('-')}>-</button>
        </div>
        <div className={styles.buttons}>
          <button onClick={()=>handleClick('.')}>.</button>
          <button onClick={()=>handleClick('0')}>0</button>
          <button onClick={()=>handleClick('/')}>/</button>
          <button onClick={()=>handleClick('*')}>*</button>
        </div>
        <div className={styles.buttons}>
          <button onClick={()=>handleClick('reset')}>RESET</button>
          <button onClick={()=>handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Page6_04