// 創建一個名為 store 的物件，用於管理應用程式的狀態和操作
const store={
    // 定義狀態 state，初始值包含一個名為 num 的屬性，設定為 20
    state:{
        num:20
    },
    // 定義操作 actions，包含了一系列可以修改狀態的操作函式
    actions:{ //只放同步的方法
        // 第一個操作：add1，用於將狀態中的 num 屬性加 1
        add1(newState:{num:number}){
            newState.num++
        },
        // 第二個操作：add2，接受一個參數 val，將狀態中的 num 屬性加上 val 的值
        add2(newState:{num:number},action:
            {type:string,val:number}){
            newState.num+=action.val
        },
        // 第三個操作：add3，接受一個參數 val，將狀態中的 num 屬性加上 val 的值
        add3(newState:{num:number},action:
            {type:string,val:number}){
            newState.num+=action.val
        },
    },
    // 優化 redux-thunk 的異步寫法 模仿 Vuex的寫法
    asyncActions:{ //只放異步方法
        asyncAdd1(dispatch:Function){
            setTimeout(()=>{
                dispatch({type:"add1"})
            },1000)
        }
    },

    // 名稱統一管理
    // add1:"add1",
    // add2:"add2"
    // actionNames:{
    //     add1:"add1",
    //     add2:"add2"
    // }
    actionNames:{}
}
//現在要做到actionNames 自動生成，不用每次添加方法，
//都在actionNames手動添加key值

// 創建一個空的物件 actionNames，將用於存儲操作的名稱
let actionNames = {} //定義一個全局 actionNames
//actionNames有多少key，取決於action裡有多少函數。所以遍歷 store.actions，
//給actionNames自動添加key
for(let key in store.actions){
    actionNames[key] = key;
}
store.actionNames= actionNames;

export default store
//封裝目的：最終有利於開發以及維護
//封裝的思路：將來開發的時候只需要把數據寫入和方法寫入到這個文件中
//例如【XxxxStatus/index.ts】 ,而不需要再去操作其他文件