const store={
    state:{
        //放基本數據
    },

    actions:{ 
        //放同步的方法
        
    },

    asyncActions:{ 
        //只放異步方法
      
    },
    actionNames:{}
}



let actionNames = {} 

for(let key in store.actions){
    actionNames[key] = key;
}
store.actionNames= actionNames;

export default store
//封裝目的：最終有利於開發以及維護
//封裝的思路：將來開發的時候只需要把數據寫入和方法寫入到這個文件中
//例如【XxxxStatus/index.ts】 ,而不需要再去操作其他文件