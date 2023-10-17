//引入數據庫
import { useDispatch, useSelector } from "react-redux";
import numStatus from "@/store/NumStatus"
import { useEffect , useState } from "react"
const View = () => {
    //透過useDispatch修改倉庫數據
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(0);

    // 步骤1：使用 useEffect 处理副作用
    useEffect(() => {
      // 步骤2：在这里执行副作用的逻辑
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
    
      }, 1000);
  
      // 步骤3：清除副作用（在组件卸载或依赖项变化时）
      return () => {
        clearInterval(interval);
      };
    }, [seconds]); // 依赖项
    //使用useSelector獲取倉庫數據
    const {num,sarr} = useSelector((state:RootState)=>({
        num:state.handleNum.num,
        sarr:state.handleArr.sarr
    }))

    //對 number 的同步操作
    const changeNum = () =>{
        // dispatch({type:"字符串(認為是一個記號)",value});
        //type 是固定的 ， value 可自訂的
        dispatch({type:"add3",val:200})
    }

    //對 number 的異步操作
    const changeNum2 = () =>{
        // 下面是一開始的寫法 － 同步寫法
        // dispatch({type:"add1"})
        // 異步寫法 － redux-thunk的用法
        // 基本格式： dispatch(異步執行的函數)
        // dispatch((dis:Function)=>{
        //     setTimeout(()=>{
        //         dis({type:"add1"})
        //     },1000)
        // })

        // 優化 redux-thunk的異步寫法
        // dispatch(調用狀態管理中的asyncAdd1)
        dispatch(numStatus.asyncActions.asyncAdd1);
    }
    
    ////使用useSelector獲取倉庫數據
    // const {sarr} = useSelector((state:RootState)=>({
    //     sarr:state.handleArr.sarr
    // }))

    //對 number 的操作
    const changeArr = () =>{
        // dispatch({type:"字符串(認為是一個記號)",value});
        //type 是固定的 ， value 可自訂的
        dispatch({type:"sarrPush",val:100})
    }

    return(
        <div className='Home'>
            <p>這是Page1頁面內容</p>
            <p>{num}</p>
            <button onClick={changeNum}>同步按鈕</button>
            <button onClick={changeNum2}>異步按鈕</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>按鈕</button>
            <p>{seconds}</p>
        </div>
    )
}

export default View