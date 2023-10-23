import { useRef , useState , useEffect ,useLayoutEffect } from "react"

const View = () => {
    const inputRefAlert = useRef<HTMLInputElement>(null);  
    const inputRef = useRef<HTMLInputElement>(null);  
    const [inputText,setInputText] = useState("");

    //渲染網頁前 第一次 render
    useLayoutEffect(() => {
        console.log("渲染網頁前 第一次 render , useLayoutEffect")
    }, []);
    //渲染網頁後 第二次 渲染網頁
    useEffect(() => {
        console.log("渲染網頁後 第二次 render , useEffect")
    }, []);

    console.log("add render");

    // 當inputText(useState)"狀態更新後" => add render => 執行副作用
    useEffect(() => {
      if (inputText !== "") {
        console.log("useEffect render")
        alert(inputText);
      }
    }, [inputText]);

    const handleSubmit = () => {
      alert('A name was submitted: ' + inputRefAlert.current?.value);
    };

    const submitHandler = () => {
      console.log(inputRef.current?.value); //取得input value
      console.log(inputRef.current?.type); //取得input type
      inputRef.current!.type = "password"; //將該input的type更改為password
      console.log(inputRef.current?.type); //取得input type
    }

    const getInputValue = () => {
      let getText = (document.getElementById("text") as HTMLInputElement).value;
      setInputText(getText); // 使用 await 确保 state 更新完毕
    };
    
    return (
        <div className='Home'>
            <div className="App">
                <div> 
                  <input type="text" ref={inputRef}  placeholder="不會觸發 Render"/><br/>
                  <button onClick={submitHandler}>Submit console text && type = password</button>
                </div>
                <div>
                  <input type="text" ref={inputRefAlert} /><br/>
                  <button onClick={handleSubmit}>Submit Alert</button>
                </div>
                <div>
                  <input type="text" id="text"/><br/>
                  <button onClick={getInputValue}>useState 測試</button>
                </div>
            </div>
        </div>
    )
}

export default View