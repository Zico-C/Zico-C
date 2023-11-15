import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
// 定義基本的API URL
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function View() {
  //宣告新的state變數,我們稱為"text",並給予他初始文字"Hello World！"
  const [text, setText] = useState("Hello World！");
  // 使用 Ant Design 的 message 组件，获取 messageApi 和 contextHolder
  const [messageApi, contextHolder] = message.useMessage();

  const [post, setPost] = React.useState(null);

  // 定义成功消息的函数 success
  const success = () => {
    // 使用 messageApi 打开消息
    messageApi
      .open({
        type: "loading", // 指定消息类型为"成功"
        content: "Action in Post deleted!", // 设置消息内容为“Post deleted!”
        duration: 2, // 自訂義延時：2s
      })
      // 在loading 將結束時透過 then 顯示新的message
      .then(() => message.success("success Post deleted!", 2.5));
  };

  // 使用React.useEffect Hook，
  // 在組件首次渲染後執行一次axios GET請求，並將取得的數據設置為"post"
  React.useEffect(() => {
    // 向指定URL發送GET請求，`${baseURL}/1`代表第一個帖子的URL
    axios.get(`${baseURL}/1`).then((response) => {
      // 當請求成功時，將伺服器回傳的數據(response.data)設置為"post"狀態變數的值
      setPost(response.data);
    });
  }, []);
  // 定義一個函數"createPost"，當按鈕被點擊時，
  // 向指定URL發送POST請求以創建一個新的帖子
  function createPost() {
    // 向指定URL發送POST請求，並傳遞一個包含標題和內容的物件
    axios
      .post(baseURL, {
        title: "Hello World!!!",
        body: "This is a new post.",
      })
      .then((response) => {
        // 當請求成功時，將伺服器回傳的數據(response.data)設置為"post"狀態變數的值
        setPost(response.data);
      });
  }
  // 定義一個函數"updatePost"，當按鈕被點擊時，向指定URL發送PUT請求以更新帖子的內容
  function updatePost() {
    // 向指定URL發送PUT請求，`${baseURL}/1`代表要更新的帖子的URL，
    // 並傳遞一個包含新標題和內容的物件
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!!!",
        body: "This is an updated post.",
      })
      .then((response) => {
        // 當請求成功時，將伺服器回傳的數據(response.data)設置為"post"狀態變數的值
        setPost(response.data);
      });
  }
  // // 定義一個函數"deletePost"，當按鈕被點擊時，向指定URL發送DELETE請求以刪除帖子
  // function deletePost() {
  //     // 向指定URL發送DELETE請求，`${baseURL}/1`代表要刪除的帖子的URL
  //     axios.delete(`${baseURL}/1`)
  //     .then(() =>{
  //         // 當請求成功時，顯示警告訊息，並將"post"狀態變數設置為null，表示帖子已被刪除
  //         setPost(null)
  //     });
  // }

  // 定义异步函数 deletePost，用于删除帖子
  async function deletePost() {
    // 使用 Axios 发送删除请求
    await axios.delete(`${baseURL}/1`);
  }

  //定义异步函数 successAndDeletePost，用于显示成功消息并删除帖子
  async function successAndDeletePost() {
    try {
      await success(); // 先顯示成功消息
      setTimeout(() => {
        deletePost(); // 延迟执行删除帖子的操作
        setPost(null); // 设置帖子(Post)状态为 null
      }, 2000); // 延遲 2 秒執行删除操作
    } catch (error) {
      // 如果出现错误，打印错误消息到控制台
      console.error("An error occurred:", error);
    }
  }

  // // 如果没有帖子数据，则显示 "no Post!!!" 消息
  // if(!post) return ("no Post!!!");

  // 定义切换文本的函数 toggleText
  const toggleText = () => {
    if (text === "Hello World！") {
      // 如果当前文本是“Hello World！”
      setText("Welcome to React！"); // 切换文本为“欢迎来到 React！”
    } else {
      setText("Hello World！"); // 否则，切换文本为“Hello World！”
    }
  };

  return (
    <div>
      {/* {post ? ."1". : ."2".} 一個條件渲染語句：檢查'post'變量是否存在
                若"存在" 渲染 1 : 若"不存在" 渲染 2
            */}
      {post ? (
        <div className="Home">
          {contextHolder}
          <p>这是 Page2 页面内容</p>
          <p>{text}</p>
          <button onClick={toggleText}>更改文本</button>
          <div>
            <h1>{post["title"]}</h1>
            <p>{post["body"]}</p>
            <button onClick={createPost}>Create Post</button>
            <button onClick={updatePost}>Update Post</button>
            <button onClick={successAndDeletePost}>Delete Post</button>
          </div>
        </div>
      ) : (
        <div className="Home">
          {contextHolder}
          <p>这是 Page2 页面内容</p>
          <p>{text}</p>
          <button onClick={toggleText}>更改文本</button>
        </div>
      )}
    </div>
  );
}

export default View;
