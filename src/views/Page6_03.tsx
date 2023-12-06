import { useSearchParams } from 'react-router-dom'
import styles from "./page8_01.module.scss"
import soul from "../assets/adsadasdtest.jpg"
import toy from "../assets/asdsadtest.jpg"
const movies = ["玩具總動員4","靈魂急轉彎"];
const stars = ["1","2","3","4","5"];

function Page6_03() {
  // 使用 React Router 中的 useSearchParams 鉤子來管理 URL 中的查詢參數
  const [searchParams, setSearchParams] = useSearchParams({
    movie: "", // 初始化 movie 查詢參數
    star: ""   // 初始化 star 查詢參數
  });

  // 從查詢參數中獲取 movie 的值，並存儲在 movieSelected 中
  const movieSelected = searchParams.get("movie");

  // 從查詢參數中獲取 star 的值，並存儲在 starSelected 中
  const starSelected = searchParams.get("star");

  // 點擊處理函數，用於更新查詢參數並替換 URL
  // qsType   參數回傳 "movie" 或 "star"
  // selected 參數回傳 被選取的值參數回傳 可能是 一部電影名稱 或者 星星的數字
  const handleClick = (qsType:any, selected:any) => {
    setSearchParams((prev) => {
      prev.set(qsType, selected);
      return prev;
      // 使用 replace: true 以替換瀏覽器的歷史紀錄
      //  1.防止使用者點擊後退按鈕時返回到之前的頁面狀態：
      //      在點擊後退按鈕時不返回到之前的頁面狀態
      //  2.簡化瀏覽器的歷史記錄
    }, { replace: true }); 
  };

  // 選中樣式函數，根據選中的值決定是否應用 styles.selected 樣式
  const selectedStyle = (selectedValue:any, targetValue:any) => {
    // selectedValue：目前選的值
    // targetValue：之前選的值
    // 加上 return 就可以將 結果 回傳到 className:{styles.selected} 以內
    return selectedValue === targetValue ? styles.selected : "";
  }

  return (
    <>
      <div>
        <div className={styles.select}>
          {/* 根據選中的電影來顯示相應的海報 */}
          {movieSelected && (
            <img
              src={movieSelected === "玩具總動員4" ? toy : soul}
              width={250}
              alt='電影海報'
              className={styles.movie}
            />
          )}
        </div>
        {movieSelected && <p className={styles.select}>電影名稱：{movieSelected}</p>}
        <br/>
        <div className={styles.select}>
          {movies.map((movie) => (
            <div
              key={movie}
              // 根據 selectedStyle 函數來決定是否應用 styles.selected 樣式
              className={`${selectedStyle(movie, movieSelected)} movie`}
              onClick={() => handleClick("movie", movie)}
            >
              <p>{movie}</p>
            </div>
          ))}
        </div>
        <br/>
        {starSelected && <p className={styles.select}>您給了：{starSelected} 顆星。</p>}
        <div className={styles.select}>
          <br/>
          {stars.map((star) => (
            <div
              key={star}
              // 根據 selectedStyle 函數來決定是否應用 styles.selected 樣式
              onClick={() => handleClick("star", star)}
              className={`${selectedStyle(star, starSelected)} star`}
            >
              <p>{star}</p>
            </div>
          ))}
        </div>
        <a href="https://youtu.be/-ScajqKRzOs?si=GwLz7v6tvWqlQi9d" style={{fontSize: "15px"}}>參考資料</a>
      </div>
    </>
  )
}

export default Page6_03;
