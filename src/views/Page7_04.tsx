import { useRef , useState } from "react"

const View = () => {
    const inputRefAlert = useRef<HTMLInputElement>(null);  
    const inputRef = useRef<HTMLInputElement>(null);  
    const [inputText,setInputText] = useState("");
    console.log("add render ...")

    const handleSubmit = () => {
      alert('A name was submitted: ' + inputRefAlert.current?.value);
    };

    const submitHandler = () => {
      console.log(inputRef.current?.value); //取得input value
      console.log(inputRef.current?.type); //取得input type
      inputRef.current!.type = "password"; //將該input的type更改為password
      console.log(inputRef.current?.type); //取得input type
    }

    const getInputValue = async () => {
      let getText = (document.getElementById("text") as HTMLInputElement).value;
      await setInputText(getText); // 使用 await 确保 state 更新完毕
      alert(inputText);
    };
    
    return (
        <div className='Home'>
            <div className="App">
                <div> 
                  <input type="text" ref={inputRef} /><br/>
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