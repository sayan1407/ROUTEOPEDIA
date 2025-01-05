import React from 'react'
import { useNavigate,Link} from 'react-router-dom';


function Product() {
    const navigate = useNavigate();
  return (
    <div>Product
        <button onClick={() => {
            navigate("/Product/Create")
        }}>Add Product</button>
        <Link to="/Product/Details/5">
          <button>Go to product detail - 5</button>
        </Link>
    </div>
  )
}

export default Product