import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  }

  return (
    <div className="imp">
      <div className="main">
        {products.map(item => (
          <div key={item.id} className="productitem">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h3>Name: {item.title}</h3>
              <h4>Category: {item.category}</h4>
              <p>Price: ₹{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
