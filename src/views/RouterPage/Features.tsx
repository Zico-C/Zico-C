import styles from "../page8_01.module.scss"
import { useSearchParams } from "react-router-dom"
function Features() {

  const [SearchParams] = useSearchParams();

  const Product = SearchParams.get("Product");
  const price = SearchParams.get("price");


  return (
    <div className={styles.main}>
      <h1>這是Features的頁面</h1>
      <p>Product 查詢參數值：{Product}</p>
      <p>price 查詢參數值：{price}</p>
    </div>
  )
}

export default Features