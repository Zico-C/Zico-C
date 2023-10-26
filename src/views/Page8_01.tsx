import { useLocation , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import styles from "./page8_01.module.scss"
function MyComponent() {
  const [nameUrl , setNameUrl] = useState("");
  const [ageUrl , setAgeUrl] = useState("");
  const navigateTo = useNavigate();
  // 使用 useLocation 來取得當前路由位置
  const location = useLocation();
  
  // 使用 URLSearchParams 來解析搜索參數
  const searchParams = new URLSearchParams(location.search);
  
  // 使用 get() 方法來取得特定搜索參數的值
  const paramValue = searchParams.get('name');
  const paramValue2 = searchParams.get('age');

  const handleURL = (e:any) =>{
    // 取消送出跳轉事件
    e.preventDefault();
    const URL = `?name=${nameUrl}&age=${ageUrl}`; 
    navigateTo(URL);
  }

  const onReset = ()=>{
    setNameUrl("");
    setAgeUrl("");
    navigateTo("/page8/page8_01") 
  }
  return (
    <div className={styles.main}>
      <div>
        <form onSubmit={handleURL}>
          <input type="text" placeholder='name' onChange={(e)=>setNameUrl(e.target.value)}  />
          <input type="text" placeholder='age' onChange={(e)=>setAgeUrl(e.target.value)}  /><br/> 
          <button type='submit'>submit</button>
          <button type='reset' onClick={onReset}>reset</button>
        </form> 
      </div>
      <hr style={{marginTop:"3rem",marginBottom:"3rem"}}/>
      <h1>搜尋參數示例</h1>
        <p>搜尋參數 name 的值是：
          <span style={{color:"blue",fontSize:"2.5rem"}}>
            {paramValue}
          </span>
        </p>
        <p>搜尋參數 age 的值是：
          <span style={{color:"DeepSkyBlue",fontSize:"2.5rem"}}>
            {paramValue2}
          </span>
        </p>
    </div>
  );
}

export default MyComponent;

