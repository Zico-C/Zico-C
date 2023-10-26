import { useParams , 
        useSearchParams , 
        useOutletContext,
        useLocation} from "react-router-dom"
import styles from "../page8_01.module.scss"


function Product() {
  const location = useLocation();
  // 使用 useOutletContext 可接收 父組件 Outlet 的 context 資料
  const outletContext = useOutletContext();
  console.log(outletContext)
  // 使用 useParams 鉤子 取的 URL :id 的參數
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  // 取得 網址後的參數 例如 /products/1?test=1234&test=56789  
  // 取 test [1234],[56789] 陣列
  const searchGet = searchParams.getAll("param1").join(",");

  const searchLocation = location.search ;
  // 自動搜尋並抓取 
  console.log(searchParams.getAll("test"));
  const SearchURL = () => {
    return (
      <div>
        <p>Product{id}特定查詢參數的值：{searchGet}</p>
        <p>Product{id}URL中的查詢參數：{searchLocation}</p>
        <hr style={{marginTop:"3rem",marginBottom:"3rem"}}/>
        <div>      
          <h2>當前網頁路徑資訊：</h2>
          <pre>{JSON.stringify(location, null, 2)}</pre><br/>
          <h1>當前頁面路徑為：{location.pathname}</h1>
        </div>
      </div>
    );
  };
  
  return (
    <>
    <div className={styles.main}>
        <h1>Product {id} 的資訊 </h1>
        {searchGet? <SearchURL />: null}
    </div>
    </>
  )
}

export default Product