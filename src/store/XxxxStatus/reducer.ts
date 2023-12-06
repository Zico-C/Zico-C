import handleNum from "./index";

//用來管理數據的
// 初始化對象，包含一個属性 num，初始值為 20
// const defaultState = {
//     // num:handleNum.state.num 數據量多的話，要寫很多次
//     //以下為解構寫法
//     ...handleNum.state,
// }
// 定義一個 reducer 函式，它是一個純函式，接受一個狀態物件 state 和一個操作物件 action 作為參數
// 這裡的預設參數 state 被設定為 defaultState，表示初始狀態
let reducer = (state = {...handleNum.state},action:{type:string}) =>{
    //調用dispatch執行這裡的代碼
    //console.log("執行了reducer")
    
    // 創建一個新的狀態物件 newState，通過深度複製的方式複製當前狀態 state
    let newState = JSON.parse(JSON.stringify(state));
    
    //優化思路：switch使用方法是用 action.type和 case進行對比
    //這種做法很像遍歷，將case的值做成對象，actionNames
    // switch(action.type){
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState,action)
    //         break;
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState,action)
    //         break;
    //     default:
    //         break;
    // }
    //【優化】上面這樣寫，只要每添加一個方法，就要多寫一句case
    //拿action.type和actionNames進行每項對比，如果相等就調用
    //調用 模塊名稱.actions[下標](newState,action)
    for (let key in handleNum.actionNames){
        // key 是每一個鍵
        //判斷是否相等
        if(action.type === handleNum.actionNames[key]){
            handleNum.actions[handleNum.actionNames[key]]
            (newState,action)
            break;
        }
    }
    //上面寫法可以達到每一次寫一次方法就不用在手動添加case

    
    
    
    
    // 返回新的狀態物件 newState
    return newState;
}
// 匯出 reducer 函式，以便在應用程式中使用
export default reducer;