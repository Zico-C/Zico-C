// import handleNum from "./NumStatus";

// //用來管理數據的
// // 初始化對象，包含一個属性 num，初始值為 20
// const defaultState = {
//     // num:handleNum.state.num 數據量多的話，要寫很多次
//     //以下為解構寫法
//     ...handleNum.state,
// }
// // 定義一個 reducer 函式，它是一個純函式，接受一個狀態物件 state 和一個操作物件 action 作為參數
// // 這裡的預設參數 state 被設定為 defaultState，表示初始狀態
// let reducer = (state = defaultState,action:{type:string,val:number}) =>{
//     //調用dispatch執行這裡的代碼
//     //console.log("執行了reducer")
    
//     // 創建一個新的狀態物件 newState，通過深度複製的方式複製當前狀態 state
//     let newState = JSON.parse(JSON.stringify(state));
    
    
//     switch(action.type){
//         case handleNum.add1:
//             handleNum.actions[handleNum.add1](newState,action)
//             break;
//         case handleNum.add2:
//             handleNum.actions[handleNum.add2](newState,action)
//             break;
//         default:
//             break;
//     }
    
    
    
    
//     // 返回新的狀態物件 newState
//     return newState;
// }
// // 匯出 reducer 函式，以便在應用程式中使用
// export default reducer;