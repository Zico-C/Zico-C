import { useQuery } from "react-query"
import {useState ,useEffect} from "react";

  const fetchPokeAPI = async ({queryKey}:any) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryKey[1]}/`);
    const data = await res.json();
    return data;
  };

function View() {
  
  const [dexId,setDexId] = useState(1);
  const {
    data,       // 從API獲得的數據
    isSuccess,  // 數據獲得成功
    isError,    // 數據獲取失敗
    error,      // 錯誤信息
    isLoading,  // 正在加載數據
    isIdle,     // 初始狀態
    refetch     // 手動重新獲取數據的內建函數
  } = useQuery(
    // 在這裡 dexId 是 Pokemon 的 ID
    ["PokeAPI", dexId ,"Hello","World"], // queryKey，可以包含多個參數
    fetchPokeAPI, //用於數據的函數
    {
      //設定false 以防止在視窗重新取得焦點時自動重新請求數據。這有助於減少不必要的網絡請求，提高性能。
      refetchOnWindowFocus: false,
      cacheTime:5000, //快取存取時間 : 5秒
      // enabled:false,  //自動發送請求
    }
  );

  useEffect(() => {
    // 在組件首次加載時，讀取 dexId 的值，若沒有讀取到給他預設為 1
    const newPokeMonId = parseInt(localStorage.getItem('PokeMon') as string )|| 1;
    setDexId(newPokeMonId);
  }, []);

  useEffect(() => {
    // 在 dexId 更改時，將其保存到 localStorage
    localStorage.setItem('PokeMon', dexId.toString());
  }, [dexId]);
  
  if(isError){
    // 如果數據獲取失敗，則顯示錯誤訊息
    return <h1>{error.message}</h1>
  }

  if(isLoading){
    // 如果正在加載數據，顯示加載訊息
    return <h1>...Loading</h1> 
  }

  if(isIdle){
    return (
      <>
        {/* refetch() 發送請求*/}
        <button onClick={()=>refetch()}>Fetch</button> 
        {/* 如果是初始狀態，顯示 "Not Ready..." 以及手動獲取數據按鈕 */}
        <h1>Not Ready...</h1>
      </>
    ) 
  }

  return (
      <>
        <div>
          <h3>Data Updated At: </h3>
          <div>
            <button onClick={()=>{if(dexId>=2){setDexId((prev) => prev -1)}}}>Prev</button>
            <button onClick={()=>setDexId((prev) => prev +1)}>Next</button>
          </div>
          <div>
          </div>
          <div>
            <div className="card">
              <p className="dexId">
                No.00{data.id} {data.name}
              </p>
              <img src={data?.sprites?.front_default} />
              <div className="typeflex">
                {data?.types?.map((type:any) => (
                  <div className={`types ${type.type.name}`} key={type.type.name}>
                    <span className="mt-1">{type.type.name.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default View