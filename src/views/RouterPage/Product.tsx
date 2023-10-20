import { useParams , 
        useSearchParams , 
        useOutletContext} from "react-router-dom"
import styles from "../page8_01.module.scss"


function Product() {
  // 使用 useOutletContext 可接收 父組件 Outlet 的 context 資料
  const outletContext = useOutletContext();
  console.log(outletContext)
  // 使用 useParams 鉤子 取的 URL :id 的參數
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  // 取得 網址後的參數 例如 /products/1?test=1234&test=56789  
  // 取 test [1234],[56789] 陣列
  const searchGet = searchParams.getAll("test").join(",");

  // 自動搜尋並抓取 
  console.log(searchParams.getAll("test"));
  return (
    <>
    <div className={styles.main}>Product {id} 的資訊
    <p>{searchGet}</p>
    </div>
    </>
  )
}

export default Product