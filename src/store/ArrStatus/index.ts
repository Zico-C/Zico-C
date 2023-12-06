const store = {
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrPush(newState:{sarr:number[]},action:
            {type:string,val:number}){
                //push是會將一或多個的值，加入至一個陣列中。
                //例如 const num = [1,2,3,4] length = 4
                //const nums = num.push[5];
                //console.log(nums) = [1,2,3,4,5] length = 5
            newState.sarr.push(action.val)
        }
    },
    
    //名稱統一管理
    // sarrPush:"sarrPush"
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
