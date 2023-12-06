import { useNavigate } from "react-router-dom"
import styles from "../page8_01.module.scss"


function Products() {

  const navigateTo = useNavigate()

  return (
    <> 
        <h1 className={styles.main}>Porducts</h1> 
        <button onClick={() => navigateTo("/page8/page8_04/")}>Click to Homes</button>
    </>
  )
}

export default Products