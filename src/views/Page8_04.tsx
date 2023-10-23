import Features from "./RouterPage/Features";
import Header from "./RouterPage/Header";
import Homes from "./RouterPage/Homes";
import NotFound from "./RouterPage/NotFound";
import Product from "./RouterPage/Product";
import ProductLayout from "./RouterPage/ProductLayout";
import Products from "./RouterPage/Products";
import styles from "./page8_01.module.scss"
import {useRoutes} from "react-router-dom";


function View() {
  // 定義路由配置
  const productRouters = [
    {
      path:"/",                 // 根路徑
      element:<Homes/>          // 對應的元件是 Homes
    },
    {
      path: "/products",
      element:<ProductLayout/>,
      children:[                // 子路由配置
        {
          path:"",              // 子路由的根路徑
          element:<Products/>   // 對應的元件是 Products
        },
        {
          path:":id",           // 帶有 id 參數的路徑，例如 /products/1
          element:<Product/>    // 對應的元件是 Product
        },
        {
          path:"features",      // /products/features 路徑
          element:<Features/>   // 對應的元件是 Features
        },
      ]
    },
    {
      path:"*",                 // 所有其他路徑
      element:<NotFound/>       // 對應的元件是 NotFound
    }
  ]
 // 使用 useRoutes 鉤子來處理路由
  const productRouting = useRoutes(productRouters);

  return (
    <>
      <div className={styles.main}>
        {/* 頁面頂部的 Header 元件 */}
        <Header/>
        {/* 基於路由的元件呈現 */}
        {productRouting} 

        {/*<Routes>
          <Route path="/" element={<Homes/>} />
           <Route path="/products" element={<Products/>}/>
           <Route path="/products/:id" element={<Product/>}/>
           <Route path="/features" element={<Features/>}/> 
          <Route path="/products"  element={<ProductLayout/>}>
            <Route index  element={<Products/>}/>
            <Route path=":id" element={<Product/>}/>
            <Route path="features" element={<Features/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
          </Routes> */}
          
      </div>
    </>
  );
}

export default View;

