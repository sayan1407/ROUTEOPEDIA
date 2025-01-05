import React, { useState } from 'react'
import { useNavigate,Link,Navigate} from 'react-router-dom';


function Product() {
    const navigate = useNavigate();
    const[goToProduct,setGoToProduct] = useState(false);
  return (
    <div>Product
        <button onClick={() => {
            navigate("/Product/Create")
        }}>Add Product</button>
        <Link to="/Product/Details/5">
          <button>Go to product detail - 5</button>
        </Link>
        {goToProduct && <Navigate to="/Product/Details/3" />}
        <button onClick={() => {
            setGoToProduct(true)
        }}>Go to product - 3</button>
    </div>
  )
}

export default Product