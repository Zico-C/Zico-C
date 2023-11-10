import axios from "axios"; // 引入 Axios 函式庫

//創建axios案例
const instance = axios.create({
    // 設置基本的請求路徑
    baseURL:"http://xue.cnkdl.cn:23683",
    //這個時間是你每次請求的過期時間，這次請求認為20秒之後這個是
    //失敗的
    timeout:20000 // 設置請求的超時時間為 20 秒
});

// 請求攔截器
instance.interceptors.request.use(config=>{
    // 請求攔截器允許你在發送請求前對請求進行一些處理，這裡不對請求進行修改，直接返回 config

    return config
},err=>{
    // 如果請求出現錯誤，這裡將錯誤返回，以便後續處理
    return Promise.reject(err);
});

//回覆攔截器
instance.interceptors.response.use(res=>{
    // 響應攔截器允許你在接收到響應後對其進行一些處理，這裡返回響應的數據部分
    return res.data
},err=>{
    // 如果響應出現錯誤，這裡將錯誤返回，以便後續處理
    return Promise.reject(err);
})


// 將創建的 Axios 實例作為默認導出
export default instance