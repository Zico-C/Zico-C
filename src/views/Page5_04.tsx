import { useState } from "react";
import { useQuery } from "react-query";
import styles from "./page5.module.scss";
import axios from "axios";
const timeToDate = (time: number) => {
  let t = new Date(time);
  return t.toLocaleString();
};

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const Planet = ({ planet }: any) => {
  return (
    <div className={styles.card}>
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
      <p>climate - {planet.climate}</p>
    </div>
  );
};

/*
  const result = useQuery(queryKey,queryFunction)
  先定義好 fetch function 或 axios function
*/

const Planets = () => {
  const [page, setPage] = useState(1);
  // 使用 useQueryClient hook 來訪問 QueryClient 實例

  const fetchPlanets = async ({ queryKey }: { queryKey: any }) => {
    console.log("queryKey", queryKey);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/planets/?page=${queryKey[1]}`
      );
      return response.data;
    } catch (error) {
      console.log("API Error", error);
    }
  };
  // data：取得的API資料
  // dataUpdatedAt：最近查詢傳回「成功」狀態的時間  *回傳值為timestamp格式*
  /* status：表示查詢的當前狀態的屬性 *回傳值為字串 string*
      1."idle"：這表示查詢尚未開始執行。通常在初始化查詢時出現。
      2."loading"：表示查詢正在進行中，正在向服務器請求數據。
        當查詢還在進行中時，通常會顯示一個載入指示器或類似的UI，以告訴用戶數據還在加載中。
      3."error"：表示查詢遇到了錯誤，無法成功完成。
        當查詢出現錯誤時，可以使用 error 屬性來獲取錯誤信息，以便進行錯誤處理和顯示錯誤信息。
      4."success"：表示查詢已成功完成，並且已獲得最新的數據。
        當查詢成功時，你可以使用 data 屬性來訪問數據的結果。

  */
  const { data, dataUpdatedAt, status } = useQuery(
    // queryKey
    ["planets", page],
    fetchPlanets,
    {
      // refetchOnWindowFocus：當瀏覽器切換到其他分頁再切換回來時，會重新 Fetch data
      // *預設為：true 開啟*
      refetchOnWindowFocus: false,
      // keepPreviousData：當下一筆資料載入時，先保存當上一筆的資料直到下一筆資料載入完成才顯示出來。
      // *預設為：false 關閉* 解決獲取資料時閃爍
      keepPreviousData: true,
      // cacheTime：快取資料在記憶體中的保留時間 (毫秒為單位)
      // *預設為 5*60*1000 (五分鐘)*  可輸入 Infinity 設定停用刪除快取資料功能
      cacheTime: Infinity,
    }
  );

  return (
    <div className={styles.APImain}>
      <h1>API page : {page}</h1>
      <h3>Data updated at ： {timeToDate(dataUpdatedAt)}</h3>
      <button
        onClick={() => {
          if (page > 1) setPage((prev) => prev - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (page < 6) setPage((prev) => prev + 1);
        }}
      >
        Next
      </button>

      {status === "success" && (
        <div>
          {data?.results?.map((planet: Planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
