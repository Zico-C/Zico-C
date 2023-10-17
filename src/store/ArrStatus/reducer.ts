import handler from "./index";

//用來管理數據的
let reducer = (state = {...handler.state},action:{type:string}) =>{

    
    let newState = JSON.parse(JSON.stringify(state));
    

    for (let key in handler.actionNames){
        // key 是每一個鍵
        //判斷是否相等
        if(action.type === handler.actionNames[key]){
            handler.actions[handler.actionNames[key]]
            (newState,action)
            break;
        }
    }

    
    
    
    
    // 返回新的狀態物件 newState
    return newState;
}
// 匯出 reducer 函式，以便在應用程式中使用
export default reducer;