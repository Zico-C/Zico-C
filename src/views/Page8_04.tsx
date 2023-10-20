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

  const productRouters = [
    {
      path:"/",
      element:<Homes/>
    },
    {
      path: "/products",
      element:<ProductLayout/>,
      children:[
        {
          path:"",
          element:<Products/>
        },
        {
          path:":id",
          element:<Product/>
        },
        {
          path:"features",
          element:<Features/>
        },
      ]
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]

  const productRouting = useRoutes(productRouters);

  return (
    <>
      <div className={styles.main}>
        <Header/>
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

