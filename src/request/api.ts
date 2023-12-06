import request from "./index"

//請求中：請求參數和返回值類型都需要進行規範


//驗證碼請求
export const CaptchaAPI = ()
//Promise 表示它是一個特殊的對象，用於處理可能需要一些時間才能完成的操作
:Promise<CaptchaAPIRes> =>request.get("/prod-api/captchaImage");
//request.get("/prod-api/captchaImage")發送一個請求，並期望從該網址獲得一些數據或資訊


//登入請求 Req 請求 ； Res 回覆
export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes> =>request.post("/prod-api/login",params);

