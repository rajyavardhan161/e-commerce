import { useEffect, useState } from "react";
import "./App.css";  

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  setProducts(data);
  console.log(data);
}

  return (
   <div className="imp">
  
  <div className="main">
    {products.map(item => (
      <div key={item._id} className="productitem">
        <img src={item.image} />
        <h3>Name: {item.title}</h3>
        <h4>Category: {item.category}</h4>
        <p>Price: ₹{item.price}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;