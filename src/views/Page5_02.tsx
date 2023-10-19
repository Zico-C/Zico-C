import { useMutation,useQuery ,useQueryClient } from "react-query";
import { useState } from "react";
import styles from "./page8_01.module.scss"

// 定義一個用於從伺服器獲取 post 數據的非同步函數
const fetchPosts = async() =>{
  const res = await fetch(`https://my-json-server.typicode.com/Zico-C/Zico-C/posts`);
  const data = await res.json();
  return data;
}

// 定義一個用於創建新 post 的非同步函數，接受包含 id、title 和 author 的參數
const createPosts = async ({id,title,subtitle,author,memberNum}:{id:any,title:any,subtitle:any,author:any,memberNum:number}) => {
    const res = await fetch("https://my-json-server.typicode.com/Zico-C/Zico-C/posts", {
      // 發送 POST 請求至 http://localhost:3000/posts
      method: "POST", 
      headers: {
        // 將請求設置為：id、title 和 author 的 JSON 數據
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id ,
        title,
        subtitle,
        author,
        memberNum,
      }),
    });
    const data = await res.json(); 
    return data; //返回創建的Post 數據
  }

// 定義一個用於刪除 post 的非同步函數
const deletePost = async (postId:any) => {
  const res = await fetch(`https://my-json-server.typicode.com/Zico-C/Zico-C/posts/${postId}`, {
    // 向 http://localhost:3000/posts/{postId} 發送 DELETE 請求
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

// React 組件，用於顯示帖子數據並創建新帖子
function View () {
  const [inputTitle,setInputTitle] = useState("");
  const [insubTitle,setInsubTitle] = useState("");

  // 使用 useQuery hook 從伺服器獲取 post 數據，"posts" 是查詢的鍵
  const { data, isSuccess } = useQuery(["posts"],fetchPosts);
  // 使用 useQueryClient hook 來訪問 QueryClient 實例
  const queryClient = useQueryClient();
  // 使用 useMutation hook 引入 createPosts 函數，處理創建新post的邏輯
  const createPostMutation  = useMutation(createPosts,{
    // 當成功時，使名為 "posts" 的查詢失效，以便在創建新post後刷新數據
    onSuccess:(data)=>{
      /* invalidateQueries：使名為 "posts" 的查詢數據失效。
      當數據失效時，React Query 將重新發送請求以獲取最新的數據。 */
      queryClient.invalidateQueries("posts");
      console.log("創建Post成功",data);
    },
    // 當出現錯誤時處理錯誤情況
    onError:(error)=>{
      console.log("創建Post失敗",error)
    },
    // 當 mutate 完成時觸發此回調
    onSettled:()=>{
      console.log("創建Post操作成功");
    }
  });

  const deletePostMutation = useMutation(deletePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      console.log("刪除成功", data);
    },
    onError: (error) => {
      console.error("刪除失敗", error);
    },
    onSettled: () => {
      console.log("刪除操作完成");
    },
  });


  function generateUniqueKey() {
    const uniqueKey = Math.floor(Math.random() * 100000) + Date.now();
    return uniqueKey; // 將結果轉為字符串
  }
  
  const uniqueKey = generateUniqueKey();



  
  // 點擊按鈕時觸發 mutate 函數以創建新post
  const handleClick = () =>{
    createPostMutation.mutate({ 
      id: 0,
      title: inputTitle,
      subtitle: insubTitle,
      author: "ZICO",
      memberNum: uniqueKey,
    })
    setInputTitle("");
    setInsubTitle("");
  }
  // 點擊按鈕時觸發 mutate 函數以刪除post
  const handleDelete = (postId:any) => {
    deletePostMutation.mutate(postId);
  };

  return(
    <>
      <div className={styles.main}>
        <form>
            <input 
              type="text" 
              placeholder="title" 
              value={inputTitle}
              onChange={(e)=>setInputTitle(e.target.value)} 
              />
            <input 
              type="text" 
              placeholder="subTitle" 
              value={insubTitle}
              onChange={(e)=>setInsubTitle(e.target.value)} 
              />
        </form>
        {isSuccess &&
          data.map((post:any)=>(
            <div key={post.id}>
              <p>id：{post.id}</p>
              <p>title：{post.title}</p>
              <p>subTitle：{post.subtitle}</p>
              <p>author：{post.author}</p>
              <p>memberNum：{post.memberNum}</p>
              <button onClick={() => handleDelete(post.id)} className={styles.delete}>Delete Post</button>
              <hr color="red"/>
            </div>
          ))}
          <button onClick={handleClick}>Create Post</button>

          
      </div> 
    </>
  )
}
export default View
