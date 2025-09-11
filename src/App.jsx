import { useEffect, useState } from "react";
import "./App.css";  

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

 async function fetchProducts() {
  // local development aur Vercel production ke liye alag URL
  const url =
    process.env.NODE_ENV === "development"
      ? "https://api-e-commerace-in-node-js.onrender.com/product/all" // local ya dev
      : "/api/products"; // deployed Vercel proxy

  const res = await fetch(url);
  const data = await res.json();
  setProducts(data);
}


  return (
   <div>
  <div className="header">
    <h1>E commerce</h1>
    <div className="manu">
      <p>home</p>
      <p>about</p>
      <p>menu</p>
    </div>
  </div>
  <div className="main">
    {products.map(item => (
      <div key={item._id} className="productitem">
        <img src={item.image} />
        <h3>Name: {item.name}</h3>
        <h4>Category: {item.category}</h4>
        <p>Price: ₹{item.discountedPrice}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;