import { legacy_createStore , combineReducers , compose , applyMiddleware} from "redux";
// import reducer from "./reducer.ts";
import reduxThunk from "redux-thunk"
//將模組化的 reducer 引入 使用 combineReducers 合併 reducer
import handleArr from "./ArrStatus/reducer"
import handleNum from "./NumStatus/reducer"

//組合各個模組的 reducer
const reducers = combineReducers({
    handleNum,
    handleArr
})



//創建數據倉庫
//window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
//為了使瀏覽器正常使用「Redux-dev-tools插件」
// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__&& 
// window.__REDUX_DEVTOOLS_EXTENSION__());



// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
({}):compose //rt

// 把倉庫數據，瀏覽器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk))); 

export default store;