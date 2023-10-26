import { ChangeEvent, useEffect , useState } from "react";
//antd = Ant.Design UI 框架庫
import { Input , Space , Button , message} from 'antd';
import { useAppDispatch } from "@/store/hook.tsx";
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import './login.less'
import { generateToken } from "./xxx.tsx"
// 從 "@/request/api.ts" 模組中導入名為 captchaAPI 的函數
// import { CaptchaAPI , LoginAPI } from "@/request/api.ts";
// 從 react-router-dom 引入 useNavigate 實現跳轉頁面
import { useNavigate } from "react-router-dom"
import getcaptchaImg  from '../../assets/22d5n.png'
import { setEmail, setIsLogin, setUser, setIevel } from "@/redux_redux_toolkit/store/globalSlice.tsx";
const view = () =>{
    let NavigateTo = useNavigate();
    const disp = useAppDispatch();
    const token = generateToken();
    // useEffect 函式用於處理副作用操作，它會在組件渲染之後執行
    //加載完這個組件之後，加載這個背景
    useEffect(()=>{
        // 在這個 useEffect 中，我們希望執行兩個操作：
        // 1. 初始化登入背景 (initLoginBg 函式)
        initLoginBg();
        disp(setIsLogin(false));
        // 2. 監聽瀏覽器窗口大小變化事件，並在窗口大小變化時重新載入背景
        window.onresize = function(){
            // 當窗口大小發生變化時，我們再次呼叫 initLoginBg 函式
            initLoginBg();
        };
        // getcaptchaImg();
    },[]); //一定要加[] 空數組作為依賴，確定只要組件掛載時執行
    //背景初始化應該只在頁面加載時執行一次，而不會在用戶輸入文本或其他事件觸發時重新加載

    //獲得 使用者輸入的訊息
    //定義HOOK useState 變量
    const [userNameValue,setuserNameValue] = useState(""); //定義使用者輸入帳號變量
    const [passWordValue,setpassWordValue] = useState(""); //定義使用者輸入密碼變量
    const [captchValue,setcaptchValue] = useState(""); //定義驗證碼變量
    //定義一個變量保存驗證碼圖片訊息
    // const [captchaImg,setCaptchImg] = useState("");//定義驗證碼圖片訊息變量


    const  userNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        //獲取使用者輸入的帳號
        // console.log(e.target.value);
        //修改用戶 userNameValue 這個變量為使用者輸入的值，以後拿到 userNameValue 等同拿到使用者輸入的帳號
        setuserNameValue(e.target.value);
    }
    const  passWordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setpassWordValue(e.target.value);
    }
    const  captchChange = (e:ChangeEvent<HTMLInputElement>) => {
        setcaptchValue(e.target.value);
    }

    // 定義一個函數名為 gotoLogin，用於處理用戶的登入操作
    const gotoLogin = async() =>{

        // 在控制台輸出使用者輸入的帳號、密碼和驗證碼，方便測試和除錯
        console.log("使用者輸入的帳號：",userNameValue);
        console.log("使用者輸入的密碼：",passWordValue);
        console.log("使用者輸入的驗證碼：",captchValue);
        // 驗證是否有空值
        if(!userNameValue.trim() || !passWordValue.trim() || !captchValue.trim()){
            // 如果帳號、密碼或驗證碼有任何一個是空白或只包含空白字符（使用 trim 方法來判斷）
            //，則顯示警告訊息
            message.warning("帳號密碼有誤，請重新輸入！")
            return // 中止函數執行，不繼續往下執行
        }
            /*FIXME: 後端API連不上先連線本地端
            //發起登入請求
            let loginAPIRes = await LoginAPI({
                username:userNameValue,
                password:passWordValue,
                code:captchValue,
                uuid:localStorage.getItem("uuid") as string
            })
            console.log(loginAPIRes);
            if(loginAPIRes.code === 200){
                //1.提示登入成功
                message.success("登入成功！")
                //2.保存token
                localStorage.setItem("lege-react-management-token",token)
                //3.跳轉到(首頁) /page1
                NavigateTo("/page1")
                //4.刪除本地保存中的 "uuid"
                localStorage.removeItem("uuid");
            }*/
            if ((userNameValue === "zico12356" && passWordValue === "123456" && captchValue === "22d5n")||
                (userNameValue === "user5566" && passWordValue === "123456" && captchValue === "22d5n")) {
                // 1.提示登入成功
                message.success("登入成功！");
                // 2.保存token、User.name
 
                localStorage.setItem("lege-react-management-token", token);
                localStorage.setItem("User.name",userNameValue)
                localStorage.setItem("User.email",`${userNameValue}@gmail.com`)

                disp(setUser(userNameValue));
                disp(setIsLogin(true));
                disp(setEmail(`${userNameValue}@gmail.com`));
                disp(setIevel(userNameValue));;
                // 3.跳轉到(首頁) /page1
                NavigateTo("/page1");


            } else {
                message.error("登入失败，請檢查帳號、密碼和驗證碼！");
            }

    }
    // FIXME: 後端API連線不上暫時本地驗證
    // //點擊驗證碼圖片盒子的事件函數
    // const getcaptchaImg = async() => {
    //     //驗證碼請求
    //     // captchaAPI().then((res)=>{ //呼叫 captchaAPI 函數來發送驗證碼請求，然後處理請求的回應
    //     //     console.log(res);   // 將請求的回應（res）輸出到控制台以供測試和除錯
    //     // });
    //     let CaptchaAPIRes = await CaptchaAPI();
    //     console.log(CaptchaAPIRes)
    //     if(CaptchaAPIRes.code == 200){
    //         //1.把圖片數據顯示在img上面
    //         setCaptchImg("data:image/gif;base64,"+CaptchaAPIRes.img)
    //         //2.本地保存uuid，給登入的時候使用
    //         localStorage.setItem("uuid",CaptchaAPIRes.uuid)
    //     }else{

    //     }
    // }    

    return(
        <div className={styles.loginPage}>
        {/* 存放背景 */}
        <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登入盒子 */}
            <div className={styles.loginBox+ " loginbox"}>
                {/* 標題部分 */}
                <div className={styles.title}>
                    <h1>ZICO前端&nbsp;‧&nbsp;後臺管理系統</h1>
                    <p>Strive Everyday</p>
                    {/* <p>User Account(Test)：qdtest1</p>
                    <p>User Password(Test)：123456</p> */}
                </div>
                {/* 登入表單部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="User Account" onChange={userNameChange}/>
                        <Input.Password placeholder="User Password"  onChange={passWordChange}/>
                        <div className="captchaBox">
                            <Input placeholder="Input Captcha" onChange={captchChange} />
                            <div    className="captchaImg" 
                                    // onClick={getcaptchaImg}
                                    >
                                <img height="38" src={getcaptchaImg} alt="" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" block onClick={gotoLogin}>Sign in</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default view