import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchitem();
  }, []);

  async function fetchitem() {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
    console.log(data);
  }

  if (!product) {
    return;
  }

return (
    <div className="single-product">
        <div className="single-product-box">
            <div>
                <img src={product.image} />
                <h2>Name: {product.title}</h2>
                <h4>Category: {product.category}</h4>
                <p>description: {product.description}</p>
                <h3>Price: ₹{product.price}</h3>
            </div>
            <br />
        </div>
    </div>
);
}

export default SingleProduct;
